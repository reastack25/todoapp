import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onDelete, onToggleComplete }) {
  
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        <h3 className="todo-title">{todo.title}</h3>
      </div>
      
      <p className="todo-description">{todo.description}</p>
      
      <div className="todo-footer">
        <span className="todo-time">{todo.time || "Today"}</span>
        <button 
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;