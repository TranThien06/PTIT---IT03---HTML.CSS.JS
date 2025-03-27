
let n = parseInt(prompt('Nhập số lượng phần tử của mảng: '));
let arr = [];


for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
}

let soLonNhat = arr[0], soLonThuHai = -1;
for (let num of arr) {
    if (num > soLonNhat) {
        soLonThuHai = soLonNhat;
        soLonNhat = num;
    } else if (num > soLonThuHai && num < soLonNhat) {
        soLonThuHai = num;
    }
}

console.log(soLonThuHai !== -1 ? `Số lớn thứ hai là: ${soLonThuHai}` : 'Không có số lớn thứ hai trong mảng.');