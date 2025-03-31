function demSoNguyenDuong(arr) {
    let count = arr.filter(num => Number.isInteger(num) && num > 0).length;
    return count;
}


let mangBatKy = [1, -2, 3.5, 4, 0, 6, -8, "abc", 9, 10];
console.log(`Số lượng số nguyên dương trong mảng: ${demSoNguyenDuong(mangBatKy)}`);
