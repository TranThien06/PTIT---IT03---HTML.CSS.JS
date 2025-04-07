
                let danhSachCongViec = [];
                let idTiepTheo = 1;

                function themCongViec() {
                    let ten = prompt("Nhập tên công việc:");
                let moTa = prompt("Nhập mô tả công việc:");
                let thoiGianBatDau = new Date().toLocaleString();
                let trangThai = prompt("Nhập trạng thái (hoàn thành / chưa hoàn thành):");

                let congViec = {
                    id: idTiepTheo,
                ten: ten,
                moTa: moTa,
                thoiGian: thoiGianBatDau,
                trangThai: trangThai.toLowerCase()
    };

                danhSachCongViec.push(congViec);
                idTiepTheo++;
                alert(" Đã thêm công việc!");
  }

                function hienThiCongViec() {
    if (danhSachCongViec.length === 0) {
                    alert(" Không có công việc nào.");
                return;
    }

                let ketQua = "📋 DANH SÁCH CÔNG VIỆC:\n\n";
                for (let i = 0; i < danhSachCongViec.length; i++) {
                    let cv = danhSachCongViec[i];
                ketQua += `ID: ${cv.id}\nTên: ${cv.ten}\nMô tả: ${cv.moTa}\nThời gian: ${cv.thoiGian}\nTrạng thái: ${cv.trangThai}\n\n`;
    }
                alert(ketQua);
  }

                function capNhatTrangThai() {
                    let id = prompt("Nhập ID công việc cần cập nhật:");
                id = parseInt(id);

                let timThay = false;
                for (let i = 0; i < danhSachCongViec.length; i++) {
      if (danhSachCongViec[i].id === id) {
                    let trangThaiMoi = prompt("Nhập trạng thái mới (hoàn thành / chưa hoàn thành):");
                danhSachCongViec[i].trangThai = trangThaiMoi.toLowerCase();
                alert(" Đã cập nhật trạng thái.");
                timThay = true;
                break;
      }
    }

                if (!timThay) {
                    alert(" Không tìm thấy công việc với ID này.");
    }
  }

                function locTheoTrangThai() {
                    let trangThaiLoc = prompt("Nhập trạng thái cần lọc (hoàn thành / chưa hoàn thành):").toLowerCase();
                let ketQua = " CÔNG VIỆC ĐÃ LỌC:\n\n";
                let coKetQua = false;

                for (let i = 0; i < danhSachCongViec.length; i++) {
      if (danhSachCongViec[i].trangThai === trangThaiLoc) {
                    let cv = danhSachCongViec[i];
                ketQua += `ID: ${cv.id}\nTên: ${cv.ten}\nMô tả: ${cv.moTa}\nTrạng thái: ${cv.trangThai}\n\n`;
                coKetQua = true;
      }
    }

                if (!coKetQua) {
                    alert("📭 Không có công việc nào phù hợp.");
    } else {
                    alert(ketQua);
    }
  }

                function sapXepTheoTrangThai() {
                    danhSachCongViec.sort(function (a, b) {
                        if (a.trangThai < b.trangThai) return -1;
                        if (a.trangThai > b.trangThai) return 1;
                        return 0;
                    });

                alert(" Đã sắp xếp công việc theo trạng thái.");
                hienThiCongViec();
  }

                function menu() {
                    let luaChon;
                do {
                    luaChon = prompt(
                        "===== MENU QUẢN LÝ CÔNG VIỆC =====\n" +
                        "1. Thêm công việc\n" +
                        "2. Hiển thị tất cả công việc\n" +
                        "3. Cập nhật trạng thái công việc theo ID\n" +
                        "4. Lọc công việc theo trạng thái\n" +
                        "5. Sắp xếp công việc theo trạng thái\n" +
                        "6. Thoát\n" +
                        " Nhập lựa chọn (1-6):"
                    );

                switch (luaChon) {
        case "1":
                themCongViec();
                break;
                case "2":
                hienThiCongViec();
                break;
                case "3":
                capNhatTrangThai();
                break;
                case "4":
                locTheoTrangThai();
                break;
                case "5":
                sapXepTheoTrangThai();
                break;
                case "6":
                alert("Tạm biệt!");
                break;
                default:
                alert(" Lựa chọn không hợp lệ!");
      }
    } while (luaChon !== "6");
  }

                menu();