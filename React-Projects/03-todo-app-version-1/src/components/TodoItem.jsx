import React, { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const {dispatchTodoItems} = useContext(TodoItemsContext);
  return (
    <>
      <div className="text-center container ">
        {/* ==== row 2 Start ==== */}
        <div className={`row ${styles["kgrow"]}`}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="btn"
              className="btn btn-danger kg-button"
              onClick={() => {
                 const updateArr = {
                  type: "DELETE_ITEM",
                  payload: {
                    todoName,
    }
  }
                dispatchTodoItems(updateArr);
              }
              }
            >
            <MdDeleteSweep className={styles.Delete}/>  
            </button>
          </div>
        </div>
        {/* ==== row 2 End ==== */}
      </div>
    </>
  );
}
export default TodoItem;
