import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const Todo = ({task, deleteTodo, editToDo, changeStatus}) => {
  return (
    <div className='Todo'>
      {task.completed? (
        <FontAwesomeIcon icon={faSquareCheck} onClick={() => changeStatus(task.id)} />
      ) : (
        <FontAwesomeIcon icon={faSquare} onClick={() => changeStatus(task.id)} />
      )}
      <p className={`${task.completed ? 'completed':''}`}> 
        {task.task} 
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {
          editToDo(task.id)
        }} />
        <FontAwesomeIcon icon={faTrash} onClick={() => {
          deleteTodo(task.id)
        }} />
      </div>
    </div>
  )
}
