// Define interface for task structure
interface Task {
    taskInput: string;
}

document.addEventListener("DOMContentLoaded", () => {
    
    const userInput = document.getElementById("userInput") as HTMLInputElement;
    const newBtn = document.getElementById("newBtn") as HTMLButtonElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;
    const filterInput = document.getElementById("filterInput") as HTMLInputElement;

    let newTasks: Task[] = JSON.parse(localStorage.getItem("toDoList") || "[]");

    function main(filterValue: string = "") {
        localStorage.setItem("toDoList", JSON.stringify(newTasks));
        taskList.innerHTML = "";
        
        const filteredTasks = newTasks.filter(task => 
            task.taskInput.toLowerCase().includes(filterValue.toLowerCase())
        );

        filteredTasks.forEach((task) => {
            let li = document.createElement("li");
            li.textContent = task.taskInput;
            taskList.appendChild(li);
        });
    }

    newBtn.onclick = () => {
        if (userInput.value.trim()) {
            newTasks.push({ taskInput: userInput.value.trim() });
            main();
            userInput.value = "";
        }
    };

    // New event listener for filter input  
    filterInput.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        main(target.value);
    });

    main();
});