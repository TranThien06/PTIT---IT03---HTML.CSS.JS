let soTien = prompt("Nhập số tiền: ");
let numBer = Number(soTien); // chuyển đổi dạng chuỗi thành số
alert(numBer.toLocaleString( "vi-VN" , { style: "currency", currency: "VND" }))