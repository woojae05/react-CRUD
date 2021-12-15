import './App.css';
import List from "./List.jsx"
import React,{ useState,useEffect } from 'react';
import useFetch from './useFetch';
import Header from "./Header.jsx"
import Form from './Form';

const App = ()=>{
   const [todos,setTodos] = useState([])
   const [newTodo,setNewTodo] = useState()

   const loading = useFetch(setTodos,'http://localhost:8080/todo')

  const onchange = (e) => {
    setNewTodo(e.target.value)
  }
  const addTodo = (e) => {
    e.preventDefault();
    console.log(newTodo)
    setTodos([...todos,{id:todos.length+1,title:newTodo,status:"todo"}])
  }
  
  const changeStatus = (id)=>{
    const updateTodos=todos.map((todo)=>{
      if(todo.id=== +id){
        todo.status === "todo" ? todo.status="done":todo.status="todo"
      }
      return todo;
    })
    setTodos(updateTodos)
  }

  useEffect(() => {
    console.log("새로운 내용이 추가됨",todos)
  }, [todos])

   return(
     <>
     <Header todos={todos}/>
     
    <form action="">
      <input type="text" onChange={onchange}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    {/* <Form addTodo={addTodo} onchange={onchange}/> */}

    <List todos={todos} loading={loading} changeStatus={changeStatus}/>
    </>
   )
}

export default App;
