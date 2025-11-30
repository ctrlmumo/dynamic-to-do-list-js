// Ensure the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
    
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
    
        // Create list item
        const li = document.createElement('li');
    
        // Create a text node for the task
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);
    
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn"); 
    
        // Remove task on button click
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };
    
        // Append button to list item
        li.appendChild(removeBtn);
    
        // Append list item to task list
        taskList.appendChild(li);
    
        // Clear input
        taskInput.value = "";
    }
    

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
