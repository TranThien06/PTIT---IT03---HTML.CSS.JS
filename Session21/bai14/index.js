let width = parseInt(prompt("Nhập chiều ngang:"));
let height = parseInt(prompt("Nhập chiều dọc:"));

if (width > 1 && height > 1) {
    // Vẽ dòng trên cùng
    document.write("*".repeat(width) + "<br>");

    // Vẽ phần thân rỗng
    for (let i = 1; i < height - 1; i++) {
        document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*" + "<br>");
    }

    // Vẽ dòng dưới cùng
    document.write("*".repeat(width) + "<br>");
} else {
    document.write("Chiều ngang và chiều dọc phải lớn hơn 1!");
}
