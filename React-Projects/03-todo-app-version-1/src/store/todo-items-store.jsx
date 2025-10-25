import { useMemo } from "react";
import { useCallback } from "react";
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
  const addNewItem = useCallback((itemName, itemDueDate) => {
      
    const newItemAction = {
      type: "NEW_ITEM",
      payload:{
         itemName,
        itemDueDate,
      }
    };
    // dispatch Action
  dispatchTodoItems(newItemAction);
  }, [dispatchTodoItems])

const contextvalue = useMemo(() => {
  return {
    todoItems,
    addNewItem,
    dispatchTodoItems
  }
}, [todoItems])

  return(
    <>
     <TodoItemsContext.Provider 
     value={contextvalue}>
        {props.children}
      </TodoItemsContext.Provider>
    </>
  )
  }

export default TodoItemContextProvider;
