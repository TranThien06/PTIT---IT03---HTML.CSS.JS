function checkEmail() {
    //lấy giá trị email từ input
    const email = document.getElementById("emailInput").value.trim();
    const resultDiv = document.getElementById("result");
    //danh sách đuôi miền hợp lệ
    const validDomains = [".com", ".vn"];
    //kiểm tra định dạng email
    if (email.includes("@") && validDomains.some(domain => email.endsWith(domain))) {
        resultDiv.textContent = "email hợp lệ!";
        resultDiv.className = "result valid";
    } else {
        resultDiv.textContent = "email không hợp lệ!";
        resultDiv.className = "result invalid";
    }
}