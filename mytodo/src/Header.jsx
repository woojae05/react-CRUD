import React from 'react'

const Header = ({todos}) => {
    return (
        <div>
            <h1>Hello TODO  애플리케이션</h1>
            <div>해야할일! {todos.length}개가 있습니다</div>
        </div>
    )
}

export default Header
