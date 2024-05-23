let todoList = [];

let  addTask = (task, startDate, endDate) => {
    todoList.push({ task, startDate, endDate });
};

let  editTask = (index, task, startDate, endDate) => {
    if (index >= 0 && index < todoList.length) {
        todoList[index] = { task, startDate, endDate };
    }
};

let listTasks = () => {
    todoList.forEach((item, index) => {
        console.log(`Task: ${index + 1}: ${item.task} (Start Date: ${item.startDate}, End Date: ${item.endDate })`);
    });
};

let deleteTask = (index) => {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
    }
};


addTask('Complete JavaScript project', '2024-05-13', '2024-05-15');
addTask('Study for exam', '2024-05-16', '2024-05-18');
listTasks(); 

editTask(0, 'Update CSS styles', '2024-05-14', '2024-05-16');
listTasks(); 

deleteTask(1);
listTasks(); 