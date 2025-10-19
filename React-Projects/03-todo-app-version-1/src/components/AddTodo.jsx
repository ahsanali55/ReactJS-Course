import { useState } from "react";
import style from "./AddTodo.module.css";

function AddTodo({onNewItem}) { 

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
     setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }
    return (
        <>
         {/* ==== row 1 start ==== */}
          <div className={`row ${style['kgrow']} ${style['inputItem']}`}  >
            <div className={`col-6 }`} >
              <input type="text" name="" placeholder="Enter Todo Here" id="" value={todoName} onChange={handleNameChange} />
            </div>
            <div className={`col-4 }`}>
              <input type="date" name="" id="" value={dueDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
              <button type="button" className= {`btn btn-success ${style['kgbutton']}`} 
              onClick={handleAddButtonClicked}
              >
                Add
              </button>
            </div>
          </div>
          {/* ==== row 1 End ==== */}
        </>
    )
}
export default AddTodo;