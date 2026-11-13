# Tài khoản và phân quyền (v3)

## 4 loại tài khoản
| Vai trò | Mã | Quyền |
|---|---|---|
| Học sinh | `hocsinh` | Đăng nhập, đặt mượn (tối đa 3 cuốn, 14 ngày), xem phiếu của mình |
| Giáo viên | `giaovien` | Như học sinh nhưng mượn tối đa 5 cuốn, 30 ngày |
| Thủ thư / GV phụ trách | `thuthu` | Thêm quyền "Quầy mượn trả": cho mượn, nhận trả, hủy phiếu |
| Quản trị | `admin` | Mọi quyền của thủ thư, thêm tạo tài khoản và cấp lại mật khẩu |

Khách chưa đăng nhập chỉ được xem danh mục sách và học liệu, không đặt mượn được.

## Cài đặt lần đầu (khoảng 15 phút)
1. Tải 3 file `index.html`, `config.js` lên GitHub (ghi đè). Dán URL Apps Script vào `config.js`, dòng `appsScriptUrl`.
2. Trong Apps Script của Google Sheet, dán toàn bộ `Code.gs` mới, Lưu. Tạo **phiên bản triển khai mới** (Triển khai > Quản lý > bút chì > Phiên bản mới). URL giữ nguyên.
3. Tải lại Google Sheet. Menu **Thư viện** xuất hiện (lần đầu sẽ hỏi cấp quyền).
4. Menu Thư viện > **1. Khởi tạo tài khoản**: tạo tab `Users` và `NhapTaiKhoan`.
5. Menu Thư viện > **2. Tạo quản trị đầu tiên**: hộp thoại hiện tài khoản `admin` và mật khẩu tạm. Đăng nhập trên trang web và đổi mật khẩu ngay.

## Tạo tài khoản
- **Từng người:** đăng nhập admin > tab Quản trị > Tạo tài khoản. Mật khẩu tạm hiện một lần.
- **Hàng loạt:** điền tab `NhapTaiKhoan` (Tài khoản, Họ tên, Vai trò, Lớp), chạy menu **3. Tạo tài khoản hàng loạt**. Mật khẩu ban đầu hiện ở cột E để in/phát cho học sinh. Mỗi lần xử lý tối đa 200 dòng, chạy lại cho phần còn lại. In xong phải **xóa cột E**.
- Tài khoản học sinh nên dùng mã học sinh. Lần đăng nhập đầu hệ thống bắt đổi mật khẩu.
- Khóa tài khoản: đổi cột Trạng thái trong `Users` thành "Khóa". Cấp lại mật khẩu: tab Quản trị.

## Quy trình mượn trả
Học sinh đặt mượn (Chờ duyệt) > thủ thư bấm **Cho mượn** khi trao sách (hạn trả tự tính theo vai trò) > bấm **Nhận trả** khi trả sách. Có thể **Hủy** phiếu chờ duyệt.

## An toàn
- Mật khẩu không lưu dạng chữ: chỉ lưu giá trị băm kèm muối riêng cho từng tài khoản. Tab `Users` phải để riêng tư, chỉ quản trị được mở.
- Phiên đăng nhập hết sau 6 giờ. Sai mật khẩu 5 lần thì khóa đăng nhập 15 phút.
- Mọi quyền được kiểm tra ở máy chủ (Apps Script), không chỉ ẩn nút trên giao diện.
- Giới hạn: cơ chế băm này đủ cho thư viện trường nhưng không bằng hệ thống chuyên dụng. Không dùng mật khẩu giống tài khoản quan trọng khác. Nếu một học sinh cố đoán sai mật khẩu của bạn 5 lần, tài khoản đó bị khóa tạm, thủ thư có thể cấp lại mật khẩu.
- Nhiều người đăng nhập cùng lúc (cả lớp 45 em) có thể chậm vài giây. Nên cho các nhóm đăng nhập lần lượt.
