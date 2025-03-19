let gio = prompt("Nhập giờ: ");
let phut = prompt("Nhập phút: ");
let giay = prompt("Nhập giây: ");

gio = (gio);
phut = parseInt(phut);
giay = parseInt(giay);

//chuyen doi gio sang dinh dang 12h
if (gio > 12) {
    gio = gio - 12;
    alert("Thời gian sau khi chuyển đổi: " + gio + ":" + phut + ":" + giay + " PM");
}
else if (gio == 12) {
    alert("Thời gian sau khi chuyển đổi: " + gio + ":" + phut + ":" + giay + " PM");
}
else if(gio === 0){
    gio = 12;
    alert("Thời gian sau khi chuyển đổi: " + gio + ":" + phut + ":" + giay + " AM");
}
else{
    alert("Thời gian sau khi chuyển đổi: " + gio + ":" + phut + ":" + giay + " AM");

}
