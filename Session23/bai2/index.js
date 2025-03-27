let arr = [6, 2, 8, 5, 12, 9, 3, 50, 20, 110];
let maxArr = arr[0];
let index = 0;
for(let i=1; i<arr.length;i++){
    if(arr[i] > maxArr){
    maxArr = arr[i];
    index = i;
    }
}
console.log(` Phần tử lớn nhất trong mảng là: ${maxArr}`);
console.log(`vij trí lớn nhất trong mảng là: ${index}`);