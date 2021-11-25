import './App.css';
import List from "./List.jsx"
import React,{ useState,useEffect } from 'react';
import useFetch from './useFetch';


const App = ()=>{
   const [todos,setTodos] = useState([])
   const [newTodo,setNewTodo] = useState()

   const loading = useFetch(setTodos,'http://localhost:8080/todo')

  const onchange = (e) => {
    setNewTodo(e.target.value)
  }
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos,{id:todos.length+1,title:newTodo,}])
  }
  
  useEffect(() => {
    console.log("새로운 내용이 추가됨",todos)
  }, [todos])

   return(
     <>
     <h1>todo 애플리케이션</h1>
    <form action="">
      <input type="text" onChange={onchange}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    <List todos={todos} loading={loading}/>
    </>
   )
}

export default App;
