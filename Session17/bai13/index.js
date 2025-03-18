// số tiền gửi
let money = prompt("Nhập số tiền gửi: ");
money = parseInt(money);
// Số tháng gửi
let month = prompt("Nhập số tháng gửi: ");
month = parseInt(month);
// lãi suất trên năm
let laiSuat = 4.3 / 100;
// chuyển số tháng thành năm
let year = month / 12;
// Lãi đơn
let laiDon = money * laiSuat * year; // I = P * r * t
// số tiền nhận được
let total = money + laiDon; // A = P + I
document.write("Số tiền nhận được sau " + month + " tháng gửi là: " + Math.round(total) + " VNĐ");
// lãi kép
let laiKep = money * (1+ laiSuat) ** year; // A = P(1 + r)^n
// số tiền nhận được
let tienLaiKep = laiKep - money; // I = A - P
document.write("<br>Số tiền nhận được sau " + month + " tháng gửi là: " + Math.round(laiKep) + " VNĐ");


