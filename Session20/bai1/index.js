// chương trình tính tổng các số nguyên từ 1 đến N
let N = parseInt(prompt("Nhập số nguyên dương N:"));
if (N > 0) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    alert("Tổng các số nguyên từ 1 đến " + N + " là: " +sum);
} else {
    alert("Dữ liệu nhập vào không hợp lệ!");
}
//N