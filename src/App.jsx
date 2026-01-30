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
  }, []);

  const addTask = (newTask) => {
  fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
    .then(res => res.json())
    .then(data => {
      setTasks(prevTasks => [...prevTasks, data]);
    })
    .catch(err => console.error(err));
};


  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={
            <Home> 
            <TodoForm
            
              tasks={tasks}
              addTask={addTask}
              />
            </Home>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={
            <Tasks> 
            <TodoForm
              tasks={tasks}
              addTask={addTask}
              />
            </Tasks>
          } />
        </Routes>
      </main>
      <footer className="footer">
        <p>Do It! - Stay Productive</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;