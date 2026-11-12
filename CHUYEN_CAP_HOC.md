# Chuyển sang cấp học khác (dành cho quản trị)
Bản này đang cấu hình cho THPT. Muốn đổi, chỉ sửa 4 chỗ:
1. `index.html`, dòng `const CONFIG`:
   - THCS: `theme:"thcs", grades:["6","7","8","9"]`
   - Tiểu học: `theme:"tieuhoc", grades:["1","2","3","4","5"]`
   - THPT: `theme:"thpt", grades:["10","11","12"]`
   Đổi `school` thành tên trường.
2. Cách xưng hô: dùng tìm và thay thế trong `index.html` và `apps-script/Code.gs`: "bạn" thành "em" (và "Bạn" thành "Em") cho THCS và tiểu học.
3. Google Sheet: cột Khối trong Books và Resources ghi theo các khối mới (hoặc Chung); thay sách mẫu.
4. Với tiểu học, chữ to hơn và giao diện màu ấm tự bật nhờ `theme`. Nên đổi tên huy hiệu trong hàm `badges()` cho phù hợp lứa tuổi.
Sau khi sửa Code.gs phải tạo phiên bản triển khai mới (Deploy > Manage deployments > Edit > New version).
