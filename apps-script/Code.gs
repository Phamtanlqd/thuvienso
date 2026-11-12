// Gắn vào Google Sheet: Tiện ích mở rộng > Apps Script. Sheet cần 3 tab: Books, Resources, LoanRequests.
const MAX_OPEN = 3, MAX_PER_HOUR = 5, OPEN_STATES = ["Chờ duyệt", "Đang mượn"];
function ss_() { return SpreadsheetApp.getActive(); }
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function clean_(s, n) { s = String(s == null ? "" : s).trim().slice(0, n); return /^[=+\-@]/.test(s) ? "'" + s : s; } // chặn chèn công thức
function rows_(name) { const v = ss_().getSheetByName(name).getDataRange().getValues(); v.shift(); return v.filter(r => r[0] !== ""); }
function cached_(key, fn) {
  const c = CacheService.getScriptCache(), hit = c.get(key); if (hit) return JSON.parse(hit);
  const val = fn(); try { c.put(key, JSON.stringify(val), 300); } catch (e) {} return val;
}
function onEdit() { CacheService.getScriptCache().removeAll(["books", "resources"]); }
function openCount_() { // số phiếu đang giữ chỗ theo mã sách
  const m = {}; rows_("LoanRequests").forEach(r => { if (OPEN_STATES.indexOf(r[6]) >= 0) m[r[2]] = (m[r[2]] || 0) + 1; }); return m;
}
function doGet(e) {
  const p = e.parameter || {};
  if (p.action === "books") {
    const open = openCount_();
    const books = cached_("books", () => rows_("Books").filter(r => r[7] === "Có").map(r =>
      ({ id: r[0], title: r[1], author: r[2], grade: r[3], topic: r[4], copies: Number(r[5]) || 0, color: r[6] })));
    books.forEach(b => b.available = Math.max(0, b.copies - (open[b.id] || 0)));
    return out_({ ok: true, books: books });
  }
  if (p.action === "resources") {
    return out_({ ok: true, resources: cached_("resources", () => rows_("Resources").filter(r => r[7] === "Có" && /^https?:\/\//.test(r[5])).map(r =>
      ({ id: r[0], title: r[1], type: r[2], grade: r[3], topic: r[4], url: r[5], source: r[6], img: /^https?:\/\//.test(r[8]) ? r[8] : "" }))) });
  }
  if (p.action === "ticket") { // chỉ trả đúng 1 phiếu theo mã ngẫu nhiên
    const id = String(p.id || "").toUpperCase().slice(0, 12);
    const r = rows_("LoanRequests").filter(x => String(x[0]) === id)[0];
    if (!r) return out_({ ok: false, error: "Không tìm thấy phiếu." });
    return out_({ ok: true, title: r[3], status: r[6], due: r[7] ? Utilities.formatDate(new Date(r[7]), "Asia/Ho_Chi_Minh", "dd/MM/yyyy") : "" });
  }
  return out_({ ok: false, error: "Yêu cầu không hợp lệ." });
}
function doPost(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.action !== "loan") return out_({ ok: false, error: "Yêu cầu không hợp lệ." });
    if (d.website) return out_({ ok: true, ticket: "OK" }); // bẫy bot: bỏ qua im lặng
    const code = String(d.studentCode || "").trim(), cls = String(d.className || "").trim();
    if (!/^[A-Za-z0-9\-]{3,20}$/.test(code) || !/^[\p{L}0-9\-. ]{1,10}$/u.test(cls)) return out_({ ok: false, error: "Mã học sinh hoặc lớp chưa đúng định dạng." });
    const cache = CacheService.getScriptCache(), key = "rl_" + code, n = Number(cache.get(key) || 0);
    if (n >= MAX_PER_HOUR) return out_({ ok: false, error: "Bạn gửi quá nhiều yêu cầu. Hãy thử lại sau ít phút." });
    cache.put(key, String(n + 1), 3600);
    const book = rows_("Books").filter(r => r[0] === d.bookId && r[7] === "Có")[0];
    if (!book) return out_({ ok: false, error: "Không tìm thấy sách này." });
    const loans = rows_("LoanRequests"), mine = loans.filter(r => r[4] == code && OPEN_STATES.indexOf(r[6]) >= 0);
    if (mine.length >= MAX_OPEN) return out_({ ok: false, error: "Bạn đang giữ tối đa " + MAX_OPEN + " cuốn. Hãy trả sách trước." });
    if (mine.some(r => r[2] === book[0])) return out_({ ok: false, error: "Bạn đã đặt cuốn này rồi." });
    const held = loans.filter(r => r[2] === book[0] && OPEN_STATES.indexOf(r[6]) >= 0).length;
    if ((Number(book[5]) || 0) - held <= 0) return out_({ ok: false, error: "Sách đã hết bản. Bạn chọn cuốn khác nhé." });
    const ticket = Utilities.getUuid().replace(/-/g, "").slice(0, 8).toUpperCase();
    ss_().getSheetByName("LoanRequests").appendRow([ticket, new Date(), book[0], book[1], clean_(code, 20), clean_(cls, 10), "Chờ duyệt", "", ""]);
    return out_({ ok: true, ticket: ticket });
  } catch (err) { return out_({ ok: false, error: "Có lỗi dữ liệu. Bạn thử lại nhé." }); } finally { lock.releaseLock(); }
}
