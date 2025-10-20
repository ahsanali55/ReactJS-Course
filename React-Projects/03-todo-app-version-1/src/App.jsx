import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import style from "./App.module.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { FaBeer } from 'react-icons/fa';

function App() {
  
  let [todoItems, setTodoItems] = useState([]);

  // Add new item in Todo Items Method
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newToDoItems = [ ...currValue, { name: itemName, date: itemDueDate }];
      return newToDoItems;
    }); 
  };
 

  // Handle After clicked delete button method
let handleDeleteItem = (todoName, todoDueDate) => {
  const updateArr = todoItems.filter(item => {
    return (item.name !== todoName) 
  });
  setTodoItems(updateArr);
}

  return (
    <>
      <center className={`${style["todo-container"]}`}>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {(todoItems.length === 0) && (<WelcomeMessage />)}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}
  

export default App;
