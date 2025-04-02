function chiaMangThanhMangCon(mang, kichThuoc) {
    if (kichThuoc <= 0) {
        console.log("Tham số không hợp lệ");
        return [];
    }
    

    let ketQua = [];
    let mangCon = [];

    for (let i = 0; i < mang.length; i++) {
        mangCon.push(mang[i]);
        if (mangCon.length === kichThuoc || i === mang.length - 1) {
            ketQua.push(mangCon);
            mangCon = [];
        }
    }

    return ketQua;
}


let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, ];
let kichThuocMangCon = 3;
console.log(chiaMangThanhMangCon(mangSo, kichThuocMangCon));

