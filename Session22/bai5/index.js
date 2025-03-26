// mảng số nguyên gồm 5 phần tử ngẫu nhiên
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log("Mảng số nguyên:", arr);

// Tính tổng các số lẻ
let soLe = 0;
let soChan = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        soLe += arr[i];
    } else {
        soChan += arr[i];
    }
}

// Hiển thị kết quả
console.log("Tổng các số lẻ:", soLe);
console.log("Tổng các số chẵn:", soChan);
