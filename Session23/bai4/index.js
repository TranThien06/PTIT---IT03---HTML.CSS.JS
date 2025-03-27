// 1. Nhập số phần tử của mảng
let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [];

// Nhập từng ký tự vào mảng
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);
}

// Tạo mảng chứa các ký tự số
let kyTuSo = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && !isNaN(arr[i]) ) { // ch hiểu lắm
        kyTuSo.push(arr[i]);
    }
}


console.log(`Các ký tự số trong mảng là: ${kyTuSo}`);
console.log(`Số lượng ký tự số: ${kyTuSo.length}`);

