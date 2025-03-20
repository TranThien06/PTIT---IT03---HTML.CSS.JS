//giải phương trình bậc 2 ax^2+bx+c=0. Trả về nghiệm của phương trình.
let a = prompt("Mời bạn nhập a: ");
let b = prompt("Mời bạn nhập b: ");
let c = prompt("Mời bạn nhập c: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
}
else if (delta == 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép: " + x);
}
else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có 2 nghiệm phân biệt: " + x1 + " và " + x2);
}