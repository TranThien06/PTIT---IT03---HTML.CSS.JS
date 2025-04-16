
    const registeredUsers = [
    {email: "user@example.com", password: "123456" },
    {email: "admin@example.com", password: "admin123" }
    ];

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

            const user = registeredUsers.find(u => u.email === email && u.password === password);

    const message = document.getElementById("message");

    if (!email || !password) {
        message.innerText = "Vui lòng nhập đầy đủ Email và Mật khẩu.";
            } else if (!user) {
        message.innerText = "Email hoặc Mật khẩu không đúng.";
            } else {
        // Đăng nhập thành công
        window.location.href = "homepage.html";
            }
        });
