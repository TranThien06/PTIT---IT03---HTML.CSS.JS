let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
let c = prompt("Nhập số c: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if (a <= 0 || b <= 0 || c <= 0) {
    alert("Độ dài 3 cạnh không hợp lệ");
}
if (a + b > c && a + c > b && b + c > a && a === b === c) {
    alert("Đây là tam giác đều");
}
else if (a + b > c && a + c > b && b + c > a && a === b || a === c || b === c) {
    alert("Đây là tam giác cân");
}
else if (a + b > c && a + c > b && b + c > a && a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    alert("Đây là tam giác vuông");
}
else if (a + b > c && a + c > b && b + c > a) {
    alert("Đây là tam giác thường");
}
else {
    alert("Điều kiện không hợp lệ");
}