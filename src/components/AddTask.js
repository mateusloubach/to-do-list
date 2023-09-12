import React from 'react'

const AddTask = ({ addTask }) => {
  return (
    <form autoComplete="off" className="new-task" onSubmit={addTask} >
      <div className="checkbox"></div>
      <input type="text" name='newTodo' placeholder="Create a new todo..." required />
    </form >
  )
};

export default AddTask