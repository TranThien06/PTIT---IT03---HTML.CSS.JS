console.log("Các số Armstrong có 3 chữ số:");

for (let i = 100; i < 1000; i++) {
    let sum = 0;
    let temp = i;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    if (sum === i) {
        console.log(i);
    }
}
//Số Armstrong là số mà tổng các chữ số của nó lũy thừa theo số chữ số của chính nó bằng chính số đó.
//vd: 153:1mu3 + 5mu3 + 3mu3 = 1 + 125 + 27 = 153