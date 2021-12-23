import './App.css';
import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch';
import { toDoReducer } from './reducer';

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  const [todos,dispatch] = useReducer(toDoReducer,[]);

  const setInitData = (initData) =>{
    dispatch({type:"SET_INIT_DATA",payload:initData});
  }

  const loading = useFetch(setInitData,'http://localhost:8080/todo');

  useEffect(() => {
    console.log("새로운 내용이 추가됨", todos)
  }, [todos])

  return (
    <body>

      <div className='todoList'>
        <TodoContext.Provider value={{todos,loading,dispatch}}>
          {props.children}
        </TodoContext.Provider>
      </div>
    </body>
  )
}

export default TodoStore;
  