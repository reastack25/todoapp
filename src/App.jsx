import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tasks from './Pages/Tasks';
import TodoForm from "./Components/TodoForm/TodoForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={
            <Home 
              tasks={tasks}
              addTask={addTask}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={
            <Tasks 
              tasks={tasks}
              addTask={addTask}
            />
          } />
        </Routes>
      </main>
      <footer className="footer">
        <p>DoIt! - Stay Productive</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;