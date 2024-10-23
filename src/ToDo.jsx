import React, { useState } from 'react'
import "./ToDo.css"
const ToDo = ()=> {

  const[todos, setTodos] = useState([]); // State for the list of to-dos
  const[input, setInput] = useState(" "); // State for the input text

  const [editIndex, setEditIndex] = useState([]);
  const [editInput, setEditInput] = useState(" ");
const[completed, setCompleted] = useState([])


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

//editing the task

const editData = (index) =>{
  setEditIndex(index); // Set the task being edited
    setEditInput(todos[index]); // Prefill the edit input with the current task value

}

   // Function to confirm the edit and update the to-do
   const confirmEditTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editInput; // Update the selected task with the new value
    setTodos(updatedTodos);
    setEditIndex(null); // Clear edit state
    setEditInput(""); // Clear edit input field
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    setCompleted((prev) => {
      const newCompleted = [...prev];
      newCompleted[index] = !newCompleted[index]; // Toggle completion state
      return newCompleted;
    });
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
{/* Table to display tasks */}
<table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {/* Display an input for editing if the task is being edited */}
              <td style={{ textDecoration: completed[index] ? "line-through" : "none",
                
               }}>
                {editIndex === index ? (
                  <input 
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)} />
                ) : (
                  todo
                )}
              </td>
              <td>
                  {/* Checkbox to toggle completion */}
                  <input
                    type="checkbox"
                    checked={completed[index]}
                    onChange={() => toggleCompletion(index)}
                  />
                
              
                {editIndex === index ? (
                  <button className="add-save-button" onClick={confirmEditTodo}>Save</button>
                ) : (
                  <>
                  <button className="add-edit-button" onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                 
                  </>
                  
                )}
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
    </>
  )
}

export default ToDo