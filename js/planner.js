const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
});

clearButton.addEventListener("click", function () {
    taskInput.value = "";
});