import React,{useContext,useRef} from 'react'
import { TodoContext } from './Todostore'
import "./Form.css"

const Form = () => {
    const inputRef = useRef(false);
    const {addTodo} = useContext(TodoContext);
   
    const addTodoData = (e)=>{
        e.preventDefault();
        addTodo(inputRef.current.value);
    }

    return (
        <form>
            <input type="text" ref={inputRef}/>
            <button onClick={addTodoData} className='addBtn'>추가</button>
        </form>
    )
}

export default Form
