document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageDiv = document.getElementById("message");

    // Reset message
    messageDiv.textContent = "";
    messageDiv.style.color = "red";

    //kiểm tra rỗng
    if (!email || !password || !confirmPassword) {
        messageDiv.textContent = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    //kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        messageDiv.textContent = "Mật khẩu xác nhận không khớp.";
        return;
    }

    //lấy danh sách người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //kiểm tra email đã tồn tại
    if (users.some(user => user.email === email)) {
        messageDiv.textContent = "Email đã tồn tại!";
        return;
    }

    //thêm người dùng mới
    users.push({ email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));


    messageDiv.textContent = "Đăng ký thành công!";
    messageDiv.style.color = "green";

 
    document.getElementById("registerForm").reset();
});
