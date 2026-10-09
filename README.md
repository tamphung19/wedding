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

Các URL tài nguyên dùng đường dẫn tương đối để hoạt động khi GitHub Pages xuất bản dự án dưới `/wedding/`. Khi xuất bản trực tiếp từ nhánh `main` và thư mục gốc, ảnh và nhạc nằm trong `public/`; sau khi build, Vite chép chúng vào thư mục gốc của `dist/`.

## Thay ảnh cưới

Ảnh trong album được lấy từ `public/images/optimized/`; ảnh nền thiệp là `public/images/background.jpg`. Đường dẫn ảnh được khai báo ở đầu `src/garden.js`.

## QR và RSVP

Hai mã QR được đặt trong `public/images/tam_qr.jpg` (cô dâu) và `public/images/cong_qr.jpg` (chú rể). RSVP hiện lưu phản hồi trong `localStorage` của thiết bị đang mở thiệp, chưa gửi dữ liệu lên máy chủ. Hãy nối form với dịch vụ RSVP/backend trước khi phát hành chính thức.

## Nhạc nền

Nhạc nền tùy chọn được đọc từ `public/audio/garden-music.mp3`. Nhạc chỉ phát khi khách bấm mở thiệp hoặc chủ động nhấn nút ♫.
