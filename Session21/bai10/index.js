let soNguyen = parseInt(prompt("Nhập vào số lượng số nguyên tố cần in: "), 10);
let count = 0;
let num = 2;

if (!isNaN(soNguyen) && soNguyen > 0) {
    console.log(`${soNguyen} số nguyên tố đầu tiên là:`);
    while (count < soNguyen) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
}
