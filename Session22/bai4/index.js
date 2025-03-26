let number = prompt("Nhập số nguyên bất kì(nhập cách nhau bởi dấu cách): ");
// map(Number) để chuyển đổi các phần tử từ chuỗi sang số.
let chuyenDoi = number.split(" ").map(Number);
let maxNumber = Math.max(...chuyenDoi);

alert(` giá trị lớn nhất trong mảng là ${maxNumber}`);

