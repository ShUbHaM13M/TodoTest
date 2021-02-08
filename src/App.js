import React, {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'

function App() {

  const [ todos, setTodos ] = useState([])

  const deleteTodo = id => {
    setTodos(prev => {
      return prev.filter(
        todo => (todo.id !== id)
      )
    })
  }

  return (
    <div className="App container">
      <h1 className="cyan-text">Todo List Test</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;
