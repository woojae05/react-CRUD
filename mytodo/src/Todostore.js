import './App.css';
import List from "./List.jsx"
import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Header from "./Header.jsx"
import Form from './Form';

export const TodoContext = React.createContext( )

const TodoStore = () => {
  const [todos, setTodos] = useState([])

  const loading = useFetch(setTodos, 'http://localhost:8080/todo')

  const addTodo = (newTodo) => {
    console.log(newTodo)
    setTodos([...todos, { id: todos.length + 1, title: newTodo, status: "todo" }])
  }

  const changeStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        todo.status === "todo" ? todo.status = "done" : todo.status = "todo"
      }
      return todo;
    })
    setTodos(updateTodos)
  }

  useEffect(() => {
    console.log("새로운 내용이 추가됨", todos)
  }, [todos])

  return (
    <body>

      <div className='todoList'>
        <TodoContext.Provider value={{todos,addTodo,changeStatus,loading}}>
        <Header />

        <Form />

        <List />

        </TodoContext.Provider>
      </div>
    </body>
  )
}

export default TodoStore;
  