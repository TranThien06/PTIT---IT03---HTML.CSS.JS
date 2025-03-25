// tiến hành đếm số lượng số chẵn và số lượng số lẻ trong các số đã nhập và in kết quả ra màn hình
let soChan = 0;
let soLe = 0;
for(let i=0; i<5; i++){
    let num = parseInt(prompt(`nhap số thứ ${i+1}`));
    if(num % 2 == 0){
        soChan++
    }else{
        soLe++
    }
}
alert(`co ${soChan} số chẵn và ${soLe} số lẻ`);