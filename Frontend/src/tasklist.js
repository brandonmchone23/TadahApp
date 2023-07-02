document.addEventListener("DOMContentLoaded", function() {

    // Get the child's username from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const childUsername = urlParams.get('child');

    // Update the <span> element with the child's username
    const childUsernameElement = document.getElementById('child-username');
    childUsernameElement.textContent = childUsername;

    // Code to be executed when the DOM is fully loaded

    document.getElementById("addBtn").addEventListener("click", addTaskElement);
    document.getElementById("myInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTaskElement();
        }
    });

    // Define a counter variable to keep track of the task ID
    var taskIdCounter = 1;

    function addTaskElement() {
        var inputValue = document.getElementById("myInput").value.trim();
        if (inputValue === '') {
            return; // Exit the function if the input is empty
        }

        // Create task elements
        var table = document.getElementById("myTable");
        if (!table) {
            // Create the table structure if it doesn't exist
            table = document.createElement("table");
            table.id = "myTable";
            table.className = "task-table";
            var headerRow = document.createElement("tr");
            var idHeader = document.createElement("th");
            idHeader.textContent = "Task ID";
            headerRow.appendChild(idHeader);
            var titleHeader = document.createElement("th");
            titleHeader.textContent = "Task Title";
            headerRow.appendChild(titleHeader);
            var buttonsHeader = document.createElement("th");
            buttonsHeader.textContent = "Actions";
            headerRow.appendChild(buttonsHeader);
            table.appendChild(headerRow);
            document.getElementById("myDIV").appendChild(table);
        }

        // Create task row
        var newRow = document.createElement("tr");
        newRow.className = "task-row";

        // Create task ID cell
        var taskIdCell = document.createElement("td");
        taskIdCell.className = "task-id";
        taskIdCell.textContent = "Task ID: " + taskIdCounter; // Assign the task ID

        // Create task title cell
        var taskTitleCell = document.createElement("td");
        taskTitleCell.className = "task-title";
        taskTitleCell.textContent = inputValue;

        // Create buttons cell
        var buttonsCell = document.createElement("td");
        buttonsCell.className = "task-buttons";

        // Create complete button
        var completeButton = document.createElement("button");
        completeButton.id = "markCompleteButton" + taskIdCounter;
        completeButton.className = "task-button complete";
        completeButton.addEventListener("click", function() {
            newRow.remove();
            showGoodJobPopup();
        });
        var completeIcon = document.createElement("span");
        completeIcon.className = "material-icons";
        completeIcon.textContent = "check";
        completeButton.appendChild(completeIcon);

        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton" + taskIdCounter;
        deleteButton.className = "task-button delete";
        deleteButton.addEventListener("click", function() {
            newRow.remove();
            playThrowawaySound();
        });
        var deleteIcon = document.createElement("span");
        deleteIcon.className = "material-icons";
        deleteIcon.textContent = "delete";
        deleteButton.appendChild(deleteIcon);

        // Append elements to their respective parents
        newRow.appendChild(taskIdCell);
        newRow.appendChild(taskTitleCell);
        buttonsCell.appendChild(completeButton);
        buttonsCell.appendChild(deleteButton);
        newRow.appendChild(buttonsCell);
        table.appendChild(newRow);

        // Clear input value
        document.getElementById("myInput").value = "";

        // Increment the task ID counter for the next task
        taskIdCounter++;

        // Play task added sound
        playTaskAddedSound();
    }




    function showGoodJobPopup() {
        var popup = document.getElementById("goodJobPopup");
        popup.style.display = "block";

        // Play the Tada sound
        var audio = new Audio("/audio/Tada-sound.mp3");
        audio.play();

        setTimeout(function () {
            popup.style.display = "none";
        }, 3000);
    }

    function playThrowawaySound() {
        var audio = new Audio("/audio/throwawaytask.mp3");
        audio.play();
    }

    function playTaskAddedSound() {
        return new Promise(function(resolve, reject) {
            var audio = new Audio("/audio/taskadded.mp3");
            audio.addEventListener("ended", function() {
                resolve();
            });
            audio.addEventListener("error", function() {
                reject(new Error("Failed to play taskadded sound"));
            });
            audio.play();
        });
    }


    function getTasksByChildId(childId) {
        return fetch(`/tasks/child/${childId}`)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching tasks by child ID:', error);
                throw error;
            });
    }

    // Function to create a new task
    function createTask(taskData) {
        return fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(response => response.json())
            .catch(error => {
                console.error('Error creating task:', error);
                throw error;
            });
    }

    // Function to update an existing task
    function updateTask(taskId, taskData) {
        return fetch(`/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(response => response.json())
            .catch(error => {
                console.error('Error updating task:', error);
                throw error;
            });
    }

    // Function to delete a task
    function deleteTask(taskId) {
        return fetch(`/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error deleting task');
                }
            })
            .catch(error => {
                console.error('Error deleting task:', error);
                throw error;
            });
    }
});
