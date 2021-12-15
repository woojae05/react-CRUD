import React from 'react'

const Form = ({addTodo,onchange}) => {
    return (
        <form action=''>
            <input type="text" onchange={onchange}></input>
            <button onClick={addTodo}>할일추가</button>
        </form>
    )
}

export default Form
