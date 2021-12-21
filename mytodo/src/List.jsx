import React,{useContext} from 'react'
import Item from './Item.jsx'
import { TodoContext } from './Todostore.js';

const List = () => {
    const {todos,loading,changeStatus} = useContext(TodoContext)
    let todoList = <div>loading...</div>;
    if(!loading) todoList= todos.map((todo) =><Item key={todo.id} todo={todo} changeStatus={changeStatus}></Item>)
    return (
        <ul>
            <li>{todoList}</li>
        </ul>
    )
}

export default List
