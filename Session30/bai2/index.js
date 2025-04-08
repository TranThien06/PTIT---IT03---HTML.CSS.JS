
// Bài 2: Quản lý sách trong thư viện
                let danhSachSach = [
                {ma: 1, ten: "Lập trình JavaScript", gia: 120000, soLuong: 10, theLoai: "Lập trình" },
                {ma: 2, ten: "Tâm lý học tội phạm", gia: 90000, soLuong: 5, theLoai: "Tâm lý" },
                {ma: 3, ten: "Harry Potter", gia: 150000, soLuong: 8, theLoai: "Tiểu thuyết" },
                ];

                let gioHang = [];

                function hienThiSachTheoTheLoai() {
                    let theLoai = prompt("Nhập tên thể loại cần tìm:");
      let ketQua = danhSachSach.filter(s => s.theLoai.toLowerCase() === theLoai.toLowerCase());
                if (ketQua.length === 0) {
                    alert("Không có sách thuộc thể loại này.");
      } else {
                    alert(JSON.stringify(ketQua, null, 2));
      }
    }

                function themSachMoi() {
                    let ma = parseInt(prompt("Nhập mã sách:"));
                let ten = prompt("Nhập tên sách:");
                let gia = parseFloat(prompt("Nhập giá sách:"));
                let soLuong = parseInt(prompt("Nhập số lượng:"));
                let theLoai = prompt("Nhập thể loại:");
                danhSachSach.push({ma, ten, gia, soLuong, theLoai});
                alert(" Đã thêm sách mới.");
    }

                function timKiemSach() {
                    let tuKhoa = prompt("Nhập tên hoặc mã sách cần tìm:");
                let ketQua = danhSachSach.filter(
        s => s.ten.toLowerCase().includes(tuKhoa.toLowerCase()) || s.ma.toString() === tuKhoa
                );
                if (ketQua.length === 0) {
                    alert(" Không tìm thấy sách.");
      } else {
                    alert(JSON.stringify(ketQua, null, 2));
      }
    }

                function muaSach() {
                    let ma = parseInt(prompt("Nhập mã sách muốn mua:"));
                let soLuongMua = parseInt(prompt("Nhập số lượng muốn mua:"));
      let sach = danhSachSach.find(s => s.ma === ma);

                if (!sach) {
                    alert("Không tìm thấy sách.");
                return;
      }

                if (sach.soLuong < soLuongMua) {
                    alert(" Không đủ sách trong kho.");
                return;
      }

                sach.soLuong -= soLuongMua;

      let trongGio = gioHang.find(item => item.ma === ma);
                if (trongGio) {
                    trongGio.soLuong += soLuongMua;
      } else {
                    gioHang.push({ ...sach, soLuong: soLuongMua });
      }

                alert(" Đã thêm vào giỏ hàng.");
    }

                function sapXepTheoGia(tangDan = true) {
                    let ketQua = [...danhSachSach].sort((a, b) => tangDan ? a.gia - b.gia : b.gia - a.gia);
                alert(JSON.stringify(ketQua, null, 2));
    }

                function thongKeGioHang() {
                    let tongSoLuong = 0;
                let tongTien = 0;

      gioHang.forEach(s => {
                    tongSoLuong += s.soLuong;
                tongTien += s.soLuong * s.gia;
      });

                alert(`Tổng số lượng sách đã mua: ${tongSoLuong}\nTổng tiền: ${tongTien.toLocaleString()} VND`);
    }

                function tongSachTrongKho() {
                    let tong = danhSachSach.reduce((sum, s) => sum + s.soLuong, 0);
                alert(` Tổng số lượng sách trong kho: ${tong}`);
    }

                function menuChinh() {
      while (true) {
                    let luaChon = prompt(
                `=== MENU QUẢN LÝ SÁCH ===
                1. Hiển thị sách theo thể loại
                2. Thêm sách mới vào kho
                3. Tìm kiếm sách theo tên hoặc mã
                4. Mua sách
                5. Sắp xếp sách theo giá tăng dần
                6. Sắp xếp sách theo giá giảm dần
                7. Thống kê giỏ hàng
                8. Tổng số sách trong kho
                0. Thoát chương trình
==========================
                 Nhập lựa chọn của bạn:`);

                switch (luaChon) {
          case "1":
                hienThiSachTheoTheLoai(); break;
                case "2":
                themSachMoi(); break;
                case "3":
                timKiemSach(); break;
                case "4":
                muaSach(); break;
                case "5":
                sapXepTheoGia(true); break;
                case "6":
                sapXepTheoGia(false); break;
                case "7":
                thongKeGioHang(); break;
                case "8":
                tongSachTrongKho(); break;
                case "0":
                alert("Tạm biệt!");
                return;
                default:
                alert("Lựa chọn không hợp lệ!");
        }
      }
    }

                menuChinh();
           