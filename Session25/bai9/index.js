//khai báo mảng chứa tất cả tài khoản người dùng
let danhSachTaiKhoan = [];

function laEmailHopLe(email) {
    //kiểm tra email có chứa "@" và kết thúc bằng ".com" hoặc ".vn"
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function dangKyTaiKhoan() {
    let emailNguoiDung = prompt("Nhập email để đăng ký:");

    
    if (!laEmailHopLe(emailNguoiDung)) {
        alert("Email không hợp lệ! Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    //kiểm tra email đã tồn tại trong danh sách chưa
    if (danhSachTaiKhoan.includes(emailNguoiDung)) {
        alert("Tài khoản đã tồn tại!");
    } else {
        danhSachTaiKhoan.push(emailNguoiDung);
        alert("Đăng ký thành công!");
    }
}


dangKyTaiKhoan();
console.log(danhSachTaiKhoan); 
