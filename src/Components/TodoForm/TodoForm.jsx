import { useState, useEffect } from "react";
import "./TodoForm.css"

function TodoForm({ addTask }) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  

 
  const handleSubmit = e => {
    e.preventDefault(); 
   

    if (!title || !description) return;
    

   
    // fetch(" http://localhost:4000/todos", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: title.trim(), completed: false }),
    // })
    //   .then(res => res.json())
    //   .then(newTask => {
       
        addTask(title, description);
         

        setTitle("");
        setDescription("")
    //   })
    //   .catch(err => console.error("Failed to add a new task:", err));
      }

  return (
    <form onSubmit={handleSubmit}>
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
        onChange={(event) =>
        setDescription(event.target.value)}
        required/>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;

