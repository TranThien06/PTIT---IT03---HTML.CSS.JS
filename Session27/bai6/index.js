function kiemTraDayCapSoCong(danhSach) {

    if (danhSach.length < 2) {
        return true;
    }
    for (let i = 0; i < danhSach.length; i++) {
        if (isNaN(danhSach[i])) {
            return "Dữ liệu không hợp lệ"; // Nếu có phần tử không phải số
        }
    }


    const chenhLech = danhSach[1] - danhSach[0];

   
    for (let i = 2; i < danhSach.length; i++) {
        if (danhSach[i] - danhSach[i - 1] !== chenhLech) {
            return false;
        }
    }

    return true;
}


console.log(kiemTraDayCapSoCong([2, 4, 6, 8]));
console.log(kiemTraDayCapSoCong([1, 2, 4, 5]));
console.log(kiemTraDayCapSoCong([1, 3, "abc", 7])); // Dữ liệu không hợp lệ
