let arr = [0, 1, false, 2, '', 3, null, 'Hello', undefined, NaN, 4, true];


const loaiBoF = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { //các giá trị falsy (false, 0, "", null, undefined, NaN) sẽ bị bỏ qua
        loaiBoF.push(arr[i]);
    }
}

console.log(loaiBoF);
