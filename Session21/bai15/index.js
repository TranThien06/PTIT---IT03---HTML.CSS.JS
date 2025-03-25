const menhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
const soTienRut = parseInt(prompt("Nhập số tiền cần rút (chia hết cho 1000): "), 10);

if (!isNaN(soTienRut) && soTienRut > 0 && soTienRut % 1000 === 0) {
    console.log(`Số tiền cần rút: ${soTienRut}`);

    for (let denom of menhGia) {
        let count = Math.floor(soTienRut / denom);
        if (count > 0) {
            console.log(`${denom} - ${count} tờ`);
            soTienRut -= count * denom;
        }
    }
} else {
    console.log("Vui lòng nhập một số tiền hợp lệ (chia hết cho 1000).");
}
