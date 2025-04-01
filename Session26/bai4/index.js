//Viết một hàm nhận vào một mảng số và trả về một mảng chỉ chứa các số nguyên tố.
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function locSoNguyenTo(danhSachSo) {
    return danhSachSo.filter(so => Number.isInteger(so) && laSoNguyenTo(so));
}


let danhSachSo = [1, 2, 3, 4, 5, 10, 17, 19, 22, 23];
console.log(locSoNguyenTo(danhSachSo)); 
