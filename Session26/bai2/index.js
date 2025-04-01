function locChuoiDaiHon5(danhSachChuoi) {
    if (danhSachChuoi.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let danhSachChuoiLoc = [];
    for (let i = 0; i < danhSachChuoi.length; i++) {
        if ( danhSachChuoi[i].length > 5) {
            danhSachChuoiLoc.push(danhSachChuoi[i]);
        }
    }
    return danhSachChuoiLoc;
}

///
let mangChuoi1 = ["apple", "banana", "cat", "elephant", "dog"];
console.log(`Mảng có 5 kí tự là: ${locChuoiDaiHon5(mangChuoi1)}.`); 
let mangChuoi2 = [];
console.log(locChuoiDaiHon5(mangChuoi2)); 

let mangChuoi3 = "abc";
console.log(`Dữ liệu không hợp lệ ${locChuoiDaiHon5(mangChuoi3)}`); 