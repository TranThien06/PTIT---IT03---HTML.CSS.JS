let num = prompt("Nhập dãy số bất kỳ:");


if (isNaN(num)) {
    console.log("Mảng không hợp lệ");
} else {
    //.split("") dùng để chuyển chuỗi thành mảng ký tự
    //.reverse() dùng để đảo ngược mảng
    //.join("") ghép mảng thành chuỗi
    let daoNguocMang = num.split("").reverse().join("");
    console.log(`Mảng sau khi đảo ngược ${daoNguocMang}`);
}
