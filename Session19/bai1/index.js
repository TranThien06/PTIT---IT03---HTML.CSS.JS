let soThang = prompt("Nhập số tháng: ");
soThang = parseInt(soThang);
// kiem tra
if (soThang < 0 || soThang > 12) {
    alert("Số bạn nhập không hợp lệ");
}
else if (soThang === 2) {
    alert("Tháng " + soThang + " có 28 hoặc 29 ngày");
}
else if (soThang === 4 || soThang === 6 || soThang === 9 || soThang === 11) {
    alert("Tháng " + soThang + " có 30 ngày");
}
else {
    alert("Tháng " + soThang + " có 31 ngày");
}