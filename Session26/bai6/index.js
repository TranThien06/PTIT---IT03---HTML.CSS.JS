function chuyenDinhDangNgay(mangChuoi) {
    //kiểm tra nếu không phải mảng
    if (!Array.isArray(mangChuoi)) {
        return "Dữ liệu không hợp lệ";
    }

    //kiểm tra mảng rỗng
    if (mangChuoi.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let ketQua = [];

    for (let i = 0; i < mangChuoi.length; i++) {
        let ngay = mangChuoi[i];

        //kiểm tra nếu phần tử không phải là chuỗi
        if (!ngay.split) {
            return "Dữ liệu không hợp lệ";
        }

        //tách chuỗi theo dấu "-"
        let phanTu = ngay.split("-");

        //kiểm tra xem có đúng 3 phần tử (YYYY-MM-DD) không
        if (phanTu.length !== 3) {
            return "Dữ liệu không hợp lệ";
        }

        let [nam, thang, ngayTrongThang] = phanTu;

        //kểm tra độ dài của từng phần
        if (nam.length !== 4 || thang.length !== 2 || ngayTrongThang.length !== 2) {
            return "Dữ liệu không hợp lệ";
        }

        ketQua.push(`${ngayTrongThang}/${thang}/${nam}`);
    }

    return ketQua;
}


console.log(chuyenDinhDangNgay(["2025-03-10", "2024-12-25", "2023-07-01"])); 
console.log(chuyenDinhDangNgay([])); 
console.log(chuyenDinhDangNgay("abc")); 
console.log(chuyenDinhDangNgay(["2025-03-10", 12345])); 
