import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import style from "./App.module.css";

function App() {
  const initialTodoItems = [
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
    },
  ];
  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`ItemName: ${itemName} and ItemDate: ${itemDueDate}`);
    const newToDoItems = [ ...todoItems, { name: itemName, date: itemDueDate }];
    console.log(newToDoItems);

    setTodoItems(newToDoItems);  
  };

console.log("TodoItems:" ,todoItems);

let updateYourApp = (updateItems) => {
  setTodoItems(updateItems)
}
  return (
    <>
      <center className={`${style["todo-container"]}`}>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} updateTodo={updateYourApp} />
      </center>
    </>
  );
}

export default App;
