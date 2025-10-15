import style from "./AddTodo.module.css";

function AddTodo() {
  
    return (
        <>
         {/* ==== row 1 start ==== */}
          <div className={`row inputItem ${style['kgrow inputItem']}`} >
            <div className="col-6">
              <input type="text" name="" placeholder="Enter Todo Here" id="" />
            </div>
            <div className="col-4">
              <input type="date" name="" id="" />
            </div>
            <div className="col-2">
              <button type="button" className= {`btn btn-success ${style['kgbutton']}`} >
                Add
              </button>
            </div>
          </div>
          {/* ==== row 1 End ==== */}
        </>
    )
}
export default AddTodo;