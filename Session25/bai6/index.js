function laChuoiDoiXung(chuoi) {
    let doDai = chuoi.length;

    for (let i = 0; i < doDai / 2; i++) {
        if (chuoi[i] !== chuoi[doDai - 1 - i]) {
            return false; //nếu có ký tự không khớp, không phải chuỗi đối xứng
        }
    }
    return true; //nếu duyệt hết mà không có sai khác, là chuỗi đối xứng
}


let chuoiNguoiDung = prompt("Nhập vào một chuỗi để kiểm tra đối xứng:");


if (chuoiNguoiDung !== null) {
    if (laChuoiDoiXung(chuoiNguoiDung)) {
        alert(`"${chuoiNguoiDung}" là chuỗi đối xứng!`);
    } else {
        alert(`"${chuoiNguoiDung}" không phải là chuỗi đối xứng!`);
    }
}
