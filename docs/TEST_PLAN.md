# Kiểm thử (18 ca)
| # | Thao tác | Kết quả mong đợi |
|---|---|---|
| 1 | Mở trang trên điện thoại 360px | Không cuộn ngang, menu Menu mở được |
| 2 | Chọn Khối 11 | Hiện sách khối 11 và sách Chung |
| 3 | Tìm "de men" và "Dế Mèn" | Ra cùng kết quả |
| 4 | Tắt Apps Script hoặc mất mạng | Vẫn xem được danh mục lưu sẵn kèm thông báo |
| 5 | Chưa đăng nhập, bấm sách | Chỉ có nút Đăng nhập để mượn |
| 6 | Đăng nhập sai mật khẩu | Báo sai, không lộ thông tin tài khoản có tồn tại hay không |
| 7 | Sai 5 lần liên tiếp | Khóa đăng nhập 15 phút |
| 8 | Đăng nhập lần đầu | Bị bắt đổi mật khẩu, chưa đổi thì không mượn được |
| 9 | Mật khẩu mới yếu (ngắn, thiếu số) | Bị từ chối |
| 10 | Học sinh đặt mượn | Có mã phiếu, Sheet có dòng Chờ duyệt, số bản giảm |
| 11 | Đặt trùng sách, đặt vượt 3 cuốn | Bị từ chối |
| 12 | Học sinh vào #/quay hoặc #/quan-tri | Không thấy dữ liệu, báo không có quyền |
| 13 | Thủ thư bấm Cho mượn | Phiếu thành Đang mượn, có hạn trả |
| 14 | Thủ thư bấm Nhận trả | Phiếu thành Đã trả, số bản tăng lại |
| 15 | Thủ thư tạo tài khoản | Bị từ chối (chỉ quản trị) |
| 16 | Quản trị tạo tài khoản, cấp lại mật khẩu | Hiện mật khẩu tạm một lần |
| 17 | Nhập `<script>` hoặc `=1+1` khi tạo tài khoản | Không chạy mã, Sheet không tính công thức |
| 18 | Đăng xuất rồi dùng lại nút Back | Không còn thấy mục của thủ thư/quản trị |
