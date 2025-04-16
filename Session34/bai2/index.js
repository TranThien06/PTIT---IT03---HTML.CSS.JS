//khởi tạo mảng tasks từ Local Storage hoặc mảng rỗng nếu chưa có
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//hàm để lưu dữ liệu vào Local Storage
function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// hàm để hiển thị danh sách công việc
function renderTasks() {
    const taskBody = document.getElementById('taskBody');
    taskBody.innerHTML = '';// xóa nội dung cũ trước khi thêm mới
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editTask(${index})">Sửa</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${index})">Xóa</button>
            </td>
        `;
        taskBody.appendChild(row);
    });
}

// hàm thêm coong việc
function addTask() {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;

    if (content && dueDate && status && assignedTo) {
        const newTask = {
            id: tasks.length + 1,
            content,
            dueDate,
            status,
            assignedTo
        };
        tasks.push(newTask);
        saveToLocalStorage();
        renderTasks();
        //reset form
        document.getElementById('content').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('status').value = '';
        document.getElementById('assignedTo').value = '';
    } else {
        alert('Please fill in all fields!');
    }
}

//hàm xóa công việc
function deleteTask(index) {
    tasks.splice(index, 1);
    saveToLocalStorage();
    renderTasks();
}

//hàm chỉnh sửa công việc
function editTask(index) {
    const task = tasks[index];
    const newContent = prompt('Edit content:', task.content);
    const newDueDate = prompt('Edit due date (YYYY-MM-DD):', task.dueDate);
    const newStatus = prompt('Edit status (PENDING/COMPLETED):', task.status);
    const newAssignedTo = prompt('Edit assigned to:', task.assignedTo);

    if (newContent && newDueDate && newStatus && newAssignedTo) {
        tasks[index] = {
            id: task.id,
            content: newContent,
            dueDate: newDueDate,
            status: newStatus,
            assignedTo: newAssignedTo
        };
        saveToLocalStorage();
        renderTasks();
    }
}

//hiển thị danh sách công việc khi tải trang
renderTasks();