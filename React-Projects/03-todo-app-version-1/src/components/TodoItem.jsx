import React from "react";
import styles from "./TodoItem.module.css";
import { MdDeleteSweep } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
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
                onDeleteClick(todoName, todoDate)
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
