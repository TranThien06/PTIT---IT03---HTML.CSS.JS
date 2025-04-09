function addSubject() {
    const input = document.getElementById("subjectInput");
    const subjectName = input.value.trim();
    const list = document.getElementById("subjectList");

    if (subjectName === "") {
        alert("tên môn học không được để trống!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = subjectName;
    list.appendChild(li);

    input.value = ""; 
}