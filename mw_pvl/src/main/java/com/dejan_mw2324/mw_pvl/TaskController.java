package com.dejan_mw2324.mw_pvl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/{taskId}")
    public Task getTaskById(@PathVariable Long taskId) {
        return taskRepository.findById(taskId).orElse(null);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @PutMapping("/{taskId}")
    public Task updateTask(@PathVariable Long taskId, @RequestBody Task updatedTask) {
        Task existingTask = taskRepository.findById(taskId).orElse(null);
        if (existingTask != null) {
            // Update properties of the existing task
            existingTask.setTaskName(updatedTask.getTaskName());
            existingTask.setPriority(updatedTask.getPriority());
            // Update other properties as needed
            return taskRepository.save(existingTask);
        }
        return null; // Handle not found case
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskRepository.deleteById(taskId);
    }
}