let str = "";

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự trong chuỗi\n" +
        "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n" +
        "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            //Nhập chuỗi
            str = prompt("Nhập chuỗi:");
            break;

        case 2:
            //Hiển thị chuỗi
            alert("Chuỗi hiện tại: " + str);
            break;

        case 3:
            //Tính độ dài của chuỗi
            alert("Độ dài của chuỗi: " + str.length);
            break;

        case 4:
            //Đếm số lần xuất hiện của một ký tự trong chuỗi
            let char = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            alert(`Số lần xuất hiện của '${char}' trong chuỗi là: ` + count);
            break;

        case 5:
            //Kiểm tra chuỗi có phải là chuỗi đối xứng không
            let reversed = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            if (str === reversed) {
                alert("Chuỗi là chuỗi đối xứng.");
            } else {
                alert("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;

        case 6:
            //Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
            let words = str.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                }
            }
            str = words.join(" ");
            alert("Chuỗi sau khi chuyển đổi: " + str);
            break;

        case 7:
            //Thoát chương trình
            alert("Thoát chương trình!");
            break;

        default:
            
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) {
        break;
    }
}