import { useState } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  
  return (
    <>
      <div className={style["itemsContainer"]}>
        {Array.from(todoItems).map((item) => (
          <TodoItem
          key={item.name}
            onDeleteClick={onDeleteClick}
            todoName={item.name}
            todoDate={item.date}
          />
        ))}
        
      </div>
    </>
  );
};
export default TodoItems;
