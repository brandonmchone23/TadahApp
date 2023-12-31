package com.kenzie.appserver.controller.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kenzie.appserver.service.model.Child;
import org.springframework.http.HttpStatus;

import java.util.List;

public class ParentUserLoginResponse {
    @JsonProperty("parentId")
    private String parentId;
    @JsonProperty("parentUsername")
    private String parentUsername;

    //whats in this list? child usernames or child ids
    //are the tasks tied to each child
    @JsonProperty("childUsername")
    private String childUsername;

    public String getChildUsername() {
        return childUsername;
    }


    public void setChildUsername(String childUsername) {
        this.childUsername = childUsername;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getParentUsername() {
        return parentUsername;
    }

    public void setParentUsername(String parentUsername) {
        this.parentUsername = parentUsername;
    }
}
