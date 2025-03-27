let arr = [];

while (true) {
    console.log("================== MENU ===================");
    console.log("1. Nhập số phần tử và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê số lần xuất hiện trong mảng");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");

    let choice = parseInt(prompt("Lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử: "));
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            console.log("Các phần tử trong mảng:", arr);
            break;
        case 3:
            let soChan = [];
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    soChan.push(arr[i]);
                    sum += arr[i];
                }
            }
            console.log("Các số chẵn:", soChan, "Tổng:", sum);
            break;
        case 4:
            let max = arr[0], min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) max = arr[i];
                if (arr[i] < min) min = arr[i];
            }
            console.log("Số lớn nhất:", max, "Số nhỏ nhất:", min);
            break;
        case 5:
            let soNguyenTo = [];
            let tongSoNguyenTo = 0;
            for (let i = 0; i < arr.length; i++) {
                let isPrime = true;
                if (arr[i] < 2) isPrime = false;
                for (let j = 2; j * j <= arr[i]; j++) {
                    if (arr[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    soNguyenTo.push(arr[i]);
                    tongSoNguyenTo += arr[i];
                }
            }
            console.log("Các số nguyên tố:", soNguyenTo, "Tổng:", tongSoNguyenTo);
            break;
        case 6:
            let num = parseInt(prompt("Nhập số cần thống kê: "));
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) count++;
            }
            console.log(`Số ${num} xuất hiện ${count} lần.`);
            break;
        case 7:
            let soThem = parseInt(prompt("Nhập số cần thêm: "));
            let viTri = parseInt(prompt("Nhập vị trí cần thêm: "));
            if (viTri >= 0 && viTri <= arr.length) {
                arr.splice(viTri, 0, soThem);
                console.log("Mảng sau khi thêm:", arr);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 8:
            console.log("Thoát chương trình.");
            return;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
}