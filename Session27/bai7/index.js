function timSoBiThieu(danhSach) {
    //tìm số đầu tiên và số cuối cùng trong mảng
    const dau = danhSach[0];
    const cuoi = danhSach[danhSach.length - 1];

//tính tổng của dãy số từ dau đến cuoi
    const tongDaySo = ((cuoi - dau + 1) * (dau + cuoi)) / 2;

//tính tổng các phần tử trong mảng hiện tại
    const tongMảng = danhSach.reduce((tong, so) => tong + so, 0);

//số bị thiếu là hiệu giữa tổng dãy đầy đủ và tổng mảng hiện tại
    return tongDaySo - tongMảng;
}

///
console.log(timSoBiThieu([1, 2, 4, 5])); // 3
console.log(timSoBiThieu([10, 11, 12, 14, 15])); // 13
