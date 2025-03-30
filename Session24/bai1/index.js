let arr = [];

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm số lần xuất hiện của một phần tử\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát"
    ));

    switch (choice) {
        // Nhập mảng
        case 1:
            arr = [];
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;
        // Hiển thị mảng
        case 2: 
            alert("Mảng hiện tại: " + arr.join(", "));
            break;
        // Tìm phần tử lớn nhất và nhỏ nhất
        case 3: 
            if (arr.length === 0) {
                alert("Mảng rỗng!");
            } else {
                let max = Math.max(...arr);
                let min = Math.min(...arr);
                alert(`Phần tử lớn nhất: ${max}, phần tử nhỏ nhất: ${min}`);
            }
            break;
        // Tính tổng các phần tử
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;
        // Tìm số lần xuất hiện của một phần tử
        case 5: 
            let x = parseInt(prompt("Nhập số cần đếm trong mảng:"));
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === x) {
                    count++;
                }
            }
            alert(`Số ${x} xuất hiện ${count} lần trong mảng.`);
            break;
        // Sắp xếp mảng tăng dần
        case 6:
            arr.sort((a, b) => a - b);
            alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
            break;
        // Thoát chương trình-
        case 7: 
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) {
        break;
    }
}