// kiem tra so chia het cho 3 va 5
let numBer = prompt("Mời bạn nhập số: ");
numBer = parseInt(numBer);
if (numBer % 3 == 0 && numBer % 5 == 0) {
    alert("Số bạn nhập chia hết cho 3 và 5");
}
else {
    alert("Số bạn nhập không chia hết cho 3 và 5");
}