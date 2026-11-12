# Thư viện số trường THPT

Chạy trên GitHub Pages + Google Sheets/Apps Script. Không cần máy chủ.

| Thành phần | Nội dung |
|---|---|
| Giao diện | `index.html`: bố cục kiểu thư viện điện tử (menu Tài liệu 9 chuyên mục, hero, kệ sách 3D), lọc theo khối, responsive |
| Chuyên mục | Cột **Loại** trong tab Resources phải trùng tên chuyên mục: Không gian văn hóa, Sách điện tử, Sách nói, Bài giảng điện tử, Video, Album ảnh, Kỹ năng sống, Báo, tạp chí. Cột I (tùy chọn) là link ảnh bìa |
| Danh mục | Tìm kiếm không dấu/có dấu, lọc theo khối, xem số bản còn lại |
| Học liệu | Danh mục liên kết tài liệu số hợp pháp, có ghi nguồn |
| Mượn sách | Biểu mẫu đặt mượn, trả về mã phiếu để tra trạng thái |
| Backend | `apps-script/Code.gs` |
| Cơ sở dữ liệu | `sheet/ThuVienSo-THPT-Template.xlsx` (Books, Resources, LoanRequests, ReadingPeriods, ThongKe) |

Đổi sang cấp học khác: xem `docs/CHUYEN_CAP_HOC.md`.
Tài liệu: DEPLOYMENT, DATABASE, SECURITY, TEST_PLAN, ROADMAP trong thư mục `docs/`.
Danh mục tĩnh `data/*.json` là bản dự phòng khi Apps Script lỗi; sau khi dùng Sheet có thể cập nhật định kỳ.
