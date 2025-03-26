
let arr = [5, 12, 7, 5, 9, 12, 5, 15, 7, 5];


let num = parseInt(prompt("Nhập một số nguyên:"));

// đếm số lần xuất hiện của số nguyên đó trong mảng
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        count++;
    }
}

console.log("Mảng số nguyên:", arr);
console.log(`Số ${num} xuất hiện ${count} lần trong mảng.`);
alert(`Số ${num} xuất hiện ${count} lần trong mảng.`);
