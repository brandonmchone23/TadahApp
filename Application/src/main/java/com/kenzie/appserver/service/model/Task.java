package com.kenzie.appserver.service.model;

public class Task {
    private String taskId;
    private Boolean isCompleted;

   // private String taskDescription; is a description section apart of the program design - rebecca
    // I believe it is from our diagram, i think- monique
    private String taskTitle;


    // constructor
    public Task( String taskId, String taskTitle, Boolean completed){
        this.taskId = taskId;
        //this.taskDescription = taskDescription;
        this.taskTitle = taskTitle;
        // tasks are not completed by default because they are being made-monique
        // it should be set to false here, correct? instead of this.completed = completed
        // this.completed = false,right?? or no?
        this.isCompleted = completed;
        //updated constructor to take in changed to boolean default - rebecca
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
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

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        this.isCompleted = completed;
    }


    @Override
    public String toString() {
        return "TaDahTask{" +
                "taskId='" + taskId + '\'' +
                ", taskTitle='" + taskTitle + '\'' +
                ", completed=" + isCompleted +
                '}';

        //", taskDescription='" + taskDescription + '\'' ",
    }
}