// nhập 5 số nguyên
let sum = 0;
for(let i= 0; i<5; i++){
    let num = parseInt(prompt(`nhập số thứ ${i+1}`));
    if( num % 2 != 0){
        sum += num;
    }
}
alert(`Tong các số lẻ vừa nhập là: ${sum}`);

