import React from 'react'
import TodoStore from './Todostore'
import Form from './Form';
import Header from "./Header.jsx"
import List from "./List.jsx"


function App() {
    return (
        <TodoStore>
            <Header />
            <Form />
            <List />
        </TodoStore> 
    )
}

export default App
