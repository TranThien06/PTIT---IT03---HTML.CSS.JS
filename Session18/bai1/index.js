let soNguyen = prompt("Nhập số nguyên: ");
soNguyen = Number(soNguyen);
// kiem tra so chan le
if (soNguyen % 2 == 0) {
    document.write(soNguyen + " là số chẵn <br>");
}
else {
    document.write(soNguyen + " là số lẻ <br>");
}