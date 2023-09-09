# ATA-Learn-And-Be-Curious-Project

### Project Name
Learn and Be Curious Project Design Planning

### Table of Contents
- [Problem Statement](#problem-statement)
- [User Stories](#user-stories)
- [Project Scope and MVP](#project-scope-and-mvp)
- [Proposed Architecture Overview](#proposed-architecture-overview)
- [API Design](#api-design)
- [Models](#models)
- [Endpoints](#endpoints)
- [Tables](#tables)
- [Pages](#pages)
- [Technical Tasks Overview](#technical-tasks-overview)
- [Top Questions to Resolve](#top-questions-to-resolve)
- [Team Members](#team-members)

### Problem Statement
Parents are struggling to motivate and involve their children in completing assigned tasks at home. The current challenge lies in finding an effective way to engage children in activities that are not directly related to their interests. There is a need for a simple and effective solution that provides the necessary encouragement for children to willingly participate in these tasks. Our application provides a way for parents to quickly assign a list of to-do items to a child and have the child receive a merit reward upon completion of the assigned task. This design document describes the TaDah List application, a new to-do list app for children, designed to foster creativity and provide a reward mechanism.

### User Stories
- As a parent, I want to be able to add new to-do items to my child’s to-do list.
- As a parent, I want to be able to delete to-do items from my child’s to-do list.
- As a child, I want to be able to view the to-do items that have been added to my list.
- As a child, I want to be able to mark to-do items as completed and receive a merit reward.
- As a parent, I want to be able to sort my child’s to-do list items by priority.
- As a parent, I want to be able to set a reward once a specific to-do list item has been completed.
- As a parent, I want to be able to retrieve tasks that have been completed.
- As a parent, I want to be able to retrieve tasks that are still outstanding (not completed).
- As a parent, I want to be able to view and/or delete items that my child has added to their own to-do list.

### Project Scope and MVP
**MVP**  
Our minimum viable product is an application to add new to-do list items, retrieve a list of to-do list items, and mark to-do list items as completed or delete a task from a todo list. Our app will meet the following use cases:
- As a parent, I want to be able to add new to-do items to my child’s to-do list.
- As a parent, I want to be able to delete to-do items from my child’s to-do list.
- As a child, I want to be able to view the to-do items that have been added to my list.
- As a child, I want to be able to mark to-do items as completed and receive a merit reward.

**In Scope**
- Adding a new to-do list item
- Deleting to-do list items
- Viewing the to-do list assigned to a child
- Updating a to-do list item or items as completed

**Out of Scope**
- Setting an alarm as a reminder of a to-do list item yet to be completed
- Setting an option to allow a child to view a daily quote on the Ta Dah List app
- Setting a due date for a to-do list item to be completed by

### Proposed Architecture Overview
This initial iteration will provide the minimum viable product (MVP), including the creation of new tasks, retrieval of a list of tasks or a task, updating a task, and deleting a task. We will use the Spring framework to create four endpoints (GetTodoTask, CreateToDoTask, UpdateTodoTask, and DeleteTodoTask) that will handle the creation, update, and deletion of tasks to satisfy our requirements. We will store tasks in a table in DynamoDB Table.

### API Design
#### Models
- **TaDahList:** Represents a single TaDah list, including attributes like ID, title, and a collection of tasks.
- **Task:** Represents an individual task within a TaDah list, including attributes like ID, description, completion status, and due date.
- **CreateTaDahListRequest:** Request payload for creating a new TaDah list, including attributes like a title and an optional set of tasks.
- **UpdateTaDahListRequest:** Request payload for updating an existing TaDah list, including attributes like a TaDah list ID, a new title, and an optional set of updated tasks.
- **ViewTaDahListResponse:** Response payload for viewing a TaDah list, including attributes like a TaDah list ID, a title, and a collection of tasks.
- **DeleteTaDahList:** Response payload for deleting a task. Returns a 204 if successful and removes the task from the list.

#### Endpoints
- **Create a Task**
  - Endpoint: POST/tasks
  - Description: Creates a task for the child
- **Update a Task**
  - Endpoint: PUT/tasks/{task_id}
  - Description: Updates an existing task
- **Get All Tasks for a Child**
  - Endpoint: GET/child/{child_id}/tasks
  - Description: Retrieves all tasks for a specific child
- **Delete a Task**
  - Endpoint: DELETE/tasks/{task_id}
  - Description: Delete a specific task

### Tables
#### Task Table
- **taskId:** Partition key (String)
- **taskDescription:** String
- **taskTitle:** String
- **isCompleted:** Boolean
- **childId:** String
- **isParent:** Boolean
- **isChild:** Boolean

### Pages
- **Homepage:** Main entry point with user profile and TaDah lists.
- **Child Profile:** Profile view for each child, showing assigned tasks and progress.
- **Add Task:** Page for parents to add new tasks to a child's TaDah list.
- **Edit Task:** Page for parents to edit existing tasks in a child's TaDah list.

### Technical Tasks Overview
- Set up the development environment.
- Design and implement data models.
- Implement API endpoints.
- Implement data persistence

.
- Implement business logic.
- Implement user authentication and authorization.
- Test, debug, and resolve issues.
- Document and deploy the application.
- Continuously maintain and improve the application.

### Top Questions to Resolve
- How will multiple users and profiles be handled, especially if a user has more than one child?
- Will child users have their own profiles and logins if allowed to edit tasks?

### Team Members
- Rebecca Harris - Scrum Master/Software Engineer
- Shawna Banks - Project Manager/Software Engineer
- Monique McQueen - Lead Software Engineer
- Brandon Mchone - Lead Software Engineer
