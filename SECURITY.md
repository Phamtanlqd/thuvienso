# An toàn dữ liệu
- Chỉ thu thập mã học sinh và lớp. Không thu thập số điện thoại, ảnh, địa chỉ.
- Sheet để riêng tư, chỉ thủ thư chỉnh sửa. Trang web chỉ gọi Apps Script, không đọc trực tiếp Sheet.
- Tra phiếu bằng mã phiếu ngẫu nhiên 8 ký tự, không tra theo mã học sinh.
- Chống lạm dụng: bẫy bot (honeypot), tối đa 5 yêu cầu mỗi giờ cho mỗi mã học sinh, khóa ghi đồng thời, chặn giữ trùng sách.
- Chặn chèn công thức vào Sheet (ký tự = + - @ ở đầu), kiểm tra định dạng mã và lớp, escape HTML khi hiển thị, chỉ mở liên kết http/https.
- Không đưa dữ liệu thật của học sinh vào repo công khai. Repo chỉ chứa danh mục sách và học liệu.
- Học liệu: chỉ liên kết nguồn hợp pháp, ghi rõ nguồn và giấy phép; không đăng sách có bản quyền lên repo.
- Học sinh THPT phần lớn chưa đủ 18 tuổi: nhà trường nên thông báo cho phụ huynh về dữ liệu thu thập và đối chiếu quy định bảo vệ dữ liệu cá nhân hiện hành.
- Hạn chế còn lại: URL Apps Script công khai nên không thể chống spam tuyệt đối; thủ thư kiểm tra phiếu Chờ duyệt định kỳ.
