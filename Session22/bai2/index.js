let numbers = [2, 5, 7, 4, 1, 8, 6];

let nhapSo = parseInt(prompt("Nhập số nguyên bất kỳ: "));
//.includes() dùng để kiểm tra các nhapso có nằm trong mảng numbers hay không
if (numbers.includes(nhapSo)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn");
}
