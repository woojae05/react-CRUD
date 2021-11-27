import React, { useState } from 'react'
import "./Item.css"

const Item = ({todo,changeStatus}) => {
    const toggleItem =(e)=>{
        const id = e.target.dataset.id;
        changeStatus(id);
    }
    
    const className = todo.status === "done" ? "done":''

    return (
        <li data-id={todo.id} onClick={toggleItem} className={className}>{todo.title}</li>
    )
}

export default Item
