
        // Lấy các phần tử
    const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");

    // Mở modal
    openBtn.onclick = function () {
        modal.style.display = "block";
        }

    // Đóng modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
        }

    // Click ngoài modal để đóng
    window.onclick = function (event) {
            if (event.target == modal) {
        modal.style.display = "none";
            }
        }
