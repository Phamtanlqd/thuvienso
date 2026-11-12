# 15 ca kiểm thử
| # | Nhóm | Thao tác | Kết quả mong đợi |
|---|---|---|---|
| 1 | Giao diện | Mở trên điện thoại 360px | Không cuộn ngang, kệ sách cuộn ngang được |
| 2 | Giao diện | Chọn Khối 11 | Hiện sách khối 11 và sách Chung, ẩn sách khối khác |
| 3 | Giao diện | Bật giảm chuyển động trên hệ điều hành | Không còn hiệu ứng nghiêng sách |
| 4 | Giao diện | Máy cấu hình thấp, mạng chậm | Trang dùng được trong vài giây, không treo |
| 5 | Danh mục | Tìm "de men", "Dế Mèn" | Cả hai đều ra cùng một sách |
| 6 | Danh mục | Tìm từ không tồn tại | Hiện thông báo gợi ý, không để trống |
| 7 | Mượn | Đặt mượn hợp lệ | Nhận mã phiếu, Sheet có dòng Chờ duyệt |
| 8 | Mượn | Đặt cuốn thứ 4 cùng mã HS | Báo đang giữ tối đa 3 cuốn |
| 9 | Mượn | Đặt lại đúng cuốn đã đặt | Báo đã đặt rồi |
| 10 | Mượn | Sách hết bản | Không hiện form, báo hết bản |
| 11 | Mượn | Gửi mã HS có ký tự lạ | Báo sai định dạng |
| 12 | An toàn | Nhập `<script>` hoặc `=1+1` vào lớp/mã | Không chạy script, Sheet không tính công thức |
| 13 | An toàn | Gửi 6 lần trong một giờ | Lần thứ 6 bị từ chối |
| 14 | An toàn | Tra phiếu bằng mã HS thay vì mã phiếu | Không thấy phiếu nào |
| 15 | Vận hành | Tắt Apps Script hoặc mất mạng | Trang vẫn hiện danh mục dự phòng kèm thông báo |
