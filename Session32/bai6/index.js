//lấy phần tử văn bản
let phanTuVanBan = document.getElementById("vanBan");
let kichThuocHienTai = 16; //kích thước chữ mặc định 

//hàm tăng kích thước chữ
function tangKichThuoc() {
    kichThuocHienTai += 2; //tăng 2px
    phanTuVanBan.style.fontSize = kichThuocHienTai + "px";
}

//hàm giảm kích thước chữ
function giamKichThuoc() {
    if (kichThuocHienTai > 10) { //giới hạn nhỏ nhất là 10px
        kichThuocHienTai -= 2; //giảm 2px
        phanTuVanBan.style.fontSize = kichThuocHienTai + "px";
    }
}