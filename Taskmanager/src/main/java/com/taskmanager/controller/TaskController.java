package com.taskmanager.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanager.dto.TaskDto;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;
import com.taskmanager.service.TaskService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    // CREATE
    @PostMapping
    public Task create(@Valid @RequestBody TaskDto dto, Principal principal) {
        return taskService.createTask(dto, principal.getName());
    }

    // GET ALL
    @GetMapping
    public List<Task> get(Principal principal) {
        return taskService.getTasks(principal.getName());
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Task getById(@PathVariable Long id, Principal principal) {
        return taskService.getTaskById(id, principal.getName());
    }

    // UPDATE
    @PutMapping("/{id}")
    public Task update(@PathVariable Long id,
                       @RequestBody TaskDto dto,
                       Principal principal) {
        return taskService.updateTask(id, dto, principal.getName());
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id, Principal principal) {
        taskService.deleteTask(id, principal.getName());
        return "Task deleted successfully";
    }
}