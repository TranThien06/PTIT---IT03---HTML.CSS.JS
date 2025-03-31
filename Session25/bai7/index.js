function chuanHoaChuoi(chuoi) {
    let ketQua = ""; //biến lưu kết quả
    let vietHoa = true; //biến kiểm tra xem có cần viết hoa không

    for (let i = 0; i < chuoi.length; i++) {
        let kyTu = chuoi[i];

        //nếu là chữ cái và đang cần viết hoa
        if (vietHoa && kyTu >= 'a' && kyTu <= 'z') {
            ketQua += String.fromCharCode(kyTu.charCodeAt(0) - 32); //chuyển thành chữ hoa
            vietHoa = false;
        }
        //nếu là chữ cái viết hoa và đang cần viết hoa
        else if (vietHoa && kyTu >= 'A' && kyTu <= 'Z') {
            ketQua += kyTu; // Giữ nguyên
            vietHoa = false;
        }
        //nếu gặp khoảng trắng, từ tiếp theo cần viết hoa
        else if (kyTu === ' ') {
            ketQua += kyTu;
            vietHoa = true;
        }
        //nếu là chữ thường thì giữ nguyên
        else {
            ketQua += kyTu.toLowerCase();
        }
    }
    return ketQua;
}


console.log(chuanHoaChuoi("hello WORLD")); 
console.log(chuanHoaChuoi("rIKKei acaDEMy"));
