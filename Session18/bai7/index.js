let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
a = parseInt(a);
b = parseInt(b);
let phepToan = prompt("Nhập phép toán (+, -, *, /): ");
let ketQua;
switch(phepToan){
    case "+":
        ketQua = a + b;
        break;
    case "-":
        ketQua = a - b;
        break;
    case "*":
        ketQua = a * b;
        break;
    case "/":
        ketQua = a / b;
        break;
    default:
        alert("Phép toán không hợp lệ");
}

alert("Kết quả: " + ketQua);