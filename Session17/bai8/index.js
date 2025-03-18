// Nhập hai ngày từ người dùng
let date1Str = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2Str = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

// chuyển đổi chuỗi thành đối tượng Date
let date1 = new Date(date1Str);
let date2 = new Date(date2Str);

// math.abs để không bị âm
let diffInMs = Math.abs(date2 - date1);

// Chuyển đổi giờ thành ngày
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// hiển thị
alert("Số ngày giữa hai ngày là: " + diffInDays);
