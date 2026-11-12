# Thư viện số nhà trường (GitHub Pages)

Chạy hoàn toàn trên GitHub Pages (giao diện) + Google Sheet/Apps Script (sổ mượn trả). Không cần máy chủ, không tốn phí.

## Triển khai trong khoảng 15 phút
1. Tạo repo GitHub, tải toàn bộ thư mục này lên nhánh `main`.
2. Vào Settings > Pages > Source: chọn **GitHub Actions**. Sau khi workflow chạy xong, site nằm ở `https://<tên>.github.io/<repo>/`.
3. Tạo Google Sheet, đặt tên tab `MuonTra`, hàng 1: Thời gian | Mã sách | Tên sách | Mã HS | Lớp | Trạng thái | Hạn trả.
4. Extensions > Apps Script: dán `apps-script/Code.gs`. Deploy > New deployment > Web app > Execute as **Me**, Who has access **Anyone**. Chép URL.
5. Mở `index.html`, dán URL vào `CONFIG.appsScriptUrl`, commit. Xong.

## Vận hành hằng ngày
- Thêm sách: sửa `data/books.json` (hoặc nhờ Codespaces/GitHub web editor). Sách điện tử: đặt PDF/EPUB hợp pháp vào thư mục `files/` rồi điền `"url":"files/ten.pdf"`. Chỉ đưa tài liệu có bản quyền hoặc được phép phát hành.
- Duyệt mượn: đổi cột Trạng thái (Chờ duyệt > Đang mượn > Đã trả) và điền Hạn trả trong Sheet.
- Nhật ký đọc và huy hiệu lưu trên máy học sinh (không gửi đi). Muốn xếp hạng theo lớp cần mở rộng về sau.

## Bảo mật và trẻ em
- Chỉ thu thập mã học sinh và lớp. Không đưa dữ liệu thật của học sinh vào repo công khai; dùng Sheet riêng tư của trường.
- Phiếu mượn chỉ tra theo đúng mã học sinh; nên dùng mã khó đoán (không phải số thứ tự).
- Chưa tích hợp chatbot AI vì GitHub Pages không giữ được khóa API bí mật. Cần thêm dịch vụ trung gian nếu muốn.
