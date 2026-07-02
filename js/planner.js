const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");

let tasks = [];
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;

    if (task.completed) {
        taskSpan.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    const status = document.createElement("span");
    if (task.completed) {
        status.textContent = "Completed";
        status.classList.add("status-completed");
    }

    completeButton.addEventListener("click", function () {
        task.completed = !task.completed;
        taskSpan.classList.toggle("completed");

        if (task.completed) {
            status.textContent = "Completed";
            status.classList.add("status-completed");
        } else {
            status.textContent = "";
        }

        saveTasks(tasks);
    });

    deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(function (t) {
            return t !== task;
        });

        li.remove();

        saveTasks(tasks);
    });

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.appendChild(status);

    taskList.appendChild(li);
}

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTask(task);
    saveTasks(tasks);

    taskInput.value = "";
});

clearButton.addEventListener("click", function () {
    taskInput.value = "";
});

window.addEventListener("load", function () {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);

        tasks.forEach(function (task) {
            renderTask(task);
        });
    }
});