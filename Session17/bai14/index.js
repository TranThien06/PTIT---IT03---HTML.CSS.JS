// nhập bán kính
let r = prompt("Nhập vào bán kính: ");
r = parseInt(r);
// chieu cao
let h = prompt("Nhập vào chiều cao: ");
h = parseInt(h);
// diện tích xung quanh
let Sxq = 2 * Math.PI * r * h;
// diện tích toàn phần
let Stp = 2 * Math.PI * r * (r + h);
// thể tích
let V = Math.PI * r * r * h;
// chu vi đáy
let C = 2 * Math.PI * r;

document.write("Diện tích xung quanh: " + Math.round(Sxq) + "<br>");
document.write("Diện tích toàn phần: " + Math.round(Stp) + "<br>");
document.write("Thể tích: " + Math.round(V) + "<br>");
document.write("Chu vi đáy: " + Math.round(C) + "<br>");
