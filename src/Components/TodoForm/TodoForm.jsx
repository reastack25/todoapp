import React, { useState } from 'react';
import axios from 'axios';
import "./TodoForm.css"

function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in both fields");
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      completed: false
    };

    try {
      
      const response = await axios.post('http://localhost:3000/tasks', newTask);
      
      
      if (addTask) {
        addTask(response.data.title, response.data.description);
      }
      
    
      setTitle("");
      setDescription("");
      
    } catch (error) {
      console.error("Error:", error);
      alert("Could not add task. Check if server is running.");
    }
  };

  return (
    <form  className="form"onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter new task"
        required
      />
      
      <textarea 
        placeholder="Task Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;

