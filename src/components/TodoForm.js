import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(value)
    addTodo(value)
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input'
       placeholder='What is the task today?' 
       value={value}
       onChange={(event) => {
        // console.log(event.target.value)
        setValue(event.target.value)
        }} />
       <button type='submit' className='todo-btn'>
        Add Task
       </button>
    </form>
  )
}
