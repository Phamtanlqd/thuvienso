# Triển khai
1. **GitHub:** đưa toàn bộ thư mục này lên repo (nhánh `main`), Settings > Pages > Deploy from a branch > `main` / root. Không cần workflow.
2. **Google Sheet:** tải `sheet/ThuVienSo-THPT-Template.xlsx` lên Drive, mở bằng Google Trang tính, Lưu dưới dạng Google Trang tính. (Nếu đã có Sheet đang chạy thì giữ nguyên và bỏ bước này.)
3. **Apps Script:** trong Sheet chọn Tiện ích mở rộng > Apps Script, dán `apps-script/Code.gs`, Lưu. Triển khai > Ứng dụng web: Thực thi dưới dạng **Tôi**, Quyền truy cập **Bất kỳ ai**. Chép URL (kết thúc bằng `/exec`).
   Đã có triển khai cũ: Triển khai > Quản lý > bút chì > **Phiên bản mới** (URL giữ nguyên).
4. **Tài khoản:** tải lại Sheet, menu **Thư viện** > 1. Khởi tạo tài khoản, rồi 2. Tạo quản trị đầu tiên. Xem `TAI_KHOAN.md`.
5. **Kết nối:** dán URL vào `config.js`, dòng `appsScriptUrl`. Commit, chờ khoảng 1 phút, Ctrl+F5.
6. Thử một vòng theo `TEST_PLAN.md`, rồi thay sách mẫu bằng sách thật.
Thứ tự an toàn khi nâng cấp từ bản cũ: làm bước 3 và 5 trong cùng một lần để trang không bị gián đoạn.
