import React, { useState } from 'react'

const To_do_form = ({darkMode,setTasks,tasks}) => {
// ToDoForm component handles the creation of new to-do tasks.
// It manages the input state and submits new tasks to the parent component.
const [taskToAdd,setTaskToAdd] = useState("")
  // State for the input value
  // Example: const [input, setInput] = useState("");

  function handleAddTask(){
    setTasks([...tasks,{
      title: taskToAdd,
      completed: false,
      id: Date.now().toString(20)
    }])
  }

  return (
    <form className={`${darkMode ? "bg-gray-800 text-gray-300 *:placeholder:text-gray-300" :"bg-gray-50 text-gray-900 "} duration-500 w-full h-15 font-semibold text-lg rounded-md `}
    onSubmit={(e)=>{
      e.preventDefault()
      handleAddTask()
    }}
    >
      {/* Input field for new task */}
        <input type="text" value={taskToAdd} className='w-full p-3 px-10  outline-none h-full '
        onChange={(e)=>{
          setTaskToAdd(e.target.value)
        }}
         placeholder='Create a new todo...' />
      {/* Button to add the new task */}
    </form>
  )
}

// Export the ToDoForm component for use in other parts of the app
export default To_do_form