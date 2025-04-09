const hinhAnhLon = document.getElementById("hinhAnhLon");
const khungHinhAnhLon = document.querySelector(".large-img-container");

function thayDoiVaPhongToHinhAnh(hinhNho) {
    if (!hinhNho || !hinhAnhLon || !khungHinhAnhLon) return;

    //nếu hình ảnh hiện tại đang hiển thị và là cùng 1 ảnh, thì chuyển đổi phóng to/thu nhỏ
    if (hinhAnhLon.src === hinhNho.src && khungHinhAnhLon.style.display === "block") {
        hinhAnhLon.classList.toggle("zoomed");
        return;
    }

    //nếu là ảnh khác, gán ảnh mới và đảm bảo nó phóng to
    hinhAnhLon.src = hinhNho.src;
    khungHinhAnhLon.style.display = "block";
    hinhAnhLon.classList.add("zoomed"); //luôn phóng to khi chọn ảnh mới
}