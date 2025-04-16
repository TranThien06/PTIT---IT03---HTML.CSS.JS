
document.addEventListener('DOMContentLoaded', loadTasks);


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }

    
    let tasks = getTasksFromLocalStorage();

  
    tasks.push(taskText);

  
    localStorage.setItem('tasks', JSON.stringify(tasks));

  
    taskInput.value = '';

  
    loadTasks();
}


function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    let tasks = getTasksFromLocalStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function deleteTask(index) {
    let tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); 
}