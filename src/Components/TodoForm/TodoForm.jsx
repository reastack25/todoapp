import { useState, useEffect } from "react";
import "./TodoForm.css"

function TodoForm({ addTask }) {
  
  const [title, setTitle] = useState("");
  

 
  const handleSubmit = e => {
    e.preventDefault(); 
   

    if (!title) return;
    

   
    // fetch(" http://localhost:4000/todos", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: title.trim(), completed: false }),
    // })
    //   .then(res => res.json())
    //   .then(newTask => {
       
        // addTask(newTask);
        //  console.log(tasks)

        // setTitle("");
//       })
//       .catch(err => console.error("Failed to add a new task:", err));
      }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}               
        onChange={event => setTitle(event.target.value)} 
        placeholder="Enter new task"
        required
      />
      <button onClick={handleSubmit} type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;

