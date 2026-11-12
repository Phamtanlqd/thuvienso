// Sổ mượn trả: Google Sheet có tab "MuonTra", hàng 1 = Thời gian | Mã sách | Tên sách | Mã HS | Lớp | Trạng thái | Hạn trả
const SHEET = "MuonTra";
function sh_() { return SpreadsheetApp.getActive().getSheetByName(SHEET); }
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function clean_(s, n) { return String(s || "").replace(/[=+@\-]/, "'$&").slice(0, n); } // chặn công thức độc hại
function doPost(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.bookId || !d.studentCode || !d.className) return out_({ ok: false, error: "Thiếu thông tin." });
    const s = sh_(), code = clean_(d.studentCode, 20);
    const open = s.getDataRange().getValues().filter(r => r[3] == code && r[5] !== "Đã trả").length;
    if (open >= 3) return out_({ ok: false, error: "Em đang mượn tối đa 3 cuốn. Hãy trả sách trước." });
    s.appendRow([new Date(), clean_(d.bookId, 10), clean_(d.title, 120), code, clean_(d.className, 10), "Chờ duyệt", ""]);
    return out_({ ok: true });
  } catch (err) { return out_({ ok: false, error: "Lỗi dữ liệu." }); } finally { lock.releaseLock(); }
}
function doGet(e) {
  const code = String((e.parameter || {}).code || "").slice(0, 20);
  const items = sh_().getDataRange().getValues().slice(1).filter(r => r[3] == code)
    .map(r => ({ title: r[2], status: r[5], due: r[6] ? Utilities.formatDate(new Date(r[6]), "Asia/Ho_Chi_Minh", "dd/MM/yyyy") : "" }));
  return out_({ items: items }); // chỉ trả sách của đúng mã được hỏi
}
