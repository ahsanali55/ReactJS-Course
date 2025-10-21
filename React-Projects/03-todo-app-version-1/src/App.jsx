import { useState, useReducer } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import style from "./App.module.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
// import todoItemContextProvider from './store/todo-items-store';

//Reducer fuction
let todoItemReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM"){
    newTodoItems = [
      ...currTodoItems, {name: action.payload.itemName, 
        date: action.payload.itemDueDate }
    ]
  }
  else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(item => {
      return (item.name !== action.payload.todoName)
    });
  }
  return newTodoItems;
}

function App() {
   ///  currState   // dispatch                     Reducer,        initialState
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

  // Add new item in Todo Items Method
  const addNewItem = (itemName, itemDueDate) => {
      
    const newItemAction ={
      type: "NEW_ITEM",
      payload:{
         itemName,
        itemDueDate,
      }
    };
    // dispatch Action
  dispatchTodoItems(newItemAction)
  }
  
  return (
    <>
      <TodoItemsContext.Provider value={{
        // key values are same
        todoItems,  // Array
        addNewItem, // Methods
        dispatchTodoItems
      }}>

      <center className={`${style["todo-container"]}`}>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
      </TodoItemsContext.Provider>

    </>
  );
}
  

export default App;
