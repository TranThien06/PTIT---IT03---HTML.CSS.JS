let tenTaiKhoan = prompt("Nhập tên tài khoản: ");

if (tenTaiKhoan === "ADMIN") {
    let matKhau = prompt("Nhập mật khẩu: ");
    if (matKhau === "TheMaster") {
        document.write(" Welcome ");
    }
    else if (matKhau === "null") {
        document.write("Canceled");
    }
    else {
        document.write("Wrong password");
    }
}
else if (tenTaiKhoan === "null") {
    document.write("Canceled");
}
else {
    document.write("I don't know you");
}