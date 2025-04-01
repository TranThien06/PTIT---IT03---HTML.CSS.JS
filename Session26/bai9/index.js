function tinhTongChanLe(mang) {
    if (!Array.isArray(mang)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (mang.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    let tongChan = mang.filter(so => so % 2 === 0).reduce((acc, so) => acc + so, 0);
    let tongLe = mang.filter(so => so % 2 !== 0).reduce((acc, so) => acc + so, 0);

    console.log(`Tổng số chẵn = ${tongChan}`);
    console.log(`Tổng số lẻ = ${tongLe}`);
}

tinhTongChanLe([1, 2, 3, 4, 5, 6, 7, 8, 9]);
tinhTongChanLe([]); 
tinhTongChanLe("abc"); 
