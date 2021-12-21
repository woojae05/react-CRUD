import React,{useContext} from 'react'
import { TodoContext } from './Todostore'
import "./Form.css"

const Form = () => {
    const {addTodo,onchange} = useContext(TodoContext)
    return (
        <form action="">
            <input type="text" onChange={onchange}/>
            <button onClick={addTodo} className='addBtn'>추가</button>
        </form>
    )
}

export default Form
