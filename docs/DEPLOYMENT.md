# Triển khai (khoảng 20 phút)
1. Tải thư mục lên repo GitHub, nhánh `main`. Settings > Pages > Source: **GitHub Actions**.
2. Google Drive: tải `sheet/ThuVienSo-THPT-Template.xlsx` lên, mở bằng Google Trang tính, Lưu dưới dạng Google Trang tính.
3. Trong Sheet: Tiện ích mở rộng > Apps Script, dán `apps-script/Code.gs`, lưu.
4. Deploy > New deployment > Web app: Execute as **Me**, Access **Anyone**. Cấp quyền khi được hỏi. Chép URL.
5. Mở `index.html`, dán URL vào `CONFIG.appsScriptUrl`, commit. Chờ workflow chạy xong.
6. Sửa mã Apps Script về sau phải chọn Deploy > Manage deployments > Edit > New version, URL mới giữ nguyên.
7. Kiểm tra bằng TEST_PLAN, rồi thay sách mẫu bằng sách thật.
