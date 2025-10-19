import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, handleDeleteItem }) {
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
              onClick={handleDeleteItem}
            >
              Delete
            </button>
          </div>
        </div>
        {/* ==== row 2 End ==== */}
      </div>
    </>
  );
}
export default TodoItem;
