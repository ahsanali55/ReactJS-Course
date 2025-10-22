import { Children, createContext, useReducer } from "react";

export const TodoItemsContext = createContext([{
        // key values are same
        todoItems: [], 
        addNewItem: () => {},
        deleteItem: () => {},
      }]);

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

const TodoItemContextProvider = (props) => {
///  currState   // dispatch                     Reducer,        initialState
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

  // Add new item in Todo Items Method
  const addNewItem = (itemName, itemDueDate) => {
      
    const newItemAction = {
      type: "NEW_ITEM",
      payload:{
         itemName,
        itemDueDate,
      }
    };
    // dispatch Action
  dispatchTodoItems(newItemAction);
  }
  return(
    <>
     <TodoItemsContext.Provider 
     value={{
        // key values are same
        todoItems,  // Array
        addNewItem, // Methods
        dispatchTodoItems
      }}>
        {props.children}
      </TodoItemsContext.Provider>
    </>
  )
  }

export default TodoItemContextProvider;
