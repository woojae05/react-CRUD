import React from 'react'
import Item from './Item.jsx'

const List = ({todos,loading,changeStatus}) => {
    let todoList = <div>loading...</div>;
    if(!loading) todoList= todos.map((todo) =><Item key={todo.id} todo={todo} changeStatus={changeStatus}></Item>)
    return (
        <ul>
            <li>{todoList}</li>
        </ul>
    )
}

export default List
