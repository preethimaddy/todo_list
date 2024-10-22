import React, { useState } from 'react'
import "./ToDo.css"
const ToDo = ()=> {

  const[todos, setTodos] = useState([]); // State for the list of to-dos
  const[input, setInput] = useState(" "); // State for the input text


   // Function to handle adding a new to-do
const addToDo = () => {
  if(input.trim () !== ""){
    setTodos([...todos, input]); // Add new to-do to the list
      setInput(""); // Clear input field
  }
}
const deleteTodo = (index) =>{
  const newTodos = [...todos];
  newTodos.splice(index,1); // Remove the todo by index
  setTodos(newTodos);

};
  return (
    <>
<div>
<h1>To-Do List</h1>
<input type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Add a new task" />
<button className="add-task-button" onClick={addToDo}>Add</button>
<ol>
  {todos.map((todo,index)=>
(
  <li key={index}>{todo}
  <button onClick={()=>deleteTodo(index)}>Delete</button></li>
))}
</ol>
</div>
    </>
  )
}

export default ToDo