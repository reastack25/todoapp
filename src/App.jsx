import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm/TodoForm";



function App() {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch(" http://localhost:4000/todos")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
      console.log("task", tasks)
  }, [tasks]);

  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTask={addTask}
      /> 
      
      
    </div>
  );
}

export default App;







