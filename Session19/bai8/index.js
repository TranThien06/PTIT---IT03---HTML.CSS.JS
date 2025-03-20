//Viết chương trình yêu cầu người dùng nhập vào một tháng bất kì trong năm, sau đó hiển thị ra mùa trong năm của tháng đó.
let month = prompt("Mời bạn nhập vào một tháng trong năm: ");
month = parseInt(month);
if (month < 1 || month > 12 || isNaN(month)) {
    alert("Tháng bạn nhập không hợp lệ");
}
else {
    switch (month) {
        case 1:
        case 2:
        case 3:
            alert("Tháng " + month + " là mùa xuân");
            break;
        case 4:
        case 5:
        case 6:
            alert("Tháng " + month + " là mùa hạ");
            break;
        case 7:
        case 8:
        case 9:
            alert("Tháng " + month + " là mùa thu");
            break;
        case 10:
        case 11:
        case 12:
            alert("Tháng " + month + " là mùa đông");
            break;
    }
}
