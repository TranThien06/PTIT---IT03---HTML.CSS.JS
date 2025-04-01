function timMaxVaViTri(mang) {
    if (!Array.isArray(mang)) {
        return "Dữ liệu không hợp lệ";
    }

    for (let i = 0; i < mang.length; i++) {
        if (!Number.isInteger(mang[i])) {
            return "Dữ liệu không hợp lệ";
        }
    }

    if (mang.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let giaTriLonNhat = mang[0];
    let viTri = 0;

    for (let i = 1; i < mang.length; i++) {
        if (mang[i] > giaTriLonNhat) {
            giaTriLonNhat = mang[i];
            viTri = i;
        }
    }

    return `max = ${giaTriLonNhat}\nposition: ${viTri}`;
}

// Test cases
console.log(timMaxVaViTri([10, 9, 5, 11, 24, 5])); 
console.log(timMaxVaViTri([]));
console.log(timMaxVaViTri("abc")); 
console.log(timMaxVaViTri([10, "a", 5])); 
