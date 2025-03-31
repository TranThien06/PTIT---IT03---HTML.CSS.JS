function isStrongPassword(password) {
    let coChuHoa = false;
    let coChuThuong = false;
    let coSo = false;

    //kiểm tra độ dài mật khẩu
    if (password.length < 8) {
        return false;
    }

    //kiểm tra từng ký tự trong mật khẩu
    for (let i = 0; i < password.length; i++) {
        let kyTu = password[i];

        if (kyTu >= 'A' && kyTu <= 'Z') {
            coChuHoa = true;
        } else if (kyTu >= 'a' && kyTu <= 'z') {
            coChuThuong = true;
        } else if (kyTu >= '0' && kyTu <= '9') {
            coSo = true;
        }
    }

   
    return coChuHoa && coChuThuong && coSo;
}


console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass")); 
