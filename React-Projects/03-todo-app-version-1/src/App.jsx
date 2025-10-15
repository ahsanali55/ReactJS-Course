import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import style from "./App.module.css"

function App() {
  const [count, setCount] = useState(0);
  const todoItems = [
    {
      name: "Buy Milk",
      date: "15-10-2025",
    },
    {
      name: "Go to the Mosque",
      date: "15-10-2025",
    },
    {
      name: "Learning ReactJS",
      date: "15-10-2025",
    }
  ]
  return (
    <>
      <center className={`${style['todo-container']}`}>
        <AppName />
         <AddTodo />
        <TodoItems todoItems={todoItems} />
       
      </center>
    </>
  );
}

export default App;
