function doGet(event) {
  const callback = event.parameter.callback || ''
  const response = {
    ok: true,
    wishes: readWishes_(),
  }

  if (callback && !/^[A-Za-z_$][0-9A-Za-z_$]{0,100}$/.test(callback)) {
    return jsonOutput_({ ok: false, error: 'Invalid callback name' })
  }

  if (callback) {
    const payload = JSON.stringify(response)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
    return ContentService
      .createTextOutput(`${callback}(${payload});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT)
  }

  return jsonOutput_(response)
}

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents)
    const name = String(data.name || '').trim()
    const attendance = String(data.attendance || '')
    const guestCount = Number(data.guestCount || 1)
    const wish = String(data.wish || '').trim()

    if (!name || name.length > 80 || wish.length > 500) {
      throw new Error('Tên hoặc lời chúc không hợp lệ.')
    }
    if (!['yes', 'no'].includes(attendance) || !Number.isInteger(guestCount) || guestCount < 1 || guestCount > 5) {
      throw new Error('Thông tin tham dự không hợp lệ.')
    }

    const sheet = getWishesSheet_()
    const lock = LockService.getScriptLock()
    lock.waitLock(10000)
    try {
      sheet.appendRow([
        new Date(),
        safeCellValue_(name),
        attendance,
        guestCount,
        safeCellValue_(wish),
      ])
    } finally {
      lock.releaseLock()
    }

    return jsonOutput_({ ok: true })
  } catch (error) {
    console.error('Unable to save wedding RSVP:', error)
    return jsonOutput_({ ok: false, error: String(error.message || error) })
  }
}

function readWishes_() {
  const sheet = getWishesSheet_()
  const lastRow = sheet.getLastRow()
  if (lastRow < 2) return []

  return sheet.getRange(2, 1, lastRow - 1, 5).getValues()
    .filter((row) => String(row[4] || '').trim())
    .slice(-50)
    .map((row) => ({
      submittedAt: row[0] instanceof Date ? row[0].toISOString() : String(row[0] || ''),
      name: String(row[1] || ''),
      wish: String(row[4] || ''),
    }))
}

function getWishesSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = spreadsheet.getSheetByName('Lời chúc')
  if (!sheet) sheet = spreadsheet.insertSheet('Lời chúc')

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Thời gian', 'Họ tên', 'Tham dự', 'Số khách', 'Lời chúc'])
    sheet.setFrozenRows(1)
  }
  return sheet
}

function safeCellValue_(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value
}

function jsonOutput_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON)
}
