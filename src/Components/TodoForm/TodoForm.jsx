import { useState, useEffect } from "react";
import "./TodoForm.css"

function TodoForm({ addTask }) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  

 
  const handleSubmit = e => {
    e.preventDefault(); 
   

    if (!title || !description) return;
    

   
    
       
        addTask(title, description);
         

        setTitle("");
        setDescription("")
        completed: false
    
      }
      const newTask = {
        title: title.trim(),
        description: description.trim(),
        completed: false
      }
      console.log(title)
      console.log(description)
      console.log(newTask)

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
      <button  type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;

