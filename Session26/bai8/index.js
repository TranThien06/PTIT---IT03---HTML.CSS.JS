// Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


function locSoNguyenToLe(mangSo) {
    if (mangSo.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let ketQua = [];

    for (let i = 0; i < mangSo.length; i++) {
        if (laSoNguyenTo(mangSo[i]) && mangSo[i] % 2 !== 0) {
            ketQua.push(mangSo[i]);
        }
    }

    return ketQua;
}


console.log(locSoNguyenToLe([10, 2, 3, 5, 7, 9]));
console.log(locSoNguyenToLe([])); 
console.log(locSoNguyenToLe([4, 6, 8, 10])); 
console.log(locSoNguyenToLe([11, 13, 15, 17])); 
