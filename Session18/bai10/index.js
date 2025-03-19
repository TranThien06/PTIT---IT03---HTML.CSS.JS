// Chuyển đổi số nguyên thành chữ (từ 0 - 999)
// Khai báo biến
let number = prompt("Nhập số nguyên từ 0 đến 999: ");
number = parseInt(number);
let unit;
let ten;
let hundred;
let readNumber = "";
// Kiểm tra số nhập vào
if (number < 0 || number > 999) {
    alert("Số bạn nhập không hợp lệ");
}
else {
    // Tách số hàng trăm, chục, đơn vị
    soHangTram = Math.floor(number / 100);
    soHangChuc = Math.floor((number % 100) / 10);
    soHangDonVi = number % 10;
    // Đọc số hàng trăm
    switch (soHangTram) {
        case 0:
            break;
        case 1:
            readNumber += "Một trăm ";
            break;
        case 2:
            readNumber += "Hai trăm ";
            break;
        case 3:
            readNumber += "Ba trăm ";
            break;
        case 4:
            readNumber += "Bốn trăm ";
            break;
        case 5:
            readNumber += "Năm trăm ";
            break;
        case 6:
            readNumber += "Sáu trăm ";
            break;
        case 7:
            readNumber += "Bảy trăm ";
            break;
        case 8:
            readNumber += "Tám trăm ";
            break;
        case 9:
            readNumber += "Chín trăm ";
            break;
    }
    // Đọc số hàng chục
    switch (soHangChuc) {
        case 1:
            readNumber += "mười ";
            break;
        case 2:
            readNumber += "hai mươi ";
            break;
        case 3:
            readNumber += "ba mươi ";
            break;
        case 4:
            readNumber += "bốn mươi ";
            break;
        case 5:
            readNumber += "năm mươi ";
            break;
        case 6:
            readNumber += "sáu mươi ";
            break;
        case 7:
            readNumber += "bảy mươi ";
            break;
        case 8:
            readNumber += "tám mươi ";
            break;
        case 9:
            readNumber += "chín mươi ";
            break;
    }
    // Đọc số hàng đơn vị
    switch (soHangDonVi) {
        case 1:
            if (soHangChuc === 1) {
                readNumber += "một";
            }
            else {
                readNumber += "mốt";
            }
            break;
        case 2:
            readNumber += "hai";
            break;
        case 3:
            readNumber += "ba";
            break;
        case 4:
            if (soHangChuc === 1) {
                readNumber += "bốn";
            }
            else {
                readNumber += "tư";
            }
            break;
        case 5:
            if (soHangChuc === 0) {
                readNumber += "năm";
            }
            else {
                readNumber += "lăm";
            }
            break;
        case 6:
            readNumber += "sáu";
            break;
        case 7:
            readNumber += "bảy";
            break;
        case 8:
            if (soHangChuc === 0) {
                readNumber += "tám";
            }
            else {
                readNumber += "tư";
            }
            break;      
        case 9:
            readNumber += "chín";
            break;
        default:
            if (readNumber === "") {
                readNumber += "không";
            }
            break;
    }
    alert("Số bạn vừa nhập là: " + readNumber);
}

