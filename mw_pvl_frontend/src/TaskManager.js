import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({ taskName: '', priority: '' });

  useEffect(() => {
    // Fetch tasks from the backend when the component mounts
    fetch('http://localhost:8080/api/tasks', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleTaskSubmit = (taskData) => {
    if (editingTask) {
      // If editingTask is present, update the existing task
      fetch(`http://localhost:8080/api/tasks/${editingTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(taskData),
      })
        .then(() => {
          // Update the tasks state accordingly
          const updatedTasks = tasks.map((task) => (task.id === editingTask.id ? taskData : task));
          setTasks(updatedTasks);
          setEditingTask(null);
        })
        .catch((error) => console.error('Error updating task:', error));
    } else {
      // If editingTask is null, add a new task
      fetch('http://localhost:8080/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(taskData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the tasks state accordingly
          setTasks([...tasks, data]);
        })
        .catch((error) => console.error('Error adding task:', error));
    }

    // Reset the newTask state
    setNewTask({ taskName: '', priority: '' });
  };

  const handleEditTask = (taskToEdit) => {
    // Set the task to be edited
    setEditingTask(taskToEdit);
    // Set the newTask state to the values of the task being edited
    setNewTask({ taskName: taskToEdit.taskName, priority: taskToEdit.priority });
  };

  const handleDeleteTask = (taskId) => {
    // Implement logic to delete the task from the backend API
    fetch(`http://localhost:8080/api/tasks/${taskId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(() => {
        // Update the tasks state accordingly
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setEditingTask(null); // Reset editingTask when deleting
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      
      {/* TaskForm Component */}
      <div>
        <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleTaskSubmit(newTask); }}>
          {/* Text fields for taskName and priority */}
          <label>
            Task Name:
            <input type="text" value={newTask.taskName} onChange={(e) => setNewTask({ ...newTask, taskName: e.target.value })} required />
          </label>
          <br />
          <label>
            Priority:
            <input type="text" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} required />
          </label>
          <br />
          <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
        </form>
      </div>

      {/* TaskList Component */}
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>Task Name:</strong> {task.taskName}, <strong>Priority:</strong> {task.priority}
              {/* Add buttons for edit and delete */}
              <button onClick={() => handleEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* TaskDetails Component */}
      {editingTask && (
        <div>
          <h2>Task Details</h2>
          {/* Display task details */}
          <p>ID: {editingTask.id}</p>
          <p>Name: {editingTask.taskName}</p>
          <p>Priority: {editingTask.priority}</p>
        </div>
      )}
    </div>
  );
};

export default TaskManager;






