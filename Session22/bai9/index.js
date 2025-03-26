
let arr = [5, 2, 8, 5, 2, 5, 8, 2, 8, 8];


// set dùng để loại bỏ các phần tử trùng nhau trong mảng
let khongTrungNhau = [...new Set(arr)];

// sort sắp xếp các phần tử 
khongTrungNhau.sort((a, b) => a - b);
alert("Mảng sau khi loại bỏ trùng và sắp xếp: " + khongTrungNhau.join(", "));
