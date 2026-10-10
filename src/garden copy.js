const bride = 'PHÙNG THỊ MỸ TÂM'
const groom = 'NGUYỄN VĂN CÔNG'
const weddingDate = new Date('2026-11-08T10:00:00+07:00')
const mapBride = 'https://maps.app.goo.gl/FeymssNYsQ5pCVof8'
const mapGroom = 'https://maps.app.goo.gl/XUN5aBas6NM2aExq6'
const imageRoot = window.location.protocol === 'file:' ? './public/images' : '/images'
const backgroundImageRoot = window.location.protocol === 'file:' ? './public/images' : '/images'
document.documentElement.style.setProperty('--couple-background', `url("${backgroundImageRoot}/anh2.jpg")`)

const photos = [
  { src: `${imageRoot}/anh1.jpg`, alt: 'Ảnh cưới của Phùng Thị Mỹ Tâm và Nguyễn Văn Công' },
  { src: `${imageRoot}/anh2.jpg`, alt: 'Khoảnh khắc ngày cưới của Tâm và Công' },
  { src: `${imageRoot}/anh3.jpg`, alt: 'Album ảnh cưới của Tâm và Công' },
  { src: `${imageRoot}/anh4.jpg`, alt: 'Một khoảnh khắc dịu dàng của đôi uyên ương' },
]

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="invite-cover" id="inviteCover" aria-label="Mở thiệp cưới">
    <div class="cover-garden" role="img" aria-label="Khu vườn cưới ngập ánh chiều"></div>
    <div class="cover-grain"></div>
    <div class="cover-frame">
      <span class="cover-sprig sprig-left" aria-hidden="true">❧</span><span class="cover-sprig sprig-right" aria-hidden="true">❧</span>
      <p class="cover-kicker">SAVE THE DATE <span>·</span> GARDEN WEDDING</p>
      <p class="cover-names">${bride}<span class="cover-heart">♡</span>${groom}</p>
      <p class="cover-date">08 <i>·</i> 11 <i>·</i> 2026</p>
      <button class="open-invite" id="openInvite" type="button"><span aria-hidden="true">❧</span> MỞ THIỆP <span aria-hidden="true">❧</span></button>
      <p class="cover-bottom">A DAY TO REMEMBER, A LOVE TO KEEP</p>
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
      <div class="hero-photo" role="img" aria-label="Ảnh cưới của Mỹ Tâm và Văn Công"></div>
      <div class="hero-wash"></div><div class="hero-bokeh" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="eyebrow light">WITH JOY IN OUR HEARTS</p>
        <h1><span>${bride}</span><i>&</i><span>${groom}</span></h1>
        <p class="hero-invite">Trân trọng kính mời bạn đến chung vui<br />trong ngày hạnh phúc của chúng mình</p>
        <a class="round-link" href="#couple" aria-label="Khám phá thiệp cưới">↓</a>
      </div>
      <p class="hero-side-note">A GARDEN WEDDING · BẮC NINH</p>
    </section>

    <section class="welcome section-pad reveal" id="couple">
      <div class="section-label"><span>01</span> THE COUPLE</div>
      <div class="welcome-layout">
        <div class="portrait-wrap">
          <span class="portrait-ornament" aria-hidden="true">✳</span>
          <img src="${photos[3].src}" alt="${photos[3].alt}" class="portrait-image" />
          <span class="portrait-caption">CÔNG & TÂM · 2026</span>
        </div>
        <div class="welcome-copy">
          <p class="script-note">with love,</p>
          <h2 class="couple-heading">${bride}<span>&</span>${groom}</h2>
          <span class="gold-rule"></span>
          <p class="welcome-quote">“Sau một hành trình yêu thương, chúng mình quyết định cùng nhau bước sang một chặng đường mới. Sự hiện diện của bạn sẽ là niềm vui và hạnh phúc lớn đối với chúng mình trong ngày đặc biệt này.”</p>
          <p class="welcome-sign">Thân mến,<br /><em>Công & Tâm</em></p>
        </div>
      </div>
    </section>

    <section class="countdown-section section-pad reveal" aria-labelledby="countdownTitle">
      <div class="countdown-inner">
        <p class="eyebrow">THE COUNTDOWN BEGINS</p>
        <h2 id="countdownTitle">ĐẾM NGƯỢC ĐẾN NGÀY HẠNH PHÚC</h2>
        <div class="countdown" id="countdown" aria-live="polite">
          <div><strong data-unit="days">00</strong><span>NGÀY</span></div><i>:</i>
          <div><strong data-unit="hours">00</strong><span>GIỜ</span></div><i>:</i>
          <div><strong data-unit="minutes">00</strong><span>PHÚT</span></div><i>:</i>
          <div><strong data-unit="seconds">00</strong><span>GIÂY</span></div>
        </div>
        <p class="countdown-message" id="countdownMessage" hidden>HÔM NAY LÀ NGÀY HẠNH PHÚC CỦA CHÚNG MÌNH ❤️</p>
        <p class="countdown-footnote">08 THÁNG 11, 2026 <span>·</span> 10:00 (GMT+7)</p>
      </div>
    </section>

    <section class="celebration section-pad reveal" id="celebration">
      <div class="section-label"><span>02</span> OUR WEDDING DAY</div>
      <div class="date-card">
        <span class="date-flower" aria-hidden="true">✳</span>
        <p class="eyebrow">PLEASE JOIN US TO CELEBRATE</p>
        <p class="big-date">08 <i>·</i> 11 <i>·</i> 2026</p>
        <span class="gold-rule"></span>
        <p class="party-time">TIỆC CƯỚI BẮT ĐẦU LÚC <strong>10:00</strong></p>
        <p class="date-note">Chủ Nhật <span>·</span> Ngày 08 tháng 11 năm 2026</p>
        <a class="text-link" href="#venues">Xem địa điểm <span>↓</span></a>
      </div>
    </section>

    <section class="gallery-section section-pad reveal" id="gallery">
      <div class="section-label"><span>03</span> OUR MOMENTS</div>
      <div class="section-heading"><div><p class="script-note">little memories</p><h2>Những ngày <em>mình thương</em></h2></div><p>Gom góp dịu dàng<br />thành một đời bên nhau.</p></div>
      <div class="gallery-grid" id="galleryGrid">${photos.map((photo, index) => `<button class="gallery-photo gallery-photo-${index + 1}" type="button" data-photo-index="${index}" aria-label="Xem ảnh lớn ${index + 1}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" /></button>`).join('')}</div>
      <p class="gallery-hint">CHẠM VÀO ẢNH ĐỂ XEM KÍCH THƯỚC LỚN <span>↗</span></p>
    </section>

    <section class="venues-section section-pad reveal" id="venues">
      <div class="section-label"><span>04</span> FIND THE GARDEN</div>
      <div class="section-heading venue-title"><div><p class="script-note">we saved you a seat</p><h2>Đường đến <em>ngày vui</em></h2></div><p>Thân mời bạn ghé thăm<br />hai gia đình chúng mình.</p></div>
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
        <div class="section-label"><span>05</span> KINDLY REPLY</div>
        <p class="script-note">your presence means the world</p>
        <h2>BẠN SẼ ĐẾN CHỨ?</h2>
        <p class="rsvp-intro">Cho chúng mình biết nhé — chúng mình mong được đón bạn.</p>
        <form id="rsvpForm">
          <fieldset class="attendance-options"><legend class="sr-only">Bạn có thể tham dự không?</legend>
            <label class="attendance-option"><input type="radio" name="attendance" value="yes" required /><span>💚 &nbsp; Tôi chắc chắn sẽ tham dự</span></label>
            <label class="attendance-option"><input type="radio" name="attendance" value="no" /><span>🌿 &nbsp; Tôi rất tiếc không thể tham dự</span></label>
          </fieldset>
          <div class="form-row"><label>Họ và tên<input name="guestName" autocomplete="name" placeholder="Tên của bạn" required /></label><label>Số người tham dự<select name="guestCount"><option value="1">01 người</option><option value="2">02 người</option><option value="3">03 người</option><option value="4">04 người</option><option value="5">05 người</option></select></label></div>
          <label class="message-label">Lời chúc dành cho cô dâu chú rể<textarea name="wish" rows="3" placeholder="Gửi đôi lời thương mến..."></textarea></label>
          <button class="submit-button" type="submit">XÁC NHẬN THAM DỰ <span>↗</span></button>
          <p class="form-note">Phản hồi được lưu trên thiết bị này. Hãy kết nối form với dịch vụ RSVP để nhận câu trả lời của khách mời.</p>
          <p class="form-feedback" id="formFeedback" role="status" hidden></p>
        </form>
      </div>
    </section>

    <section class="gift-section section-pad reveal" id="wishes">
      <div class="section-label"><span>06</span> A NOTE FOR US</div>
      <p class="script-note">your kind wishes</p>
      <h2>GỬI LỜI CHÚC ĐẾN<br /><em>CÔ DÂU & CHÚ RỂ</em></h2>
      <p class="gift-copy">Một lời chúc của bạn sẽ là món quà thật đẹp trong ngày vui.<br />Quét mã QR tương ứng để gửi lời chúc mừng.</p>
      <div class="qr-grid">
        <article class="qr-card"><p class="qr-owner">CÔ DÂU</p><div class="qr-image-frame bride-qr-frame"><img src="${imageRoot}/qr1.jpg" alt="Mã QR của cô dâu Phùng Thị Mỹ Tâm" loading="lazy" /></div><strong>${bride}</strong><span>Quét mã để gửi lời chúc</span></article>
        <article class="qr-card"><p class="qr-owner">CHÚ RỂ</p><div class="qr-image-frame groom-qr-frame"><img src="${imageRoot}/qr2.jpg" alt="Mã QR của chú rể Nguyễn Văn Công" loading="lazy" /></div><strong>${groom}</strong><span>Quét mã để gửi lời chúc</span></article>
      </div>
    </section>

    <footer class="closing">
      <div class="closing-garden" role="img" aria-label="Khu vườn dịu dàng trong ánh chiều"></div><div class="closing-bokeh" aria-hidden="true"></div>
      <div class="closing-content"><p class="script-note">until forever</p><p class="closing-thanks">“Cảm ơn bạn đã trở thành một phần<br />trong ngày đặc biệt của chúng mình.”</p><h2>${bride}<span>&</span>${groom}</h2><p class="closing-date">08.11.2026</p><span class="closing-flower" aria-hidden="true">❧</span></div>
      <p class="copyright">MADE WITH LOVE · 2026</p>
    </footer>
  </main>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh cưới lớn"><button class="lightbox-close" type="button" aria-label="Đóng ảnh">×</button><button class="lightbox-prev" type="button" aria-label="Ảnh trước">‹</button><img class="lightbox-image" id="lightboxImage" alt="" /><button class="lightbox-next" type="button" aria-label="Ảnh tiếp theo">›</button><p class="lightbox-caption" id="lightboxCaption"></p></dialog>
`

document.querySelectorAll('.cover-garden, .hero-photo, .closing-garden').forEach((background) => {
  const isCover = background.classList.contains('cover-garden')
  const isClosing = background.classList.contains('closing-garden')
  const overlay = isCover
    ? 'linear-gradient(180deg, rgba(32, 47, 37, .28), rgba(28, 43, 33, .5)), '
    : isClosing
      ? 'linear-gradient(180deg, rgba(30, 43, 34, .25), rgba(25, 39, 31, .58)), '
      : ''
  background.style.backgroundImage = `${overlay}url("${backgroundImageRoot}/anh2.jpg")`
})

document.querySelectorAll('.portrait-image, .gallery-photo img').forEach((image) => {
  image.addEventListener('error', () => {
    image.parentElement.classList.add('photo-placeholder')
    image.remove()
  }, { once: true })
})

const cover = document.querySelector('#inviteCover')
const invitation = document.querySelector('#invitation')
document.querySelector('#openInvite').addEventListener('click', () => {
  cover.classList.add('is-opening')
  invitation.setAttribute('aria-hidden', 'false')
  document.body.classList.add('invite-open')
  window.setTimeout(() => {
    cover.hidden = true
    document.querySelector('#couple').scrollIntoView({ behavior: 'smooth' })
  }, 900)
})

const countdown = document.querySelector('#countdown')
const countdownMessage = document.querySelector('#countdownMessage')
const pad = (value) => String(value).padStart(2, '0')
function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now()
  if (remaining <= 0) {
    countdown.hidden = true
    countdownMessage.hidden = false
    return
  }
  const days = Math.floor(remaining / 86400000)
  const hours = Math.floor((remaining % 86400000) / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)
  countdown.querySelector('[data-unit="days"]').textContent = pad(days)
  countdown.querySelector('[data-unit="hours"]').textContent = pad(hours)
  countdown.querySelector('[data-unit="minutes"]').textContent = pad(minutes)
  countdown.querySelector('[data-unit="seconds"]').textContent = pad(seconds)
}
updateCountdown()
window.setInterval(updateCountdown, 1000)

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  }
}), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const lightbox = document.querySelector('#lightbox')
const lightboxImage = document.querySelector('#lightboxImage')
const lightboxCaption = document.querySelector('#lightboxCaption')
let activePhoto = 0
function showPhoto(index) {
  activePhoto = (index + photos.length) % photos.length
  lightboxImage.src = photos[activePhoto].src
  lightboxImage.alt = photos[activePhoto].alt
  lightboxCaption.textContent = `${String(activePhoto + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`
}
document.querySelectorAll('.gallery-photo').forEach((button) => button.addEventListener('click', () => {
  const image = button.querySelector('img')
  if (!image || !image.naturalWidth) return
  showPhoto(Number(button.dataset.photoIndex))
  lightbox.showModal()
}))
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close())
document.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(activePhoto - 1))
document.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(activePhoto + 1))
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close() })
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return
  if (event.key === 'ArrowLeft') showPhoto(activePhoto - 1)
  if (event.key === 'ArrowRight') showPhoto(activePhoto + 1)
})
let touchStartX = 0
lightbox.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX }, { passive: true })
lightbox.addEventListener('touchend', (event) => {
  const delta = event.changedTouches[0].screenX - touchStartX
  if (Math.abs(delta) > 45) showPhoto(activePhoto + (delta < 0 ? 1 : -1))
}, { passive: true })

const rsvpForm = document.querySelector('#rsvpForm')
const formFeedback = document.querySelector('#formFeedback')
rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = Object.fromEntries(new FormData(rsvpForm).entries())
  try {
    const saved = JSON.parse(localStorage.getItem('wedding-rsvp-responses') || '[]')
    saved.push({ ...data, submittedAt: new Date().toISOString() })
    localStorage.setItem('wedding-rsvp-responses', JSON.stringify(saved))
    formFeedback.textContent = `Cảm ơn ${data.guestName} đã gửi phản hồi. Thông tin đang được lưu trên thiết bị này.`
  } catch {
    formFeedback.textContent = 'Cảm ơn bạn đã phản hồi. Hãy kết nối form với dịch vụ RSVP để gửi thông tin.'
  }
  formFeedback.hidden = false
  rsvpForm.reset()
})
