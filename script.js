document.addEventListener("DOMContentLoaded", () => {
const userInput = document.getElementById("userInput");
const newBtn = document.getElementById("newBtn");
const taskList = document.getElementById("taskList");

    let newTasks = JSON.parse(localStorage.getItem("toDoList")) || [];

    function main() {
        localStorage.setItem("toDoList", JSON.stringify(newTasks));
        taskList.innerHTML = "";
        
        newTasks.forEach((task, i) => {
            let li = document.createElement("li");
            li.textContent = task.taskInput;
            taskList.appendChild(li);
        });
    }

    newBtn.onclick =() => {
        if (userInput.value.trim()) {
            newTasks.push({ taskInput: userInput.value.trim(), done: false });
            main();
            userInput.value = "";
        }
    };

    main();
});