//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện hiển thị các số nguyên lớn hơn hoặc
//bằng 10 ra màn hình.
function nhapSoNguyen (){
    let danhSachSo = [];
  console.log("Nhập vào 10 số nguyên");
  
    
    // vòng lặp forr
    for(let i=0; i<10;i++){
        let nhapSo = parseInt(prompt(` Phần tử thứ ${i+1}:`));
        danhSachSo.push(nhapSo);
    }
    return danhSachSo;
}
function soLonHon10(danhSachSo){
    let danhSachSoLoc = [];
    for (let i=0; i< danhSachSo.length; i++)
        if(danhSachSo[i]>=10){
            danhSachSoLoc.push(danhSachSo[i]);
        }
        return danhSachSoLoc;
}
function main(){
    let danhSachSo = nhapSoNguyen();
    let danhSachSoLoc = soLonHon10(danhSachSo);
    console.log("Các số nguyên lớn hơn 10 là: ", danhSachSoLoc);
    
}
main();