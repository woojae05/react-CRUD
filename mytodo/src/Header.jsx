import React,{useContext} from "react";
import { TodoContext } from "./Todostore";

const Header = () => {
    const {todos} = useContext(TodoContext)
  return (

        <div className="header">
          <h1> TODO 애플리케이션</h1>
          <div className="hr"></div>
          <h2>
            해야할일! {todos.filter((v) => v.status == "todo").length}개가 있습니다
          </h2>
        </div>
  );
};

export default Header;
