let diemMonToan = prompt("Nhập điểm môn Toán: ");
diemMonToan = Number(diemMonToan);
let diemMonVan = prompt("Nhập điểm môn Văn: ");
diemMonVan = Number(diemMonVan);
let diemMonAnh = prompt("Nhập điểm môn Anh: ");
diemMonAnh = Number(diemMonAnh);
// diem trung binh
let diemTrungBinh = (diemMonToan + diemMonVan + diemMonAnh) / 3;
document.write("Điểm trung bình: " + diemTrungBinh + "<br>");
// xep loai hoc luc
if (diemTrungBinh >= 8) {
    document.write("Học lực giỏi <br>");
}
else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
    document.write("Học lực khá <br>");
}
else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
    document.write("Học lực trung bình <br>");
}
else {
    document.write("Học lực yếu <br>");
}