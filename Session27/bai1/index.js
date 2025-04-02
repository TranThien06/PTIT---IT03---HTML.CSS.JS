function cong(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

function nhan(a, b) {
    return a * b;
}

function chia(a, b) {
    if (b === 0) {
        return "Lỗi: Không thể chia cho 0";
    }
    return a / b;
}

function main() {
    while (true) {
        console.log("\n===== MENU TÍNH TOÁN =====");
        console.log("1. Cộng hai số");
        console.log("2. Trừ hai số");
        console.log("3. Nhân hai số");
        console.log("4. Chia hai số");
        console.log("5. Thoát");

        let lua_chon = prompt("Chọn chức năng (1-5): ");

        if (lua_chon === '5') {
            console.log("Chương trình kết thúc. Tạm biệt!");
            break;
        }

        let so_1 = parseFloat(prompt("Nhập số thứ nhất: "));
        let so_2 = parseFloat(prompt("Nhập số thứ hai: "));

        if (isNaN(so_1) || isNaN(so_2)) {
            console.log("Lỗi: Vui lòng nhập số hợp lệ.");
            continue;
        }

        let ket_qua;
        switch (lua_chon) {
            case '1':
                ket_qua = cong(so_1, so_2);
                break;
            case '2':
                ket_qua = tru(so_1, so_2);
                break;
            case '3':
                ket_qua = nhan(so_1, so_2);
                break;
            case '4':
                ket_qua = chia(so_1, so_2);
                break;
            default:
                console.log("Lỗi: Vui lòng chọn một tùy chọn hợp lệ.");
                continue;
        }

        console.log("Kết quả:", ket_qua);
    }
}

main();
