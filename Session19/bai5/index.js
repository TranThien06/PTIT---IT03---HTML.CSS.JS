//viết chương trình kiểm tra chuỗi nhập vào có chứa dấu cách không
let str = prompt("Mời bạn nhập chuỗi: ");
// includes kiểm tra xem một chuỗi hoặc mảng có chứa một giá trị cụ thể hay không
if (str.includes(" ")) {
    alert("Chuỗi bạn nhập có chứa dấu cách");
}
else {
    alert("Chuỗi bạn nhập không chứa dấu cách");
}