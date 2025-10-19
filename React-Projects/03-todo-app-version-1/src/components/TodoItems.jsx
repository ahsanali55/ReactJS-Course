import { useState } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import ErrorMessage from "./ErrorMessage";

const TodoItems = ({ todoItems, updateTodo }) => {
  const [todoItem, setTodoItem] = useState(todoItems);
  
  const deleteItem = (item) => {
    let updatedItems = [
      todoItem.filter((items) => {
        return items.name !== item.name;
      }),
    ];
    setTodoItem(...updatedItems);

    updateTodo(todoItem);
  };

  return (
    <>
      <div className={style["itemsContainer"]}>
        {Array.from(todoItems).map((item) => (
          <TodoItem
            handleDeleteItem={() => {
              deleteItem(item);
            }}
            todoName={item.name}
            todoDate={item.date}
          />
        ))}
        <ErrorMessage todoItems={todoItems} />
      </div>
    </>
  );
};
export default TodoItems;
