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

Hai mã QR được đặt trong `public/images/tam_qr.jpg` (cô dâu) và `public/images/qrcong.jpg` (chú rể). RSVP và lời chúc dùng Google Sheets sau khi cấu hình Web App theo hướng dẫn dưới đây.

### Kết nối Google Sheets để chia sẻ lời chúc

1. Tạo Google Sheet mới, chọn **Extensions → Apps Script**, rồi dán nội dung [`scripts/wishes-apps-script.js`](./scripts/wishes-apps-script.js) vào trình soạn thảo và lưu.
2. Chọn **Deploy → New deployment → Web app**, đặt **Execute as: Me** và **Who has access: Anyone**, sau đó cấp quyền và triển khai. Sao chép URL Web App kết thúc bằng `/exec`.
3. Dán URL Web App vào biến `wishesEndpoint` ở đầu `src/garden.js` và chạy `npm run build`.

Khách gửi RSVP và lời chúc sẽ được lưu trong trang tính `Lời chúc`; tối đa 50 lời chúc gần nhất sẽ lần lượt hiển thị trong mục xác nhận tham dự và tự làm mới mỗi 30 giây. Vì Web App cho phép khách ẩn danh đọc/ghi, chỉ thu thập nội dung phù hợp để công khai và không dùng bảng này cho thông tin riêng tư. Khi thay đổi mã Apps Script, hãy cập nhật deployment hiện tại sang phiên bản mới.

## Nhạc nền

Nhạc nền tùy chọn được đọc từ `public/audio/garden-music.mp3`. Nhạc chỉ phát khi khách bấm mở thiệp hoặc chủ động nhấn nút ♫.
