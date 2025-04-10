// Danh sách sản phẩm
const sanPham = [
    { ten: "Rau sạch", danhMuc: "Đồ ăn" },
    { ten: "Thịt lợn", danhMuc: "Đồ ăn" },
    { ten: "Pepsi không calo", danhMuc: "Nước" },
    { ten: "Cocacola", danhMuc: "Nước" },
    { ten: "Cờ lê", danhMuc: "Dụng cụ" },
    { ten: "Tuy vít", danhMuc: "Dụng cụ" }
];

function locSanPham() {
    const chon = document.getElementById("category").value;
    const ketQua = document.getElementById("ketQua");
    ketQua.innerHTML = "";

    const loc = chon === "" ? sanPham : sanPham.filter(sp => sp.danhMuc === chon);

    loc.forEach(sp => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Tên đồ ăn:</strong> ${sp.ten} - <strong>Danh mục:</strong> ${sp.danhMuc}`;
        ketQua.appendChild(li);
    });
}