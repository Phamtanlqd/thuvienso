# Cơ sở dữ liệu (Google Sheets). Không đổi tên tab và thứ tự cột.
- **Books**: A Mã sách | B Tên | C Tác giả | D Khối (10, 11, 12 hoặc Chung) | E Chủ đề | F Số bản | G Màu bìa (#rrggbb) | H Hiển thị (Có/Không)
- **Resources**: A Mã | B Tiêu đề | C Loại (trùng tên mục trong menu Tài liệu) | D Khối | E Chủ đề | F Liên kết https | G Nguồn/giấy phép | H Hiển thị | I Ảnh bìa (tùy chọn, https) | J Bộ sách | K Thư mục | L Lượt xem (nhập tay)
- **LoanRequests**: A Mã phiếu | B Thời gian | C Mã sách | D Tên sách | E Tài khoản | F Lớp | G Trạng thái (Chờ duyệt, Đang mượn, Đã trả, Đã hủy) | H Hạn trả | I Ghi chú
- **Users** (do Apps Script quản lý): Tài khoản | Họ tên | Vai trò | Lớp | Salt | Hash | Phải đổi mật khẩu | Trạng thái | Đăng nhập cuối
- **NhapTaiKhoan**: Tài khoản | Họ tên | Vai trò | Lớp | Mật khẩu ban đầu | Trạng thái (dùng để tạo hàng loạt)
- **ReadingPeriods**: Ngày | Lớp | Số tiết | Giáo viên | Ghi chú. **ThongKe**: công thức tự tính.
Số bản còn lại = Số bản trừ số phiếu Chờ duyệt hoặc Đang mượn. Học sinh giữ tối đa 3 phiếu, giáo viên 5.
