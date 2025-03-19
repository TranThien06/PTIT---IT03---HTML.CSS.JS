let soNamkinhNghiem = prompt("Nhập số năm kinh nghiệm: ");
soNamkinhNghiem = Number(soNamkinhNghiem);
if (soNamkinhNghiem < 1) { 
    document.write("Mới vào nghề <br>");
}
else if (soNamkinhNghiem >= 1 && soNamkinhNghiem <= 3) {
    document.write("Có kinh nghiệm <br>");
}
else if (soNamkinhNghiem >=4 && soNamkinhNghiem <=6) {
    document.write("Chuyên viên <br>");
}
else {
    document.write("Quản lí <br>");
}