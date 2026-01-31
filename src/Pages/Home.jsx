// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TodoForm from '../Components/TodoForm/TodoForm';

const Home = () => {
  const handleTodoAdded = (newTask) => {
    console.log('New task added:', newTask);
    // You could add additional logic here if needed
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <TodoForm onTodoAdded={handleTodoAdded} />
      <Link to="/tasks">View All Tasks</Link>
    </div>
  );
};

export default Home;