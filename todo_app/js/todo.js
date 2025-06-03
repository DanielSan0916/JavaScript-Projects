document.addEventListener("DOMContentLoaded", () => {
  // Select key elements from the DOM
  const taskInput = document.getElementById("task");   // User's task input field
  const addButton = document.getElementById("add");   // Button to add tasks
  const todoList = document.getElementById("todo-list"); // Container for task list

  // Function to add a new task to the list
  function addTask() {
    const taskText = taskInput.value.trim(); // Trim spaces from input
    if (taskText === "") return; // Prevent adding empty tasks

    // Create a new task element
    const taskItem = document.createElement("div");
    taskItem.textContent = taskText; // Set text content from input

    // Create a delete button for task removal
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";  // Assign delete icon
    deleteButton.style.marginLeft = "10px"; // Add spacing
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(taskItem); // Remove task when clicked
    });

    // Append delete button to task item
    taskItem.appendChild(deleteButton);
    todoList.appendChild(taskItem); // Add task to the list
    taskInput.value = ""; // Clear input field after adding task
  }

  // Event listener for "Add" button click to trigger task addition
  addButton.addEventListener("click", addTask);

  // Event listener for pressing "Enter" in the input field to add a task
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask(); // Add task when Enter key is pressed
  });
});