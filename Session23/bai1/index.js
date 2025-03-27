let arr = [6, 2, 8, 5, 12, 9, 3, 30, 61, 30];
let count = 0;
let numbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
        numbers.push(arr[i]);
    }
}

if (count > 0) {
    alert(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng: ${numbers.join(", ")}`);
} else {
    alert("Không có số nguyên nào lớn hơn hoặc bằng 10 trong mảng.");
}

