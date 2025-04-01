function xuLyMang(mangSo) {
    if (mangSo.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let ketQua = [];

    for (let i = 0; i < mangSo.length; i++) {
        let binhPhuong = mangSo[i] * mangSo[i];

        if (binhPhuong % 2 === 0) {
            ketQua.push(binhPhuong);
        }
    }

    return ketQua;
}


console.log(xuLyMang([2, 5, 10]));
console.log(xuLyMang([]));
console.log(xuLyMang([1, 3, 5]));
console.log(xuLyMang([4, 7, 8]));
