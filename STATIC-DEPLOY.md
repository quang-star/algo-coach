# OLP 2026 V6.3 — Static/PWA & GitHub Pages Deployment

## 1. Triển khai tự động lên GitHub Pages (Miễn phí & Public)

Dự án đã được cấu hình GitHub Actions (`.github/workflows/deploy.yml`) để tự động deploy lên GitHub Pages mỗi khi bạn push lên nhánh `main`.

### Bật GitHub Pages trên Repository:
1. Vào repository trên GitHub: `https://github.com/quang-star/algo-coach`
2. Chọn tab **Settings** → chọn mục **Pages** (ở cột menu bên trái).
3. Trong phần **Build and deployment** → **Source**, chọn:
   - **GitHub Actions** (Workflow `Deploy to GitHub Pages` sẽ tự động kích hoạt).
4. Sau khi workflow chạy xong (chỉ mất ~30 giây), trang web sẽ online tại:
   `https://quang-star.github.io/algo-coach/`

---

## 2. Tính năng PWA & Offline-First

- **PWA**: Hỗ trợ `manifest.webmanifest` + `service-worker.js`, có thể chọn "Add to Home Screen" trên iPhone/Android để cài đặt như một ứng dụng native.
- **Offline-first**: Mọi dữ liệu (buổi học, bài giải, error notebook, virtual contest) đều lưu an toàn trên `localStorage` trước, mất mạng vẫn dùng bình thường.
- **Supabase Cloud Sync (Tùy chọn)**: Nhập Project URL và Anon Key trong nút ⚙ để đồng bộ đa thiết bị và kích hoạt AI Coach.
- **Virtual Mock Contest Arena**: Bấm giờ thi đấu, đếm ngược thời gian, ghi nhận thời gian từng bài và tự động lưu kết quả mock.
- **Bóc tách đề MarisaOJ**: Dán raw text hoặc kéo nút Bookmarklet 1-chạm từ trang bài tập sang.
