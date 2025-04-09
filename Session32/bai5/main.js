// thêm nhiệm vụ
function themNhiemVu() {
    //lấy giá trị từ ô input
    let oNhapNhiemVu = document.getElementById("oNhapNhiemVu");
    let noiDungNhiemVu = oNhapNhiemVu.value.trim(); //loại bỏ khoảng trắng đầu cuối

    //kiểm tra nếu có nội dung
    if (noiDungNhiemVu !== "") {
        //tạo một phần tử div cho nhiệm vụ
        let phanTuNhiemVu = document.createElement("div");
        phanTuNhiemVu.className = "nhiemVu";

        //tạo phần tử span để hiển thị nội dung nhiệm vụ
        let phanTuNoiDung = document.createElement("span");
        phanTuNoiDung.textContent = noiDungNhiemVu;

        //tạo nút X để xóa nhiệm vụ
        let nutXoa = document.createElement("button");
        nutXoa.textContent = "X";
        nutXoa.className = "nutXoa";
        nutXoa.onclick = function () {
            phanTuNhiemVu.remove(); //xóa nhiệm vụ khi nhấp nút X
        };

        //thêm nội dung và nút X vào div nhiệm vụ
        phanTuNhiemVu.appendChild(phanTuNoiDung);
        phanTuNhiemVu.appendChild(nutXoa);

        //thêm nhiệm vụ vào danh sách
        document.getElementById("danhSachNhiemVu").appendChild(phanTuNhiemVu);

        //xóa nội dung ô input sau khi thêm
        oNhapNhiemVu.value = "";
    }
}

//thêm nhiệm vụ bằng phím Enter
document.getElementById("oNhapNhiemVu").addEventListener("keypress", function (suKien) {
    if (suKien.key === "Enter") {
        themNhiemVu(); //gọi hàm themNhiemVu khi nhấn Enter
    }
});