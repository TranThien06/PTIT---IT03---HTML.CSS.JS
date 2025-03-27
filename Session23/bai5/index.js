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
    if (typeof arr[i] === "string" && !isNaN(arr[i])) { // ch hiểu lắm
        kyTuSo.push(arr[i]);
    }
}
if(kyTuSo.length === 0){
    console.log("Mảng không có ký tự số.");
}else{


let sum = 0;
for(let i =0; i<kyTuSo.length; i++){
    sum += Number(kyTuSo[i]);
}
console.log(`toong các số trong mảng là: ${sum}`);
}