import React, { useState } from 'react'

const AddTodo = ({ setTodos }) => {

  const [content, setContent] = useState('');

  const handleOnChange = e => {
    setContent(e.target.value)
  }
 
  const handleOnSubmit = e => {
    e.preventDefault()
    if (content === '') return;
    setTodos(prev => {
      const newTodo = {
        id: Math.random(),
        content: content
      }
      return [...prev, newTodo]
    })
    setContent('')
  }

  return (
    <form className="container" onSubmit={handleOnSubmit}
    >
      <label for="add-todo"> Add Todos </label>
      <input 
        type="text"
        placeholder="Add todo"
        name="add-todo"
        id="add-todo"
        value={content}
        onChange={handleOnChange}
        />
      <button className="waves-effect waves-light btn-small"
      >Add</button>
    </form>
  )

}

export default AddTodo