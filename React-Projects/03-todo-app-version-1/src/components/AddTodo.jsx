import { useContext, useRef } from "react";
import style from "./AddTodo.module.css";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({  }) {
  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();
 
  const handleAddButtonClicked = React.memo((event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);  // callBack function

    // Adding list item After that it has to initialize 0
    todoNameElement.current.value = "";
    dueDateElement.current.value = ""
    
  });
  return (
    <>
      {/* ==== row 1 start ==== */}
      <form action=''
        className={`row ${style["kgrow"]} ${style["inputItem"]}`}
        onSubmit={handleAddButtonClicked}
      >
        <div className={`col-6 }`}>
          <input
            type="text"
            name=""
            placeholder="Enter Todo Here"
            id=""
            ref={todoNameElement}
          />
        </div>
        <div className={`col-4 }`}>
          <input
            type="date"
            name=""
            id=""
            
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="Submit"
            className={`btn btn-success ${style["kgbutton"]}`}
          >
            <MdFormatListBulletedAdd className={style.add} />
          </button>
        </div>
      </form>
      {/* ==== row 1 End ==== */}
    </>
  );
}
export default AddTodo;
