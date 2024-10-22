import React, { useState } from 'react'


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
  return (
    <>
<div>
<h1>To-Do List</h1>
<input type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Add a new task" />
<button onClick={addToDo}>Add</button>
<ol>
  {todos.map((todo,index)=>
(
  <li key={index}>{todo}</li>
))}
</ol>
</div>
    </>
  )
}

export default ToDo