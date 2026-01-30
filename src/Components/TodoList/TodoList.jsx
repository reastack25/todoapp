import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/tasks')
      .then(response => {
        const sorted = response.data.sort((a, b) => b.id - a.id);
        const withTime = sorted.map(todo => ({ ...todo, time: "Today" }));
        setTodos(withTime);
      })
      .catch(() => console.log('Error loading todos'));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(() => console.log('Error deleting'));
  };

  const handleToggleComplete = (id) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    
    const updated = { ...todo, completed: !todo.completed };
    
    axios.patch(`http://localhost:3000/tasks/${id}`, { completed: updated.completed })
      .then(() => setTodos(todos.map(t => t.id === id ? updated : t)))
      .catch(() => console.log('Error updating'));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;