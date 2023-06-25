import TaskController from "../controllers/TaskController";

class MarkTaskAsCompletedPage extends BaseClass {
    constructor() {
        super();
        this.bindClassMethods(['onMarkCompleted']);
        this.taskController = new TaskController();
    }

    async mount() {
        document.getElementById('mark-completed-button').addEventListener('click', this.onMarkCompleted);
        // Other setup code
    }

    async onMarkCompleted(event) {
        event.preventDefault();
        const taskId = document.getElementById("task-id").value;

        // Update the completion status of the task
        const updatedTask = await this.taskController.updateTask(taskId, { completed: true });

        if (updatedTask) {
            // Update the UI or perform other actions
            this.showMessage("Marked task as completed!");
        } else {
            this.errorHandler("Error marking task as completed. Please try again.");
        }
    }
}

// Usage example
const markTaskPage = new MarkTaskAsCompletedPage();
markTaskPage.mount();
