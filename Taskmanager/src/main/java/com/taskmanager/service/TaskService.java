package com.taskmanager.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.taskmanager.dto.TaskDto;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public Task createTask(TaskDto dto, String email) {
        User user = userRepository.findByEmail(email).orElseThrow();

        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setStatus(dto.getStatus());
        task.setUser(user);

        return taskRepository.save(task);
    }
    public Task getTaskById(Long id, String email) {
        Task task = taskRepository.findById(id).orElseThrow();

        if (!task.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized");
        }

        return task;
    }
    public Task updateTask(Long id, TaskDto dto, String email) {
        Task task = taskRepository.findById(id).orElseThrow();

        if (!task.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized");
        }

        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setStatus(dto.getStatus());

        return taskRepository.save(task);
    }
    public void deleteTask(Long id, String email) {
        Task task = taskRepository.findById(id).orElseThrow();

        if (!task.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized");
        }

        taskRepository.delete(task);
        System.out.println("Logged in user: " + email);
        System.out.println("Task owner: " + task.getUser().getEmail());
    }

    public List<Task> getTasks(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        return taskRepository.findByUser(user);
    }
}
