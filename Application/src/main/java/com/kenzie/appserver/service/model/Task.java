package com.kenzie.appserver.service.model;

import java.util.UUID;

public class Task {
    private UUID taskId;
    private boolean isCompleted ;

    private String taskTitle;


    // constructor
    public Task(UUID taskId, String taskTitle, boolean isCompleted){
        this.taskId = taskId;
        //this.taskDescription = taskDescription;
        this.taskTitle = taskTitle;
        // tasks are not completed by default because they are being made-monique
        // it should be set to false here, correct? instead of this.completed = completed
        // this.completed = false,right?? or no?
        this.isCompleted = false;
        //updated constructor to take in changed to boolean default - rebecca
    }

    public UUID getTaskId() {
        return taskId;
    }

    public void setTaskId(UUID taskId) {
        this.taskId = taskId;
    }

//    public String getTaskDescription() {
//        return taskDescription;
//    } dont know if needed- rebecca

//    public void setTaskDescription(String taskDescription) {
//        this.taskDescription = taskDescription;
//    } dont know if needed- rebecca

    public String getTaskTitle() {
        return taskTitle;
    }

    public void setTaskTitle(String taskTitle) {
        this.taskTitle = taskTitle;
    }
    public Boolean getIsCompleted() {

        return isCompleted;
    }

    public void setIsCompleted(Boolean isCompleted) {
        this.isCompleted = isCompleted;
    }


    @Override
    public String toString() {
        return "TaDahTask{" +
                "taskId='" + taskId + '\'' +
                ", taskTitle='" + taskTitle + '\'' +
                ", isCompleted=" + isCompleted +
                '}';

        //", taskDescription='" + taskDescription + '\'' ",
    }
}
