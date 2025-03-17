let num1 = prompt("Nhập số thứ nhất: ");
let num2 = prompt("Nhập số thứ hai: ");
let random = Math.round(Math.random() * (parseInt(num2) - parseInt(num1)) + parseInt(num1));
alert("Số ngẫu nhiên trong khoảng từ " + num1 + " đến " + num2 + " là: " + random);