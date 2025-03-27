let n = parseInt(prompt("Nhập số phần tử cho mảng."));
let arr=[];
// nhập các giá trị cho mảng
for(let i =0; i<n; i++){
    let num = parseInt(prompt(`nhập giá trị thứ ${i+1}.`));
    arr.push(num);
}
// dùng vòng lặp for ktra số âm
let soAm = 0;
for(let i = 0; i<arr.length; i++){ 
    if(arr[i] < 0){
        soAm++
    }
}
console.log(` Mảng có ${soAm} số âm`);