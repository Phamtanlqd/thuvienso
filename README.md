# Thư viện số trường THPT Chuyên Lê Quý Đôn, Điện Biên

Giao diện chạy trên GitHub Pages, dữ liệu và sổ mượn trả trên Google Sheets + Apps Script.

| Thành phần | Nội dung |
|---|---|
| `index.html` | Giao diện: trang chủ, kệ sách 3D, menu Tài liệu, mượn sách giấy, nhật ký đọc, phiếu của tôi, quầy mượn trả, quản trị |
| `config.js` | Tên trường, khối lớp, URL máy chủ (chỉ sửa file này) |
| `apps-script/Code.gs` | Máy chủ: danh mục, đăng nhập, phân quyền, mượn trả |
| `sheet/` | Google Sheet mẫu (Books, Resources, LoanRequests, Users, NhapTaiKhoan, ReadingPeriods, ThongKe) |
| `data/` | Danh mục dự phòng khi Apps Script không phản hồi |
| `docs/` | DEPLOYMENT, TAI_KHOAN, DATABASE, SECURITY, TEST_PLAN, ROADMAP, CHUYEN_CAP_HOC |

Bắt đầu từ `docs/DEPLOYMENT.md`.
