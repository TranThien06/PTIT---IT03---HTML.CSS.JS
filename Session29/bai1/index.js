
let contacts = [];


function addContact() {
    let idInput = prompt("Nhập ID (số nguyên):");
    
    if (idInput === null || isNaN(idInput)) { // Kiểm tra ID có phải là số nguyên không
        alert("ID không hợp lệ.");
        return;
    }
    let id = Number(idInput);
    
    if (contacts.find(contact => contact.id === id)) { // Kiểm tra ID đã tồn tại chưa
        alert("ID đã tồn tại! Vui lòng nhập ID khác."); 
        return;
    }
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

 
    const contact = { id, name, email, phone }; // Tạo đối tượng contact mới
    contacts.push(contact);
    alert("Thêm liên hệ thành công!");
}

//hàm hiển thị danh bạ
function displayContacts() {
    if (contacts.length === 0) {
        alert("Danh bạ trống.");
        return;
    }
    let output = "Danh bạ:\n";
    contacts.forEach(contact => {
        output += `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
    });
    alert(output);
}

//hàm tìm kiếm thông tin Contact theo số điện thoại
function searchContactByPhone() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    if (phone === null || phone.trim() === "") {
        alert("Số điện thoại không được để trống.");
        return;
    }
    const foundContacts = contacts.filter(contact => contact.phone === phone.trim());
    if (foundContacts.length === 0) {
        alert("Không tìm thấy liên hệ với số điện thoại này.");
    } else {
        let output = "Kết quả tìm kiếm:\n";
        foundContacts.forEach(contact => {
            output += `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
        });
        alert(output);
    }
}

// Hàm cập nhật thông tin Contact theo id
function updateContact() {
    let idInput = prompt("Nhập ID của liên hệ cần cập nhật:");
    if (idInput === null || isNaN(idInput)) {
        alert("ID không hợp lệ.");
        return;
    }
    let id = Number(idInput);
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) {
        alert("Không tìm thấy liên hệ với ID này.");
        return;
    }
    // Các trường nhập có sẵn giá trị hiện tại (để tham khảo)
    let newName = prompt("Nhập tên mới (nhấn Enter nếu không muốn cập nhật):", contact.name);
    let newEmail = prompt("Nhập email mới (nhấn Enter nếu không muốn cập nhật):", contact.email);
    let newPhone = prompt("Nhập số điện thoại mới (nhấn Enter nếu không muốn cập nhật):", contact.phone);

    // Cập nhật nếu có thay đổi
    if (newName !== null && newName.trim() !== "") {
        contact.name = newName;
    }
    if (newEmail !== null && newEmail.trim() !== "") {
        contact.email = newEmail;
    }
    if (newPhone !== null && newPhone.trim() !== "") {
        contact.phone = newPhone;
    }
    alert("Cập nhật liên hệ thành công!");
}

// Hàm xóa một đối tượng Contact theo id
function deleteContact() {
    let idInput = prompt("Nhập ID của liên hệ cần xóa:");
    if (idInput === null || isNaN(idInput)) {
        alert("ID không hợp lệ.");
        return;
    }
    let id = Number(idInput);
    const index = contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
        alert("Không tìm thấy liên hệ với ID này.");
    } else {
        contacts.splice(index, 1);
        alert("Xóa liên hệ thành công!");
    }
}

//hàm hiển thị menu và chọn chức năng
function menu() {
    let choice;
    do {
        choice = prompt(
`===========QUẢN LÝ DANH BẠ ===========
1. Thêm liên hệ.
2. Hiển thị danh bạ.
3. Tìm kiếm liên hệ theo số điện thoại.
4. Cập nhật liên hệ theo ID.
5. Xóa liên hệ theo ID.
6. Thoát.
===================================`
        );

        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                displayContacts();
                break;
            case "3":
                searchContactByPhone();
                break;
            case "4":
                updateContact();
                break;
            case "5":
                deleteContact();
                break;
            case "6":
                alert("Chương trình kết thúc!");
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 6.");
        }
    } while (choice !== "6");
}

menu();