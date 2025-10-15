import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {

  return (
    <>
      <div className={style['itemsContainer']}>
        {Array.from(todoItems).map(item => <TodoItem todoName={item.name} todoDate={item.date}  />)}
      </div>
    </>
  );
};
export default TodoItems;
