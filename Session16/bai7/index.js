let math = prompt("Nhập điểm môn Toán: ");
let physics = prompt("Nhập điểm môn Lý: ");
let chemistry = prompt("Nhập điểm môn Hóa: ");
let diemTrungBinh = (parseInt(math) + parseInt(physics) + parseInt(chemistry)) / 3;
alert("Điểm trung bình của bạn là: " + diemTrungBinh);