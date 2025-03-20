//Sử dụng toán tử 3 ngôi để kiểm tra số lớn nhất
let a = prompt("Mời bạn nhập số a: ");
let b = prompt("Mời bạn nhập số b: ");
let c = prompt("Mời bạn nhập số c: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
alert("Số lớn nhất là: " + max);
