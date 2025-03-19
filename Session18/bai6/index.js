let nhapNam = prompt("Nhập năm: ");
let nam = parseInt(nhapNam);
if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0){
    alert(nam + " là năm nhuận");
}
else{
    alert(nam + " không phải là năm nhuận");
} 