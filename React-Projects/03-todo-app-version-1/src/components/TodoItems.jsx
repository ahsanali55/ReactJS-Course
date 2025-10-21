import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem"; 
import style from "./TodoItems.module.css";

const TodoItems = () => {
  
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      <div className={style["itemsContainer"]}>
        {Array.from(todoItems).map((item) => (
          <TodoItem
          key={item.name}
            
            todoName={item.name}
            todoDate={item.date}
          />
        ))}
        
      </div>
    </>
  );
};
export default TodoItems;
