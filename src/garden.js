const bride = 'PHÙNG THỊ MỸ TÂM'
const groom = 'NGUYỄN VĂN CÔNG'
const weddingDate = new Date('2026-11-08T10:00:00+07:00')
const mapBride = 'https://maps.app.goo.gl/FeymssNYsQ5pCVof8'
const mapGroom = 'https://maps.app.goo.gl/XUN5aBas6NM2aExq6'
const wishesEndpoint = 'https://script.google.com/macros/s/AKfycbycHIbwpCjROanvHxDO4zQVRfNYIXhVA_8EI12--ULU2v0xDy9pmTYBEh9iuvPCE7diNg/exec'
const assetRoot = import.meta.env?.BASE_URL ?? './public/'
const imageRoot = `${assetRoot}images`
const photoRoot = `${imageRoot}/optimized`
const backgroundImageRoot = new URL(`${imageRoot}/`, document.baseURI).href
const audioRoot = `${assetRoot}audio`
document.documentElement.style.setProperty('--couple-background', `url("${photoRoot}/HTS_8643.jpg")`)
document.documentElement.style.setProperty('--invitation-card-bg', `url("${backgroundImageRoot}background.jpg")`)

const photos = [
  { src: `${photoRoot}/HTS_8643.jpg`, alt: 'Ảnh cưới của Phùng Thị Mỹ Tâm và Nguyễn Văn Công' },
  { src: `${photoRoot}/HTS_8814.jpg`, alt: 'Khoảnh khắc ngày cưới của Tâm và Công bên bó hoa cưới' },
  { src: `${photoRoot}/HTS_8804.jpg`, alt: 'Khoảnh khắc dịu dàng của Tâm và Công' },
  { src: `${photoRoot}/HTS_8855.jpg`, alt: 'Chân dung chú rể Nguyễn Văn Công' },
  { src: `${photoRoot}/HTS_8869.jpg`, alt: 'Chân dung cô dâu Phùng Thị Mỹ Tâm' },
  { src: `${photoRoot}/HTS_8914.jpg`, alt: 'Tâm và Công cùng nâng ly chúc mừng' },
  { src: `${photoRoot}/HTS_8962.jpg`, alt: 'Khoảnh khắc vui vẻ trong ngày cưới' },
  { src: `${photoRoot}/HTS_9004.jpg`, alt: 'Tâm và Công trong trang phục cưới truyền thống' },
  { src: `${photoRoot}/HTS_9047.jpg`, alt: 'Tâm và Công trao nhẫn cưới' },
  { src: `${photoRoot}/HTS_9067.jpg`, alt: 'Tâm và Công trong không gian lễ cưới' },
]
const featuredPhoto = `${photoRoot}/HTS_8643.jpg`
const ringPhoto = `${photoRoot}/HTS_9047.jpg`
const renderGalleryPhoto = (photo, photoIndex) => `<button class="gallery-photo" type="button" data-photo-index="${photoIndex}" aria-label="Xem ảnh lớn ${photoIndex + 1}: ${photo.alt}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" /></button>`
const calendarYear = weddingDate.getUTCFullYear()
const calendarMonth = weddingDate.getUTCMonth()
const calendarWeddingDay = weddingDate.getUTCDate()
const weddingShortDate = `${String(calendarWeddingDay).padStart(2, '0')}.${String(calendarMonth + 1).padStart(2, '0')}`
const weddingDateLabel = `${weddingShortDate}.${calendarYear}`
const weddingWeekday = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long' }).format(weddingDate)
const calendarWeekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
const calendarFirstWeekday = new Date(calendarYear, calendarMonth, 1).getDay()
const calendarDaysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate()
const weddingCalendarCells = Array.from({ length: Math.ceil((calendarFirstWeekday + calendarDaysInMonth) / 7) * 7 }, (_, index) => {
  const day = index - calendarFirstWeekday + 1
  if (day < 1 || day > calendarDaysInMonth) return '<span class="calendar-day is-empty" aria-hidden="true"></span>'
  const weekday = index % 7
  const weddingDay = day === calendarWeddingDay
  return `<span class="calendar-day${weekday === 0 ? ' is-sunday' : ''}${weekday === 6 ? ' is-saturday' : ''}${weddingDay ? ' is-wedding-day' : ''}"${weddingDay ? ` aria-label="Ngày cưới ${weddingDateLabel}, ${weddingWeekday}"` : ''}>${day}${weddingDay ? '<i aria-hidden="true">♥</i>' : ''}</span>`
}).join('')
const rosePetals = Array.from({ length: 10 }, (_, index) => {
  const shades = ['#e9a8b5', '#f3c4cb', '#d98298', '#f7d9dc', '#d98da0']
  return `<ellipse cx="0" cy="-20" rx="13" ry="23" fill="${shades[index % shades.length]}" transform="rotate(${index * 36})" />`
}).join('')
const roseInnerPetals = Array.from({ length: 8 }, (_, index) => {
  const shades = ['#f9e2e3', '#eaa8b5', '#f4c9cf', '#dc91a2']
  return `<ellipse cx="0" cy="-12" rx="9" ry="16" fill="${shades[index % shades.length]}" transform="rotate(${index * 45})" />`
}).join('')
const roseCenter = `<g fill="#e7b9a0"><ellipse cx="0" cy="-5" rx="6" ry="9"/><ellipse cx="0" cy="-5" rx="6" ry="9" transform="rotate(120)"/><ellipse cx="0" cy="-5" rx="6" ry="9" transform="rotate(240)"/></g><path d="M-5 1c-4-6 4-12 9-7 4 4-1 10-5 7-3-2 0-5 2-3" fill="none" stroke="#b67679" stroke-width="1.7" stroke-linecap="round"/>`
const invitationBotanical = `<svg viewBox="0 0 440 100" aria-hidden="true" focusable="false"><g fill="none" stroke="#b8a27a" stroke-width="1.15" stroke-linecap="round"><path d="M-8 83C38 65 54 22 106 32s69 45 118 27 95-45 143-25 61 30 83 17"/><path d="M0 20c43 16 68 53 112 43s64-39 110-31 81 47 130 31 65-36 95-28"/><path d="M54 57c-8-17-22-25-37-27m71 7c-3-18 4-31 17-39m42 46c12-17 28-22 45-19m50 34c-2-20 8-33 24-42m39 25c15-12 31-13 47-6m38 12c9-17 23-24 39-24"/></g><g fill="#d9cbaa" opacity=".9"><ellipse cx="29" cy="39" rx="5" ry="12" transform="rotate(-42 29 39)"/><ellipse cx="44" cy="55" rx="5" ry="12" transform="rotate(35 44 55)"/><ellipse cx="102" cy="18" rx="5" ry="12" transform="rotate(-20 102 18)"/><ellipse cx="124" cy="36" rx="5" ry="12" transform="rotate(50 124 36)"/><ellipse cx="184" cy="34" rx="5" ry="12" transform="rotate(-48 184 34)"/><ellipse cx="202" cy="47" rx="5" ry="12" transform="rotate(40 202 47)"/><ellipse cx="263" cy="22" rx="5" ry="12" transform="rotate(-25 263 22)"/><ellipse cx="284" cy="39" rx="5" ry="12" transform="rotate(45 284 39)"/><ellipse cx="352" cy="22" rx="5" ry="12" transform="rotate(-40 352 22)"/><ellipse cx="371" cy="36" rx="5" ry="12" transform="rotate(42 371 36)"/></g><g fill="#e9b6bd" stroke="#fff8ed" stroke-width="1"><g transform="translate(46 28)"><ellipse cy="-7" rx="4" ry="7"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(72)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(144)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(216)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(288)"/><circle r="2.2" fill="#cfac72" stroke="none"/></g><g transform="translate(119 31) scale(.8)"><ellipse cy="-7" rx="4" ry="7"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(72)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(144)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(216)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(288)"/><circle r="2.2" fill="#cfac72" stroke="none"/></g><g transform="translate(226 57) scale(.9)"><ellipse cy="-7" rx="4" ry="7"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(72)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(144)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(216)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(288)"/><circle r="2.2" fill="#cfac72" stroke="none"/></g><g transform="translate(321 31)"><ellipse cy="-7" rx="4" ry="7"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(72)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(144)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(216)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(288)"/><circle r="2.2" fill="#cfac72" stroke="none"/></g><g transform="translate(397 48) scale(.78)"><ellipse cy="-7" rx="4" ry="7"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(72)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(144)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(216)"/><ellipse cy="-7" rx="4" ry="7" transform="rotate(288)"/><circle r="2.2" fill="#cfac72" stroke="none"/></g></g></svg>`
const coverRoses = `
  <div class="cover-rose-garden" aria-hidden="true">
    <span class="cover-rose rose-blush"><svg viewBox="0 0 140 140"><path class="rose-leaves" d="M55 80C30 88 24 111 25 120c20-1 34-13 35-33Zm28 1c22 5 34 22 34 34-19-2-32-13-35-30Z"/><g transform="translate(70 65)">${rosePetals}${roseInnerPetals}${roseCenter}</g></svg></span>
    <span class="cover-rose rose-blue"><svg viewBox="0 0 140 140"><path class="rose-leaves" d="M55 80C30 88 24 111 25 120c20-1 34-13 35-33Zm28 1c22 5 34 22 34 34-19-2-32-13-35-30Z"/><g transform="translate(70 65)">${rosePetals.replaceAll('#e9a8b5', '#a7bed1').replaceAll('#f3c4cb', '#d1dfeb').replaceAll('#d98298', '#7898b6').replaceAll('#f7d9dc', '#e4edf4').replaceAll('#d98da0', '#94aec6')}${roseInnerPetals.replaceAll('#f9e2e3', '#e8eff5').replaceAll('#eaa8b5', '#a8bfd3').replaceAll('#f4c9cf', '#c8d9e7').replaceAll('#dc91a2', '#809fbd')}${roseCenter.replaceAll('#e7b9a0', '#d2ad80').replaceAll('#b67679', '#718ba5')}</g></svg></span>
    <span class="cover-rose rose-blush"><svg viewBox="0 0 140 140"><path class="rose-leaves" d="M55 80C30 88 24 111 25 120c20-1 34-13 35-33Zm28 1c22 5 34 22 34 34-19-2-32-13-35-30Z"/><g transform="translate(70 65)">${rosePetals}${roseInnerPetals}${roseCenter}</g></svg></span>
    <span class="cover-rose rose-blue"><svg viewBox="0 0 140 140"><path class="rose-leaves" d="M55 80C30 88 24 111 25 120c20-1 34-13 35-33Zm28 1c22 5 34 22 34 34-19-2-32-13-35-30Z"/><g transform="translate(70 65)">${rosePetals.replaceAll('#e9a8b5', '#a7bed1').replaceAll('#f3c4cb', '#d1dfeb').replaceAll('#d98298', '#7898b6').replaceAll('#f7d9dc', '#e4edf4').replaceAll('#d98da0', '#94aec6')}${roseInnerPetals.replaceAll('#f9e2e3', '#e8eff5').replaceAll('#eaa8b5', '#a8bfd3').replaceAll('#f4c9cf', '#c8d9e7').replaceAll('#dc91a2', '#809fbd')}${roseCenter.replaceAll('#e7b9a0', '#d2ad80').replaceAll('#b67679', '#718ba5')}</g></svg></span>
    <span class="cover-rose rose-blush"><svg viewBox="0 0 140 140"><path class="rose-leaves" d="M55 80C30 88 24 111 25 120c20-1 34-13 35-33Zm28 1c22 5 34 22 34 34-19-2-32-13-35-30Z"/><g transform="translate(70 65)">${rosePetals}${roseInnerPetals}${roseCenter}</g></svg></span>
  </div>`
const curtainFlowers = `
  <svg class="curtain-florals" viewBox="0 0 180 640" aria-hidden="true" focusable="false">
    <path d="M91 615C76 524 121 470 88 390S116 252 87 184 103 77 88 22" fill="none" stroke="#72866f" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M89 541C59 518 42 497 34 468M92 476C118 456 132 433 140 401M91 378C61 355 47 332 44 304M95 292C122 274 135 251 139 224M88 198C62 180 52 158 53 134M91 116C111 97 120 78 119 57" fill="none" stroke="#87977d" stroke-width="1.6" stroke-linecap="round"/>
    <g fill="#81947a" opacity=".94">
      <path d="M42 476C17 464 14 443 18 430c19 1 33 16 24 46ZM53 493C30 489 20 500 17 515c16 9 31-1 36-22ZM133 414c24-17 25-39 18-52-18 7-27 24-18 52ZM124 435c22-5 31 8 33 23-13 11-29 3-33-23ZM46 310c-24-10-29-30-24-44 19 3 32 20 24 44ZM54 333c-22-1-32 12-33 28 15 8 30-2 33-28ZM132 238c22-15 24-35 18-49-18 6-27 22-18 49ZM125 259c22-4 31 9 32 24-14 9-28 1-32-24ZM56 142c-20-10-24-27-19-40 16 3 26 17 19 40ZM61 161c-19-1-27 10-28 24 13 7 25-2 28-24ZM115 73c18-12 18-27 14-38-14 5-20 17-14 38Z"/>
      <path d="M38 474c-8-17-14-27-20-35M49 493c-13 2-22 8-29 18M136 410c6-16 11-28 16-38M128 434c14 2 23 8 29 18M42 307c-7-15-13-25-19-33M48 331c-12 1-20 7-27 16M135 235c5-14 10-25 15-34M128 256c13 2 21 8 27 17" fill="none" stroke="#d9dfd0" stroke-width="1.1" opacity=".8"/>
    </g>
    <g stroke="#dedbd2" stroke-width="1">
      <g transform="translate(91 180) scale(1.38)"><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(60)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(120)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(180)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(240)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(300)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa"/><ellipse cy="-4" rx="5" ry="6.5" fill="#f8f7f1" transform="rotate(120)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa" transform="rotate(240)"/><circle r="2.6" fill="#e9d9aa" stroke="none"/></g>
      <g transform="translate(126 349) scale(1.03)"><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(60)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(120)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(180)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(240)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(300)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa"/><ellipse cy="-4" rx="5" ry="6.5" fill="#f8f7f1" transform="rotate(120)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa" transform="rotate(240)"/><circle r="2.6" fill="#e9d9aa" stroke="none"/></g>
      <g transform="translate(58 509) scale(.91)"><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(60)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(120)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(180)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#fffefa" transform="rotate(240)"/><ellipse cy="-9" rx="8.5" ry="10" fill="#f8f7f1" transform="rotate(300)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa"/><ellipse cy="-4" rx="5" ry="6.5" fill="#f8f7f1" transform="rotate(120)"/><ellipse cy="-4" rx="5" ry="6.5" fill="#fffefa" transform="rotate(240)"/><circle r="2.6" fill="#e9d9aa" stroke="none"/></g>
    </g>
    <g fill="#fffefa" opacity=".9"><circle cx="72" cy="116" r="2"/><circle cx="101" cy="327" r="2"/><circle cx="72" cy="447" r="1.8"/><circle cx="105" cy="562" r="2"/><circle cx="70" cy="94" r="1.6"/></g>
  </svg>`
const curtainRoseRibbon = `
  <svg class="curtain-florals rose-ribbon" viewBox="0 0 240 220" aria-hidden="true" focusable="false">
    <path d="M238 208C211 182 202 157 182 143S143 121 126 95 91 66 61 54" fill="none" stroke="#71856d" stroke-width="2.5" stroke-linecap="round"/>
    <g fill="#7e9679">
      <path d="M213 184c-25-7-37-1-43 16 19 12 34 4 43-16Zm-32-39c-5-22 4-35 22-40 12 18 3 33-22 40Zm-34-30c-22-13-27-29-17-45 20 4 27 20 17 45ZM119 93C98 87 90 73 96 57c18 0 28 13 23 36ZM83 67C64 71 51 62 50 46c14-10 28-3 33 21Z"/>
      <path d="M209 185c-14-5-24-6-35-4M179 144c3-14 9-23 20-32M148 114c-14-9-20-17-23-31M117 90c-13-5-20-12-23-24M79 65c-12 3-20 1-29-8" fill="none" stroke="#d9e2d2" stroke-width="1.4"/>
    </g>
    <g stroke="#dfe4d8" stroke-width="1.1">
      <g transform="translate(156 74)">
        <ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(45)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(90)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(135)"/><ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5" transform="rotate(180)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(225)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(270)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(315)"/>
        <path d="M-8 2c-2-8 4-14 10-12 6 2 6 8 1 11-3 2-7 1-7-2 0-2 2-4 5-3" fill="none" stroke="#a4b496" stroke-width="2.2" stroke-linecap="round"/>
      </g>
      <g transform="translate(196 123) scale(.76)">
        <ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(45)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(90)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(135)"/><ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5" transform="rotate(180)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(225)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(270)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(315)"/>
        <path d="M-8 2c-2-8 4-14 10-12 6 2 6 8 1 11-3 2-7 1-7-2 0-2 2-4 5-3" fill="none" stroke="#a4b496" stroke-width="2.2" stroke-linecap="round"/>
      </g>
      <g transform="translate(116 119) scale(.63)">
        <ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(45)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(90)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(135)"/><ellipse cy="-13" rx="10" ry="16" fill="#eaf0e5" transform="rotate(180)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(225)"/><ellipse cy="-13" rx="10" ry="16" fill="#e5edde" transform="rotate(270)"/><ellipse cy="-13" rx="10" ry="16" fill="#fffefa" transform="rotate(315)"/>
        <path d="M-8 2c-2-8 4-14 10-12 6 2 6 8 1 11-3 2-7 1-7-2 0-2 2-4 5-3" fill="none" stroke="#a4b496" stroke-width="2.2" stroke-linecap="round"/>
      </g>
      <g transform="translate(156 74) scale(1.14)"><path d="M0-23C9-29 18-24 18-16 27-12 29-3 22 3 23 12 16 19 8 17 2 25-8 23-12 16-22 17-27 8-23 0-28-8-22-17-14-18-12-27-3-29 0-23Z" fill="#dce8d7" stroke="#c8d6c1"/><path d="M0-15C7-20 14-16 13-9 19-5 18 2 12 5 12 12 5 15 0 11-6 16-12 11-10 5-17 1-14-7-8-8-7-14-2-17 0-15Z" fill="#f8faf4" stroke="#d8e2d2"/><path d="M-7 0C-7-7 4-10 9-4 14 2 8 10 1 8-6 7-7 1-2-2 2-4 5-1 3 2" fill="none" stroke="#829879" stroke-width="2.4" stroke-linecap="round"/></g>
      <g transform="translate(196 123) scale(.83)"><path d="M0-23C9-29 18-24 18-16 27-12 29-3 22 3 23 12 16 19 8 17 2 25-8 23-12 16-22 17-27 8-23 0-28-8-22-17-14-18-12-27-3-29 0-23Z" fill="#f3f6ee" stroke="#d5dfcf"/><path d="M0-15C7-20 14-16 13-9 19-5 18 2 12 5 12 12 5 15 0 11-6 16-12 11-10 5-17 1-14-7-8-8-7-14-2-17 0-15Z" fill="#e2ecdD" stroke="#d6e1d1"/><path d="M-7 0C-7-7 4-10 9-4 14 2 8 10 1 8-6 7-7 1-2-2 2-4 5-1 3 2" fill="none" stroke="#8b9e81" stroke-width="2.4" stroke-linecap="round"/></g>
      <g transform="translate(116 119) scale(.68)"><path d="M0-23C9-29 18-24 18-16 27-12 29-3 22 3 23 12 16 19 8 17 2 25-8 23-12 16-22 17-27 8-23 0-28-8-22-17-14-18-12-27-3-29 0-23Z" fill="#e5eddf" stroke="#cedbc8"/><path d="M0-15C7-20 14-16 13-9 19-5 18 2 12 5 12 12 5 15 0 11-6 16-12 11-10 5-17 1-14-7-8-8-7-14-2-17 0-15Z" fill="#fffefa" stroke="#dce5d7"/><path d="M-7 0C-7-7 4-10 9-4 14 2 8 10 1 8-6 7-7 1-2-2 2-4 5-1 3 2" fill="none" stroke="#83977a" stroke-width="2.4" stroke-linecap="round"/></g>
    </g>
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M142 145c-18-21-37-18-37-5 0 12 17 15 36 7 19 10 37 7 37-5 0-13-20-15-37 3Z" fill="#f5f3e9" stroke="#cdbb91" stroke-width="2.2"/>
      <path d="M140 148c-13 17-25 35-45 57l28-9 8 19c16-23 22-46 21-66Z" fill="#f6f4eb" stroke="#d6c7a1" stroke-width="1.8"/>
      <path d="M153 148c13 18 26 37 49 56l-29-7-7 19c-17-22-23-45-22-65Z" fill="#efeee4" stroke="#d6c7a1" stroke-width="1.8"/>
      <path d="M140 150c-12 17-22 33-35 48M154 150c13 17 24 33 39 47" stroke="#fffefa" stroke-width="1.7"/>
      <path d="M147 143c-5-5-12-3-12 2 0 5 8 7 14 2 6 5 14 3 14-2 0-5-8-7-16-2Z" fill="#e4e9dc" stroke="#c5cfbc" stroke-width="1.5"/>
    </g>
  </svg>`

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="invite-cover" id="inviteCover" aria-label="Thiệp mời cưới của Phùng Thị Mỹ Tâm và Nguyễn Văn Công">
    <div class="invitation-paper">
      <div class="invitation-floral invitation-floral-top">${invitationBotanical}</div>

      <div class="invitation-paper-inner">
        <p class="invitation-kicker">THƯ MỜI ĐÁM CƯỚI</p>
        <figure class="invitation-portrait">
          <img src="${photoRoot}/HTS_9004.jpg" alt="Ảnh cưới của Phùng Thị Mỹ Tâm và Nguyễn Văn Công" decoding="async" />
          <figcaption>Công & Tâm</figcaption>
        </figure>
        <h1 class="invitation-names">${bride}<span><i>♥</i></span>${groom}</h1>
        <div class="invitation-date"><span></span><time datetime="2026-11-08">08.11.2026</time><span></span></div>
        <p class="invitation-greeting">Trân trọng kính mời quý khách</p>
        <p class="invitation-time"><span aria-hidden="true">▢</span> 08.11.2026 <i>·</i> 10:00</p>
      </div>
      <div class="invitation-floral invitation-floral-bottom">${invitationBotanical}</div>
    </div>
  </div>
  <main class="invitation" id="invitation" aria-hidden="true">
    <header class="topbar">
      <a class="monogram" href="#top" aria-label="Về đầu trang">T<span>&</span>C</a>
      <nav class="topnav" aria-label="Điều hướng chính">
        <a href="#couple">Chúng mình</a><a href="#celebration">Ngày vui</a><a href="#gallery">Album</a><a href="#rsvp">Xác nhận</a>
      </nav>
      <a class="topbar-date" href="#celebration">08.11.2026 <span>↗</span></a>
    </header>

    <section class="hero" id="top">
      <div class="hero-photo" aria-hidden="true"></div>
      <article class="hero-invitation-card">
        <div class="hero-card-floral hero-card-floral-top">${invitationBotanical}</div>
       
        <div class="hero-card-content">
          <p class="hero-card-kicker">THƯ MỜI ĐÁM CƯỚI</p>
          <figure class="hero-card-photo">
            <img class="hero-card-photo-first is-active" src="${photoRoot}/HTS_9004.jpg" alt="Ảnh cưới của Phùng Thị Mỹ Tâm và Nguyễn Văn Công" decoding="async" />
            <img class="hero-card-photo-second" src="${photoRoot}/HTS_8814.jpg" alt="Khoảnh khắc ngày cưới của Tâm và Công bên bó hoa cưới" aria-hidden="true" decoding="async" />
          </figure>
          <p class="hero-card-script">Công & Tâm</p>
          <h1>${bride}<span>♥</span>${groom}</h1>
          <div class="hero-card-date"><span></span><time datetime="2026-11-08">08.11.2026</time><span></span></div>
          <p class="hero-card-greeting">Trân trọng kính mời quý khách<br />đến chung vui trong ngày hạnh phúc</p>
          <p class="hero-card-time"><span aria-hidden="true">▢</span> CHỦ NHẬT <i>·</i> 10:00</p>
          <a class="hero-card-link" href="#couple" aria-label="Cuộn xuống để xem chi tiết thư mời">Cuộn xuống để xem chi tiết thư mời <span class="hero-card-arrow" aria-hidden="true">∨</span></a>
        </div>
        <div class="hero-card-floral hero-card-floral-bottom">${invitationBotanical}</div>
      </div>
    </section>

    <div class="wedding-divider" aria-label="Ngày cưới 08 tháng 11 năm 2026"><span>08 · 11 · 2026</span><i aria-hidden="true">✳</i><span>MÃI BÊN NHAU</span></div>

    <section class="welcome section-pad reveal" id="couple">
      <div class="section-label"><span>01</span> CÂU CHUYỆN TÌNH YÊU</div>
      <div class="love-story-heading">
        <p class="script-note">Hành trình bên nhau</p>
        <h2>Câu Chuyện Chúng Mình</h2>
        <span class="gold-rule"></span>
        <p class="love-story-intro">“Sau một hành trình yêu thương, chúng mình quyết định cùng nhau bước sang một chặng đường mới. Sự hiện diện của bạn sẽ là niềm vui và hạnh phúc lớn đối với chúng mình trong ngày đặc biệt này.”</p>
      </div>
      <div class="love-timeline">
        <article class="story-item story-item-left">
          <figure class="story-photo"><img src="${photos[0].src}" alt="Ảnh kỷ niệm của Tâm và Công — dấu mốc đầu tiên" loading="lazy" decoding="async" /></figure>
          <div class="story-copy"><p class="story-milestone">DẤU MỐC 01 <span>·</span> LẦN ĐẦU GẶP NHAU</p><p>Lần đầu gặp nhau là khi tham gia ngoại khóa cùng lớp anh đi Đại học Bách Khoa. Mình và anh đi chung chuyến xe thứ hai để hội ngộ với các bạn. Mình bị say xe nên muốn nhờ anh cho mình dựa một chút (anh nói anh nhớ như vậy, mình thì không nhớ gì há há). Từ đó anh ghét mình vì cho rằng mình vô duyên thật.</p></div>
        </article>
        <article class="story-item story-item-right">
          <figure class="story-photo"><img src="${photos[2].src}" alt="Ảnh kỷ niệm của Tâm và Công — dấu mốc thứ hai" loading="lazy" decoding="async" /></figure>
          <div class="story-copy"><p class="story-milestone">DẤU MỐC 02 <span>·</span> GẦN TẾT NĂM 2018</p><p>Gần Tết năm 2018, mình có nhắn tin làm quen với anh vì nghe bạn kể anh rất thú vị. Nhưng anh không trả lời. Sau một khoảng thời gian, mình nhắn cho anh là "kiêu thế" sau đó anh phản hồi, rồi từ ấy chúng mình bắt đầu trò chuyện với nhau nhiều hơn.</p></div>
        </article>
        <article class="story-item story-item-left">
          <figure class="story-photo"><img src="${photos[8].src}" alt="Ảnh kỷ niệm của Tâm và Công — dấu mốc thứ ba" loading="lazy" decoding="async" /></figure>
          <div class="story-copy"><p class="story-milestone">DẤU MỐC 03 <span>·</span> NGÀY TỎ TÌNH</p><p>Sau khi biết điểm thi đại học, anh mời mình xuống nhà ăn cơm. Chiều tối hôm ấy, anh hẹn mình đi uống nước và nói chuyện. Sau này anh mới kể lại, lúc đó anh hẹn đi vì muốn nhìn mình kỹ hơn, bởi anh sợ nếu tỏ tình mà bị từ chối thì sẽ không còn cơ hội gặp lại nữa. Vào một ngày mùa thu tháng 10, anh tỏ tình với mình qua tin nhắn. Ban đầu mình chỉ nghĩ anh nói đùa, nhưng hóa ra lại là thật. Đêm đó, chúng mình đã trò chuyện suốt 4 tiếng đồng hồ từ đêm tới sáng, để rồi buổi gặp trực tiếp sau đó đầy ngại ngùng. Từ ngày đặc biệt ấy đến nay đã tròn 6 năm — một hành trình dài với bao vui buồn, thăng trầm, cho tới ngày chúng mình chính thức về chung một nhà.</p></div>
        </article>
      </div>
    </section>

    <section class="family-section section-pad reveal" id="family">
      <div class="section-label section-label-center"><span>GIA ĐÌNH</span> LỜI CHÚC PHÚC</div>
      <div class="family-floral family-floral-left" aria-hidden="true">❧</div>
      <div class="family-floral family-floral-right" aria-hidden="true">❧</div>
      <p class="script-note">Hai gia đình, một tình yêu</p>
      <h2>Thông Tin Lễ Cưới</h2>
      <div class="family-rule"><span>✳</span></div>
      <div class="family-grid">
        <article class="family-card">
          <p class="family-side">NHÀ TRAI</p>
          <p class="family-title">Ông Bà</p>
          <h3>Nguyễn Văn Giang<br /><span>&</span><br />Nguyễn Thị Hựu</h3>
          <span class="family-address">Thiểm Xuyên, Tam Đa, Bắc Ninh</span>
        </article>
        <article class="family-card">
          <p class="family-side">NHÀ GÁI</p>
          <p class="family-title">Ông Bà</p>
          <h3>Phùng Văn Dân<br /><span>&</span><br />Nguyễn Thị Tuyên</h3>
          <span class="family-address">Vọng Đông, Yên Trung, Bắc Ninh</span>
        </article>
      </div>
      <p class="family-address-note">Thân mời quý khách đến chung vui cùng hai gia đình.</p>
    </section>

    <section class="celebration section-pad reveal" id="celebration">
      <div class="section-label"><span>02</span> NGÀY CHUNG ĐÔI</div>
      <div class="wedding-calendar-layout">
        <article class="wedding-countdown-card" aria-labelledby="weddingCountdownTitle">
          <span class="countdown-ornament countdown-ornament-one" aria-hidden="true">✿</span>
          <span class="countdown-ornament countdown-ornament-two" aria-hidden="true">✿</span>
          <p class="countdown-overline">ĐẾM NGÀY ĐẾN LỄ CƯỚI</p>
          <p class="script-note countdown-script">Hạnh phúc bắt đầu hôm nay</p>
          <h2 id="weddingCountdownTitle">${bride}<span><i>♥</i></span>${groom}</h2>
          <p class="countdown-date-line">${weddingWeekday.toLocaleUpperCase('vi-VN')} <i>·</i> ${weddingDateLabel} <i>·</i> 10:00</p>
          <p class="countdown-day-number" id="countdownDayNumber">CÒN <span>000</span> NGÀY</p>
          <div class="countdown wedding-countdown" id="countdown" aria-live="off">
            <div><strong data-unit="days">00</strong><span>NGÀY</span></div><i>:</i>
            <div><strong data-unit="hours">00</strong><span>GIỜ</span></div><i>:</i>
            <div><strong data-unit="minutes">00</strong><span>PHÚT</span></div><i>:</i>
            <div><strong data-unit="seconds">00</strong><span>GIÂY</span></div>
          </div>
          <p class="countdown-message" id="countdownMessage" hidden>Hôm nay là ngày cưới của chúng mình <span>♥</span></p>
          <p class="countdown-footnote" id="countdownFootnote">Còn <strong>—</strong> ngày nữa đến ngày cưới</p>
        </article>

        <article class="calendar-card" aria-labelledby="calendarTitle">
          <div class="calendar-heading">
            <div><p class="calendar-kicker">HẸN NGÀY VUI</p><h3 id="calendarTitle">2026 <span>.</span> 11</h3><p>THÁNG MƯỜI MỘT</p></div>
            <span class="calendar-heart" aria-hidden="true">♥</span>
          </div>
          <div class="wedding-calendar" role="grid" aria-label="Lịch tháng 11 năm 2026">
            ${calendarWeekdays.map((weekday, index) => `<span class="calendar-weekday${index === 0 ? ' is-sunday' : ''}${index === 6 ? ' is-saturday' : ''}" role="columnheader">${weekday}</span>`).join('')}
            ${weddingCalendarCells}
          </div>
          <div class="wedding-events" aria-label="Lịch trình ngày cưới">
            <p class="events-heading">NGÀY HẠNH PHÚC</p>
            <div class="wedding-event"><span class="event-dot" aria-hidden="true"></span><p><strong>${weddingShortDate}</strong><span>${weddingWeekday} · Lễ thành hôn</span></p><time datetime="${weddingDate.toISOString().slice(0, 10)}">${weddingDateLabel}</time></div>
            <div class="wedding-event"><span class="event-dot" aria-hidden="true"></span><p><strong>${weddingShortDate}</strong><span>${weddingWeekday} · Tiệc cưới</span></p><time datetime="${weddingDate.toISOString()}">10:00</time></div>
          </div>
          <a class="calendar-map-link" href="#venues">XEM ĐỊA ĐIỂM <span>↓</span></a>
        </article>
      </div>
    </section>

    <section class="gallery-section section-pad reveal" id="gallery">
      <div class="section-label"><span>03</span> KHOẢNH KHẮC NGỌT NGÀO</div>
      <div class="section-heading"><div><p class="script-note">Kỷ niệm dịu dàng</p><h2>Những Ngày <em>Mình Thương</em></h2></div><p>Gom góp dịu dàng<br />thành một đời bên nhau.</p></div>
      <div class="gallery-grid" id="galleryGrid">
        <div class="gallery-column gallery-column-left">${photos.slice(0, 5).map((photo, index) => renderGalleryPhoto(photo, index)).join('')}</div>
        <div class="gallery-column gallery-column-right">${photos.slice(5).map((photo, index) => renderGalleryPhoto(photo, index + 5)).join('')}</div>
      </div>
      <p class="gallery-hint">CHẠM VÀO ẢNH ĐỂ XEM KÍCH THƯỚC LỚN <span>↗</span></p>
    </section>

    <section class="venues-section section-pad reveal" id="venues">
      <div class="section-label"><span>04</span> ĐỊA ĐIỂM & CHỈ ĐƯỜNG</div>
      <div class="section-heading venue-title"><div><p class="script-note">Chúng mình dành chỗ cho bạn</p><h2>Đường Đến <em>Ngày Vui</em></h2></div><p>Thân mời bạn ghé thăm<br />hai gia đình chúng mình.</p></div>
      <div class="venue-grid">
        <article class="venue-card bride-venue">
          <div class="map-art" aria-hidden="true"><span class="map-road road-a"></span><span class="map-road road-b"></span><span class="map-road road-c"></span><span class="map-river"></span><span class="map-pin">✿</span><span class="map-label">VỌNG ĐÔNG</span></div>
          <div class="venue-info"><p class="venue-overline">🌸 &nbsp; NHÀ GÁI</p><h3>Phùng Thị Mỹ Tâm</h3><p class="venue-address">Thôn Vọng Đông, Yên Trung,<br />Bắc Ninh</p><a class="map-button" href="${mapBride}" target="_blank" rel="noopener noreferrer">📍 &nbsp; XEM CHỈ ĐƯỜNG <span>↗</span></a></div>
        </article>
        <article class="venue-card groom-venue">
          <div class="map-art" aria-hidden="true"><span class="map-road road-a"></span><span class="map-road road-b"></span><span class="map-road road-c"></span><span class="map-river"></span><span class="map-pin">✿</span><span class="map-label">THIỂM XUYÊN</span></div>
          <div class="venue-info"><p class="venue-overline">🌿 &nbsp; NHÀ TRAI</p><h3>Nguyễn Văn Công</h3><p class="venue-address">Thôn Thiểm Xuyên, xã Tam Đa,<br />Bắc Ninh</p><a class="map-button" href="${mapGroom}" target="_blank" rel="noopener noreferrer">📍 &nbsp; XEM CHỈ ĐƯỜNG <span>↗</span></a></div>
        </article>
      </div>
      <p class="venue-disclaimer">Vị trí chính xác được mở bằng Google Maps qua nút chỉ đường.</p>
    </section>

    <section class="rsvp-section section-pad reveal" id="rsvp">
      <div class="rsvp-card">
        <div class="section-label"><span>05</span> XÁC NHẬN THAM DỰ</div>
        <p class="script-note">Có bạn, ngày vui thêm trọn vẹn</p>
        <h2>Bạn Sẽ Đến Chung Vui Chứ?</h2>
        <p class="rsvp-intro">Cho chúng mình biết nhé — chúng mình mong được đón bạn.</p>
        <form id="rsvpForm">
          <fieldset class="attendance-options"><legend class="sr-only">Bạn có thể tham dự không?</legend>
            <label class="attendance-option"><input type="radio" name="attendance" value="yes" required /><span>💚 &nbsp; Tôi chắc chắn sẽ tham dự</span></label>
            <label class="attendance-option"><input type="radio" name="attendance" value="no" /><span>🌿 &nbsp; Tôi rất tiếc không thể tham dự</span></label>
          </fieldset>
          <div class="form-row"><label>Họ và tên<input name="guestName" autocomplete="name" maxlength="80" placeholder="Tên của bạn" required /></label><label>Số người tham dự<select name="guestCount"><option value="1">01 người</option><option value="2">02 người</option><option value="3">03 người</option><option value="4">04 người</option><option value="5">05 người</option></select></label></div>
          <label class="message-label">Lời chúc dành cho cô dâu chú rể<textarea name="wish" rows="3" maxlength="500" placeholder="Gửi đôi lời thương mến..."></textarea></label>
          <button class="submit-button" type="submit">XÁC NHẬN THAM DỰ <span>↗</span></button>
          <p class="form-note">Lời chúc sẽ xuất hiện ở đây sau khi kết nối Google Sheets. Vui lòng không ghi thông tin riêng tư.</p>
          <p class="form-feedback" id="formFeedback" role="status" hidden></p>
        </form>
        <section class="wishes-wall" aria-labelledby="wishesWallTitle">
          <p class="wishes-wall-label" id="wishesWallTitle">LỜI CHÚC TỪ KHÁCH MỜI</p>
            <div class="wishes-viewport" id="wishesViewport" role="region" aria-label="Danh sách lời chúc của khách mời" tabindex="0">
              <div class="wishes-track" id="wishesTrack" aria-live="off">
                <div class="wishes-group" id="wishesGroup" role="list"></div>
              </div>
            </div>
            <p class="wishes-wall-count" id="wishesWallCount" aria-live="polite"></p>
          </section>
      </div>
    </section>

    <section class="gift-section section-pad reveal" id="wishes">
      <div class="section-label"><span>06</span> GỬI LỜI CHÚC MỪNG</div>
      <p class="script-note">Gửi lời chúc thân thương</p>
      <h2>Gửi Lời Chúc Đến<br /><em>Cô Dâu & Chú Rể</em></h2>
      <p class="gift-copy">Một lời chúc của bạn sẽ là món quà thật đẹp trong ngày vui.<br />Quét mã QR tương ứng để gửi lời chúc mừng.</p>
      <div class="qr-grid">
        <article class="qr-card"><p class="qr-owner">CÔ DÂU</p><button class="qr-image-frame bride-qr-frame" type="button" data-qr-src="${imageRoot}/tam_qr.jpg" data-qr-alt="Mã QR của cô dâu Phùng Thị Mỹ Tâm" aria-label="Phóng to mã QR của cô dâu"><img src="${imageRoot}/tam_qr.jpg" alt="Mã QR của cô dâu Phùng Thị Mỹ Tâm" loading="lazy" /></button><strong>${bride}</strong><span>Chạm vào mã QR để phóng to</span></article>
        <article class="qr-card"><p class="qr-owner">CHÚ RỂ</p><button class="qr-image-frame groom-qr-frame" type="button" data-qr-src="${imageRoot}/cong_qr.jpg" data-qr-alt="Mã QR của chú rể Nguyễn Văn Công" aria-label="Phóng to mã QR của chú rể"><img src="${imageRoot}/cong_qr.jpg" alt="Mã QR của chú rể Nguyễn Văn Công" loading="lazy" /></button><strong>${groom}</strong><span>Chạm vào mã QR để phóng to</span></article>
      </div>
    </section>

    <footer class="closing reveal">
      <div class="closing-garden" role="img" aria-label="Khu vườn dịu dàng trong ánh chiều"></div>
      <div class="garden-particles closing-particles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="closing-content"><p class="script-note">Bên nhau trọn đời</p><h2>${bride}<span>&</span>${groom}</h2><p class="closing-date">08.11.2026</p><p class="closing-thanks">“Cảm ơn bạn đã trở thành một phần<br />trong ngày đặc biệt của chúng mình.”</p><p class="closing-thanks closing-thanks-en">Sự hiện diện của bạn làm ngày vui thêm ý nghĩa.</p><span class="closing-flower" aria-hidden="true">❧</span></div>
      <p class="copyright">THIỆP CƯỚI CÔNG & TÂM · 2026</p>
    </footer>
  </main>
  <button class="music-toggle" id="musicToggle" type="button" aria-label="Bật nhạc nền" aria-pressed="false" title="Bật nhạc nền"><span aria-hidden="true">♫</span><small id="musicNotice" role="status" hidden>Chưa tìm thấy tệp nhạc nền. Hãy kiểm tra thư mục âm thanh.</small></button>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh cưới lớn"><button class="lightbox-close" type="button" aria-label="Đóng ảnh">×</button><button class="lightbox-prev" type="button" aria-label="Ảnh trước">‹</button><img class="lightbox-image" id="lightboxImage" alt="" /><button class="lightbox-next" type="button" aria-label="Ảnh tiếp theo">›</button><p class="lightbox-caption" id="lightboxCaption"></p></dialog>
`
document.body.classList.add('invite-intro')

document.querySelectorAll('.hero-photo, .closing-garden').forEach((background) => {
  const isClosing = background.classList.contains('closing-garden')
  const overlay = isClosing
    ? 'linear-gradient(180deg, rgba(30, 43, 34, .25), rgba(25, 39, 31, .58)), '
    : ''
  background.style.backgroundImage = `${overlay}url("${backgroundImageRoot}HTS_8643.jpg")`
})
const heroPhoto = document.querySelector('.hero-photo')
function positionHeroPhoto() {
  heroPhoto.style.backgroundPosition = window.matchMedia('(max-width: 760px)').matches
    ? '53% calc(38% + var(--parallax-offset, 0px))'
    : '50% calc(14% + var(--parallax-offset, 0px))'
}
positionHeroPhoto()
window.addEventListener('resize', positionHeroPhoto, { passive: true })

document.querySelectorAll('.portrait-image, .couple-photo, .gallery-photo img').forEach((image) => {
  image.addEventListener('error', () => {
    image.parentElement.classList.add('photo-placeholder')
    image.remove()
  }, { once: true })
})

const cover = document.querySelector('#inviteCover')
const invitation = document.querySelector('#invitation')
const heroPhotoImages = [
  ...document.querySelectorAll('.hero-card-photo img'),
]
function startHeroPhotoRotation() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let activePhoto = 0
  window.setInterval(() => {
    const nextPhoto = (activePhoto + 1) % heroPhotoImages.length
    if (document.hidden || !heroPhotoImages[nextPhoto].complete || !heroPhotoImages[nextPhoto].naturalWidth) return
    heroPhotoImages[activePhoto].classList.remove('is-active')
    heroPhotoImages[nextPhoto].classList.add('is-active')
    activePhoto = nextPhoto
  }, 5000)
}
const flowerRain = document.createElement('div')
flowerRain.className = 'flower-rain'
flowerRain.setAttribute('aria-hidden', 'true')
for (let index = 0; index < 16; index += 1) {
  const petal = document.createElement('span')
  const petalSize = 7 + (index * 3) % 6
  petal.setAttribute('aria-hidden', 'true')
  petal.style.setProperty('--petal-x', `${(index * 61 + 11) % 100}%`)
  petal.style.setProperty('--petal-size', `${petalSize}px`)
  petal.style.setProperty('--petal-height', `${Math.round(petalSize * 1.55)}px`)
  petal.style.setProperty('--petal-duration', `${16 + (index * 5) % 11}s`)
  petal.style.setProperty('--petal-delay', `${0.8 + (index % 8) * 0.5}s`)
  petal.style.setProperty('--petal-drift', `${((index * 19) % 65) - 32}px`)
  petal.style.setProperty('--petal-turn', `${(index % 2 ? 1 : -1) * (130 + (index * 31) % 200)}deg`)
  petal.style.setProperty('--petal-opacity', `${0.3 + (index % 4) * 0.08}`)
  flowerRain.append(petal)
}
app.append(flowerRain)
const musicToggle = document.querySelector('#musicToggle')
const musicNotice = document.querySelector('#musicNotice')
const musicCandidates = [
  `${audioRoot}/garden-music.mp3`,
]
const backgroundMusic = new Audio()
backgroundMusic.loop = true
backgroundMusic.volume = 0.22
backgroundMusic.preload = 'auto'
let musicEnabled = false
let musicSourceIndex = 0

function loadBackgroundMusic() {
  const currentSrc = musicCandidates[musicSourceIndex]
  if (!currentSrc) return

  backgroundMusic.src = currentSrc
  backgroundMusic.load()
  backgroundMusic.onerror = () => {
    musicSourceIndex += 1
    if (musicSourceIndex < musicCandidates.length) {
      loadBackgroundMusic()
      return
    }

    musicToggle.title = 'Không tìm thấy tệp nhạc nền hoặc tệp chưa đúng vị trí'
    musicToggle.classList.add('music-missing')
    musicNotice.hidden = false
    musicNotice.textContent = 'Chưa tìm thấy tệp nhạc nền. Hãy kiểm tra thư mục âm thanh.'
  }
}

loadBackgroundMusic()

async function setMusicEnabled(enabled) {
  if (enabled) {
    try {
      await backgroundMusic.play()
      musicEnabled = true
      musicToggle.classList.add('is-playing')
      musicToggle.setAttribute('aria-pressed', 'true')
      musicToggle.setAttribute('aria-label', 'Tắt nhạc nền')
      musicToggle.title = 'Tắt nhạc nền'
      musicToggle.classList.remove('music-missing')
      musicNotice.hidden = true
    } catch {
      musicEnabled = false
      musicToggle.classList.remove('is-playing')
      musicToggle.setAttribute('aria-pressed', 'false')
      musicToggle.title = 'Không thể phát nhạc nền'
      musicToggle.classList.add('music-missing')
      musicNotice.hidden = false
      window.setTimeout(() => musicToggle.classList.remove('music-missing'), 4500)
    }
    return
  }
  backgroundMusic.pause()
  musicEnabled = false
  musicToggle.classList.remove('is-playing')
  musicToggle.setAttribute('aria-pressed', 'false')
  musicToggle.setAttribute('aria-label', 'Bật nhạc nền')
  musicToggle.title = 'Bật nhạc nền'
}
musicToggle.addEventListener('click', () => setMusicEnabled(!musicEnabled))
cover.addEventListener('click', () => {
  if (!musicEnabled) setMusicEnabled(true)
}, { once: true })
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (reducedMotion) {
  window.scrollTo({ top: 0, behavior: 'instant' })
  cover.hidden = true
  invitation.setAttribute('aria-hidden', 'false')
  document.body.classList.remove('invite-intro')
  document.body.classList.add('invite-open')
  musicToggle.classList.add('is-available')
} else {
  window.setTimeout(() => cover.classList.add('is-opening'), 1850)
  window.setTimeout(() => {
    invitation.setAttribute('aria-hidden', 'false')
    invitation.classList.add('is-entering')
    cover.classList.add('is-leaving')
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.body.classList.remove('invite-intro')
    document.body.classList.add('invite-open')
    musicToggle.classList.add('is-available')
    startHeroPhotoRotation()
  }, 4050)
  window.setTimeout(() => {
    cover.hidden = true
    invitation.classList.remove('is-entering')
  }, 5250)
}

const countdown = document.querySelector('#countdown')
const countdownMessage = document.querySelector('#countdownMessage')
const countdownDayNumber = document.querySelector('#countdownDayNumber span')
const countdownFootnote = document.querySelector('#countdownFootnote')
const pad = (value) => String(value).padStart(2, '0')
function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now()
  const days = Math.max(0, Math.floor(remaining / 86400000))
  countdownDayNumber.textContent = pad(days)
  countdownFootnote.innerHTML = `Còn <strong>${days}</strong> ngày nữa đến ngày cưới`
  if (remaining <= 0) {
    countdown.hidden = true
    countdownMessage.hidden = false
    countdownFootnote.hidden = true
    return
  }
  countdownFootnote.hidden = false
  const hours = Math.floor((remaining % 86400000) / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)
  const values = { days, hours, minutes, seconds }
  Object.entries(values).forEach(([unit, value]) => {
    const digit = countdown.querySelector(`[data-unit="${unit}"]`)
    const nextValue = pad(value)
    if (digit.textContent === nextValue) return
    digit.textContent = nextValue
    digit.classList.remove('is-changing')
    void digit.offsetWidth
    digit.classList.add('is-changing')
  })
}
updateCountdown()
window.setInterval(updateCountdown, 1000)

document.querySelectorAll('.gallery-photo').forEach((photo, index) => {
  photo.style.setProperty('--gallery-entry-delay', `${index * 75}ms`)
})
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  }
}), { threshold: 0.12 })
document.querySelectorAll('.reveal, .story-item').forEach((element) => observer.observe(element))
const galleryObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('gallery-entered')
    galleryObserver.unobserve(entry.target)
  }
}), { threshold: 0.25 })
galleryObserver.observe(document.querySelector('#gallery'))

const parallaxTargets = [
  { element: heroPhoto, strength: 0.035 },
  { element: document.querySelector('.closing-garden'), strength: 0.025 },
  { element: document.querySelector('.date-particles'), strength: 0.045 },
]
let parallaxFrame = 0
function updateParallax() {
  parallaxFrame = 0
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  parallaxTargets.forEach(({ element, strength }) => {
    if (!element) return
    const rect = element.getBoundingClientRect()
    if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return
    const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -strength
    element.style.setProperty('--parallax-offset', `${offset.toFixed(1)}px`)
  })
}
window.addEventListener('scroll', () => {
  if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax)
}, { passive: true })
window.addEventListener('resize', updateParallax, { passive: true })
updateParallax()

const lightbox = document.querySelector('#lightbox')
const lightboxImage = document.querySelector('#lightboxImage')
const lightboxCaption = document.querySelector('#lightboxCaption')
let activePhoto = 0
function showPhoto(index) {
  activePhoto = (index + photos.length) % photos.length
  lightboxImage.src = photos[activePhoto].src
  lightboxImage.alt = photos[activePhoto].alt
  lightboxCaption.textContent = `${String(activePhoto + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`
  lightbox.classList.remove('lightbox-single', 'lightbox-qr')
}
document.querySelectorAll('.gallery-photo').forEach((button) => button.addEventListener('click', () => {
  const image = button.querySelector('img')
  if (!image || !image.naturalWidth) return
  showPhoto(Number(button.dataset.photoIndex))
  lightbox.showModal()
}))
function showStandalonePhoto(image) {
  if (!image.naturalWidth) return
  lightboxImage.src = image.currentSrc || image.src
  lightboxImage.alt = image.alt
  lightboxCaption.textContent = image.alt
  lightbox.classList.add('lightbox-single')
  lightbox.showModal()
}
app.querySelectorAll('img').forEach((image) => {
  if (image.closest('button, a, .lightbox')) return
  if (image.getAttribute('aria-hidden') !== 'true') {
    image.tabIndex = 0
    image.setAttribute('role', 'button')
    image.setAttribute('aria-label', `Phóng to ảnh: ${image.alt}`)
    image.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      showStandalonePhoto(image)
    })
  }
  image.addEventListener('click', () => showStandalonePhoto(image))
})
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close())
document.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(activePhoto - 1))
document.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(activePhoto + 1))
document.querySelectorAll('.qr-image-frame').forEach((button) => button.addEventListener('click', () => {
  const image = button.querySelector('img')
  if (!image || !image.naturalWidth) return
  lightboxImage.src = button.dataset.qrSrc
  lightboxImage.alt = button.dataset.qrAlt
  lightboxCaption.textContent = button.dataset.qrAlt
  lightbox.classList.add('lightbox-qr')
  lightbox.showModal()
}))
lightbox.addEventListener('close', () => lightbox.classList.remove('lightbox-qr', 'lightbox-single'))
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close() })
document.addEventListener('keydown', (event) => {
  if (!lightbox.open || lightbox.classList.contains('lightbox-qr') || lightbox.classList.contains('lightbox-single')) return
  if (event.key === 'ArrowLeft') showPhoto(activePhoto - 1)
  if (event.key === 'ArrowRight') showPhoto(activePhoto + 1)
})
let touchStartX = 0
lightbox.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX }, { passive: true })
lightbox.addEventListener('touchend', (event) => {
  if (lightbox.classList.contains('lightbox-qr') || lightbox.classList.contains('lightbox-single')) return
  const delta = event.changedTouches[0].screenX - touchStartX
  if (Math.abs(delta) > 45) showPhoto(activePhoto + (delta < 0 ? 1 : -1))
}, { passive: true })

const rsvpForm = document.querySelector('#rsvpForm')
const formFeedback = document.querySelector('#formFeedback')
const wishesViewport = document.querySelector('#wishesViewport')
const wishesTrack = document.querySelector('#wishesTrack')
const wishesGroup = document.querySelector('#wishesGroup')
const wishesWallCount = document.querySelector('#wishesWallCount')
const submitButton = rsvpForm.querySelector('button[type="submit"]')
let sharedWishes = []
let wishesLoadPromise = null

function createWishCard(wish) {
  const card = document.createElement('article')
  card.className = 'wish-card'
  card.setAttribute('role', 'listitem')

  const name = document.createElement('p')
  name.className = 'wish-card-name'
  name.textContent = wish.name

  const message = document.createElement('p')
  message.className = 'wish-card-message'
  message.textContent = wish.wish

  card.append(name, message)
  return card
}

function renderWishes() {
  const previousAnimation = wishesTrack.getAnimations().find((animation) => animation.animationName === 'wishes-scroll')
  const previousDuration = Number.parseFloat(getComputedStyle(wishesTrack).animationDuration) * 1000
  const previousProgress = previousAnimation && previousDuration > 0
    ? (Number(previousAnimation.currentTime) % previousDuration) / previousDuration
    : 0

  wishesTrack.classList.remove('is-looping')
  wishesTrack.style.removeProperty('--wishes-loop-distance')
  wishesTrack.style.removeProperty('--wishes-loop-duration')
  wishesTrack.replaceChildren()
  wishesGroup.replaceChildren()
  wishesGroup.removeAttribute('aria-hidden')
  wishesViewport.classList.remove('is-looping')

  if (!sharedWishes.length) {
    const emptyMessage = document.createElement('p')
    emptyMessage.className = 'wish-empty'
    emptyMessage.textContent = wishesEndpoint
      ? 'Hãy là người đầu tiên gửi lời chúc đến chúng mình nhé!'
      : 'Lời chúc sẽ xuất hiện ở đây sau khi kết nối Google Sheets.'
    wishesGroup.append(emptyMessage)
    wishesTrack.append(wishesGroup)
    wishesWallCount.textContent = ''
    return
  }

  sharedWishes.forEach((wish) => wishesGroup.append(createWishCard(wish)))
  wishesTrack.append(wishesGroup)
  wishesWallCount.textContent = `${sharedWishes.length} ${sharedWishes.length === 1 ? 'lời chúc' : 'lời chúc'} từ khách mời`

  if (sharedWishes.length < 3 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const duplicateGroup = wishesGroup.cloneNode(true)
  duplicateGroup.removeAttribute('id')
  duplicateGroup.setAttribute('aria-hidden', 'true')
  duplicateGroup.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'))
  wishesTrack.append(duplicateGroup)

  requestAnimationFrame(() => {
    const loopDistance = wishesGroup.getBoundingClientRect().height
    if (!loopDistance) return

    wishesTrack.style.setProperty('--wishes-loop-distance', `${loopDistance}px`)
    wishesTrack.style.setProperty('--wishes-loop-duration', `${Math.max(48, loopDistance / 22)}s`)
    wishesViewport.classList.add('is-looping')
    wishesTrack.classList.add('is-looping')
    if (previousProgress) {
      requestAnimationFrame(() => {
        const animation = wishesTrack.getAnimations().find((entry) => entry.animationName === 'wishes-scroll')
        const duration = Number.parseFloat(getComputedStyle(wishesTrack).animationDuration) * 1000
        if (animation && duration > 0) animation.currentTime = previousProgress * duration
      })
    }
  })
}

function loadSharedWishes() {
  if (!wishesEndpoint) return Promise.resolve(null)

  return new Promise((resolve, reject) => {
    const callbackName = `wishesCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`
    const script = document.createElement('script')
    const timeout = window.setTimeout(() => {
      cleanup()
      reject(new Error('Timed out while loading shared wishes'))
    }, 12000)
    const cleanup = () => {
      window.clearTimeout(timeout)
      delete window[callbackName]
      script.remove()
    }
    window[callbackName] = (response) => {
      cleanup()
      if (!response?.ok || !Array.isArray(response.wishes)) {
        reject(new Error(response?.error || 'The wishes service returned an invalid response'))
        return
      }
      resolve(response.wishes)
    }
    script.onerror = () => {
      cleanup()
      reject(new Error('Unable to load shared wishes'))
    }
    const separator = wishesEndpoint.includes('?') ? '&' : '?'
    script.src = `${wishesEndpoint}${separator}action=list&callback=${callbackName}&_=${Date.now()}`
    document.head.append(script)
  })
}

function refreshSharedWishes() {
  if (!wishesEndpoint) return Promise.resolve(null)
  if (wishesLoadPromise) return wishesLoadPromise

  wishesLoadPromise = loadSharedWishes()
    .then((loadedWishes) => {
      sharedWishes = loadedWishes.filter((wish) => typeof wish?.name === 'string' && typeof wish?.wish === 'string' && wish.wish.trim())
      renderWishes()
      return sharedWishes
    })
    .finally(() => { wishesLoadPromise = null })
  return wishesLoadPromise
}

renderWishes()
if (wishesEndpoint) {
  refreshSharedWishes().catch((error) => {
    console.error('Unable to load shared wedding wishes:', error)
    const errorMessage = document.createElement('p')
    errorMessage.className = 'wish-empty'
    errorMessage.textContent = 'Chưa tải được lời chúc. Hệ thống sẽ thử lại sau.'
    wishesGroup.replaceChildren(errorMessage)
  })
  window.setInterval(() => {
    refreshSharedWishes().catch((error) => console.error('Unable to refresh shared wedding wishes:', error))
  }, 30000)
}

rsvpForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  if (!wishesEndpoint) {
    formFeedback.textContent = 'Chưa kết nối Google Sheets nên phản hồi chưa được gửi. Hãy cấu hình URL Web App trước khi khách xác nhận.'
    formFeedback.hidden = false
    return
  }

  const formData = new FormData(rsvpForm)
  const data = {
    name: String(formData.get('guestName') || '').trim(),
    attendance: String(formData.get('attendance') || ''),
    guestCount: Number(formData.get('guestCount') || 1),
    wish: String(formData.get('wish') || '').trim(),
  }
  if (!data.name || data.name.length > 80 || data.wish.length > 500 || !['yes', 'no'].includes(data.attendance) || data.guestCount < 1 || data.guestCount > 5) {
    formFeedback.textContent = 'Vui lòng kiểm tra tên, lựa chọn tham dự và nội dung lời chúc (tối đa 500 ký tự).'
    formFeedback.hidden = false
    return
  }

  submitButton.disabled = true
  formFeedback.textContent = 'Đang gửi phản hồi và lời chúc...'
  formFeedback.hidden = false
  try {
    await fetch(wishesEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify(data),
    })
    formFeedback.textContent = 'Đã gửi yêu cầu. Đang chờ Google Sheets xác nhận...'
    if (data.wish) {
      let confirmed = false
      for (let attempt = 0; attempt < 3; attempt += 1) {
        await new Promise((resolve) => window.setTimeout(resolve, 1800))
        try {
          const latestWishes = await refreshSharedWishes()
          if (latestWishes?.some((wish) => wish.name === data.name && wish.wish === data.wish)) {
            confirmed = true
            break
          }
        } catch (error) {
          console.error('Unable to confirm wedding wish submission:', error)
        }
      }
      formFeedback.textContent = confirmed
        ? `Cảm ơn ${data.name}! Lời chúc của bạn đã được lưu và sẽ lần lượt hiển thị cho mọi người.`
        : 'Đã gửi yêu cầu nhưng chưa xác nhận được lời chúc. Hãy kiểm tra lại bảng lời chúc sau ít phút trước khi gửi lần nữa.'
    } else {
      formFeedback.textContent = 'Đã gửi yêu cầu xác nhận tham dự. Do giới hạn bảo mật của Google, thiệp không thể đọc lại phản hồi này.'
    }
    if (!formFeedback.textContent.startsWith('Đã gửi yêu cầu nhưng')) rsvpForm.reset()
  } catch (error) {
    console.error('Unable to submit wedding RSVP:', error)
    formFeedback.textContent = 'Không gửi được phản hồi. Vui lòng kiểm tra kết nối mạng rồi thử lại.'
  } finally {
    submitButton.disabled = false
  }
})
