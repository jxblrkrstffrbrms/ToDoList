document.addEventListener("DOMContentLoaded", function () {
    // Type assertions for DOM elements
    var userInput = document.getElementById("userInput");
    var newBtn = document.getElementById("newBtn");
    var taskList = document.getElementById("taskList");
    var filterInput = document.getElementById("filterInput");
    var newTasks = JSON.parse(localStorage.getItem("toDoList") || "[]");
    function main(filterValue) {
        if (filterValue === void 0) { filterValue = ""; }
        localStorage.setItem("toDoList", JSON.stringify(newTasks));
        taskList.innerHTML = "";
        var filteredTasks = newTasks.filter(function (task) {
            return task.taskInput.toLowerCase().includes(filterValue.toLowerCase());
        });
        filteredTasks.forEach(function (task) {
            var li = document.createElement("li");
            li.textContent = task.taskInput;
            taskList.appendChild(li);
        });
    }
    newBtn.onclick = function () {
        if (userInput.value.trim()) {
            newTasks.push({ taskInput: userInput.value.trim() });
            main();
            userInput.value = "";
        }
    };
    // Add filter input event listener
    filterInput.addEventListener("input", function (e) {
        var target = e.target;
        main(target.value);
    });
    main();
});
