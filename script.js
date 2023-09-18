document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("categorySelect");
    const prioritySelect = document.getElementById("prioritySelect");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        const category = categorySelect.value;
        const priority = prioritySelect.value;

        if (taskText.trim() !== "") {
            createTask(taskText, category, priority);
            taskInput.value = "";
        }
    });

    function createTask(text, category, priority) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <span>${text}</span>
            <span>Category: ${category}</span>
            <span>Priority: ${priority}</span>
            <span class="delete">Delete</span>
        `;

        taskList.appendChild(taskElement);

        const deleteButton = taskElement.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskElement.remove();
        });
    }
});
