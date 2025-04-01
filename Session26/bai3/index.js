function laMang(danhSach) {
    return Array.isArray(danhSach);
}

function locEmailHopLe(danhSachEmail) {
    if (!laMang(danhSachEmail)) {
        return "Dữ liệu không hợp lệ";
    }

    if (danhSachEmail.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let danhSachEmailHopLe = [];
    for (let i = 0; i < danhSachEmail.length; i++) {
        if (typeof danhSachEmail[i] === "string" && danhSachEmail[i].includes("@") && !danhSachEmail[i].includes(" ")) {
            danhSachEmailHopLe.push(danhSachEmail[i]);
        }
    }
    return danhSachEmailHopLe;
}


let danhSachEmail = [
    "john.doe@gmail.com",
    "invalidemail.com",
    "hello@domain.net",
    "space@out.com"
];
console.log(locEmailHopLe(danhSachEmail)); 

let danhSachEmailRong = [];
console.log(locEmailHopLe(danhSachEmailRong)); 

let duLieuSai = "abc";
console.log(locEmailHopLe(duLieuSai)); 
