let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
let c = prompt("Nhập số c: ");

// tính den ta
let denTa = b * b - 4 * a * c;

// kiểm tra điều kiện
if (denTa < 0) {
    document.write("Phương trình vô nghiệm");
}
else if (denTa == 0) {
    let x = -b / (2 * a);
    document.write("Phương trình có nghiệm kép x = " + x);
}
else {
    let x1 = (-b + Math.sqrt(denTa)) / (2 * a);
    let x2 = (-b - Math.sqrt(denTa)) / (2 * a);
    document.write("Phương trình có 2 nghiệm phân biệt: x1 = " + x1
        + ", x2 = " + x2); 
}