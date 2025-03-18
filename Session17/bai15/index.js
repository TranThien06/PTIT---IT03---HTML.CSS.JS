let r = prompt("Nhập bán kính hình cầu: ");
r = Number(r);
let V = (4 / 3) * Math.PI * Math.pow(r, 3);
document.write("Thể tích hình cầu là: " + Math.round(V) + "<br>");
// math.pow(): r bình phương
let S = 4 * Math.PI * Math.pow(r, 2);
document.write("Diện tích bề mặt hình cầu là: " + Math.round(S) + "<br>");
let C = 2 * Math.PI * r;
document.write("Chu vi lớn nhất hình cầu là: " + Math.round(C) + "<br>");