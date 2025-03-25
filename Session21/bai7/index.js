// parseFloat dùng để chuyển 1 chuỗi thành số thực
let tienGoc = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let soThang = parseInt(prompt("Nhập số tháng gửi:"));

if (isNaN(tienGoc) || isNaN(laiSuatThang) || isNaN(soThang) || tienGoc <= 0 || laiSuatThang <= 0 || soThang <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let tongTien = tienGoc * Math.pow(1 + laiSuatThang, soThang);
    let tienLai = tongTien - tienGoc;
  
    console.log(`Sau ${soThang} tháng:
- Tiền lãi: ${tienLai.toFixed(2)} VND
- Tổng số tiền nhận được: ${tongTien.toFixed(2)} VND`);
}
