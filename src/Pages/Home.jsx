// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TodoForm from '../Components/TodoForm/TodoForm';

const Home = () => {
  const handleTodoAdded = (newTask) => {
    console.log('New task added:', newTask);
  
  };

  return (
    <div>
      
      <TodoForm onTodoAdded={handleTodoAdded} />
      <Link to="/tasks">View All Tasks</Link>
    </div>
  );
};

export default Home;