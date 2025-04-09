const nhapCongViec = document.getElementById("nhapCongViec");
const nutThem = document.getElementById("nutThem");
const danhSachCongViec = document.getElementById("danhSachCongViec");

function themCongViec() {
    const congViec = nhapCongViec.value.trim();
    if (congViec !== "") {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
                    <span>${congViec}</span>
                    <div>
                        <button class="edit-btn" onclick="suaCongViec(this)">Sửa</button>
                        <button class="delete-btn" onclick="xoaCongViec(this)">Xóa</button>
                    </div>
                `;
        danhSachCongViec.appendChild(taskItem);
        nhapCongViec.value = "";
    }
}

function suaCongViec(button) {
    
    const congViecHienTai = button.parentElement.parentElement.querySelector("span").textContent;
    const noiDungMoi = prompt("Chỉnh sửa công việc:", congViecHienTai);
    if (noiDungMoi !== null && noiDungMoi.trim() !== "") {
        button.parentElement.parentElement.querySelector("span").textContent = noiDungMoi.trim();
    }
}

function xoaCongViec(button) {
   
    if (confirm("Bạn có chắc muốn xóa công việc này?")) {
        button.parentElement.parentElement.remove();
    }
}

nutThem.addEventListener("click", themCongViec);

nhapCongViec.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        themCongViec();
    }
});