// chương trình in ra tất cả các số chia hết cho 5 trong khoảng từ 1 đến N
let N = parseInt(prompt("Nhập số nguyên dương N:"));

if (N > 0) {
    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0) {
            alert("Các số chia hết cho 5 từ 1 đến " +N+"là: " +1 );
        }
    }
    alert(result);
} else {
    alert("Vui lòng nhập một số nguyên dương!");
}