
let arr = [5, 2, 8, 5, 2, 5, 8, 2, 8, 8];


let giaTriDuyNhat = [];
let demSoLan = [];

for (let i = 0; i < arr.length; i++) {
    let index = giaTriDuyNhat.indexOf(arr[i]);
    if (index === -1) {
        giaTriDuyNhat.push(arr[i]);
        demSoLan.push(1);
    } else {
        demSoLan[index]++;
    }
}

// Tìm phần tử có số lần xuất hiện nhiều nhất
let maxCount = 0;
let minValue = Infinity;

for (let i = 0; i < giaTriDuyNhat.length; i++) {
    if (demSoLan[i] > maxCount || (demSoLan[i] === maxCount && giaTriDuyNhat[i] < minValue)) {
        maxCount = demSoLan[i];
        minValue = giaTriDuyNhat[i];
    }
}

console.log(`Phần tử xuất hiện nhiều nhất là: ${minValue}, với ${maxCount} lần.`);
alert(`Phần tử xuất hiện nhiều nhất là: ${minValue}, với ${maxCount} lần.`);
