# Garden Wedding · Mỹ Tâm & Văn Công

## Chạy dự án

```bash
npm install
npm run dev
```

Mở URL Vite hiển thị trong terminal để xem thiệp. Không mở `index.html` trực tiếp bằng `file://`, vì trình duyệt cần máy chủ web để tải module và ảnh.

Tạo bản production bằng:

```bash
npm run build
```

## Thay ảnh cưới

Ảnh trong album được lấy từ `public/images/optimized/`; ảnh nền thiệp là `public/images/background.jpg`. Đường dẫn ảnh được khai báo ở đầu `src/garden.js`.

## QR và RSVP

Hai mã QR được đặt trong `public/images/tam_qr.jpg` (cô dâu) và `public/images/cong_qr.jpg` (chú rể). RSVP hiện lưu phản hồi trong `localStorage` của thiết bị đang mở thiệp, chưa gửi dữ liệu lên máy chủ. Hãy nối form với dịch vụ RSVP/backend trước khi phát hành chính thức.

## Nhạc nền

Nhạc nền tùy chọn được đọc từ `public/audio/garden-music.mp3`. Nhạc chỉ phát khi khách bấm mở thiệp hoặc chủ động nhấn nút ♫.
