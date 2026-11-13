# Chuyển sang cấp học khác (dành cho quản trị)
Bản này đang cấu hình cho THPT. Muốn đổi, chỉ sửa 3 chỗ:
1. `config.js`: đổi `school` và `grades` (THCS: ["6","7","8","9"]; Tiểu học: ["1","2","3","4","5"]).
2. Google Sheet: cột Khối trong Books và Resources ghi theo các khối mới (hoặc Chung). Thay sách mẫu.
3. Cách xưng hô: dùng tìm và thay thế trong `index.html` và `apps-script/Code.gs` đổi "bạn" thành "em" cho THCS và tiểu học.
Sau khi sửa Code.gs phải tạo phiên bản triển khai mới (Triển khai > Quản lý > bút chì > Phiên bản mới).
