import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? 
    (todos.map(todo => <Todo todo={todo} deleteTodo={deleteTodo}/>)
    ) :
    (<span>Nothing left todo</span>)

  return (
    <div className="collection">
      {todoList}
    </div>
  )

}

const Todo = ({todo, deleteTodo}) => {

  return (
    <div className="collection-item" key={todo.id}>
      {todo.content}
      <span className="secondary-content valign-wrapper" onClick={() => {deleteTodo(todo.id)}} >
        <i class="material-icons red-text">delete</i>
      </span>
    </div>
  )
}

export default TodoList