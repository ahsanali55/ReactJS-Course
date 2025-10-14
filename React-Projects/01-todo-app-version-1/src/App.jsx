import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem02 from "./components/TodoItem02";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="itemsContainer">

         <AddTodo />
         <TodoItem1 />
         <TodoItem02 />
        </div>
      </center>
    </>
  );
}

export default App;
