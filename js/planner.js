const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");

function saveTask() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    const status = document.createElement("span");
    status.textContent = "";

    completeButton.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
        saveTask();

        if (taskSpan.classList.contains("completed")) {
            status.textContent = "Completed";
            status.classList.add("status-completed");
        } else {
            status.textContent = "";
        }
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        saveTask();
    });

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.appendChild(status);

    taskList.appendChild(li);
    saveTask();
    taskInput.value = "";
});

clearButton.addEventListener("click", function () {
    taskInput.value = "";
});

window.addEventListener("load", function () {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
});