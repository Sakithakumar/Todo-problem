let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span contenteditable="true" onblur="updateTask(${index}, this.innerText)">${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();
    
    if (newTask) {
        tasks.push(newTask);
        newTaskInput.value = ''; 
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks();
}

function updateTask(index, newText) {
    tasks[index] = newText.trim(); 
}

renderTasks();
