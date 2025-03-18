let n = prompt("Nhập số n: ");
n = Number(n);
// math.sqrt() trả về căn bậc 2 của một số
let canBac2 = Math.sqrt(n);
// toán tử 3 ngôi

let kiemTra = Number.isInteger(canBac2)
? `${n} là số chinh phương` // nếu canBac2 là số nguyên thì n là số chính phương, ngược lại thì không phải
: `${n}  không phải là số chinh phương`;
alert(kiemTra);