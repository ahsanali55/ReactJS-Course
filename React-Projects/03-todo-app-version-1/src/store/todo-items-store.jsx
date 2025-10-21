import { createContext } from "react";

export const TodoItemsContext = createContext([{
        // key values are same
        todoItems: [], 
        addNewItem: () => {},
        deleteItem: () => {},
      }]);

// const todoItemContextProvider = () => {
//     ///  currState   // dispatch                     Reducer,        initialState
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

//   // Add new item in Todo Items Method
//   const addNewItem = (itemName, itemDueDate) => {
      
//     const newItemAction ={
//       type: "NEW_ITEM",
//       payload:{
//          itemName,
//         itemDueDate,
//       }
//     };
//     // dispatch Action
//   dispatchTodoItems(newItemAction)
//   };
// }
// default export todoItemContextProvider;



