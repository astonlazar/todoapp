import React, {useState} from 'react'

export const EditTodoForm = ({task, editTodo}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(value)
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input'
       placeholder='Update Task' 
       value={value}
       onChange={(event) => {
        // console.log(event.target.value)
        setValue(event.target.value)
        }} />
       <button type='submit' className='todo-btn'>
        Update Task
       </button>
    </form>
  )
}
