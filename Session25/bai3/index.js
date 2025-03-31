function hienThiSoChan(arr) {
    let soChan = arr.filter(num => num % 2 === 0);
    console.log("Các số chẵn trong mảng:", soChan);
}

// Ví dụ sử dụng
let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
hienThiSoChan(mangSo);
