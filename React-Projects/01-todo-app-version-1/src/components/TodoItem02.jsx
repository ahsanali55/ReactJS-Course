function TodoItem02(){
    let todoName = "Go to mosque";
    let todoDate = "14-10-2025";
    return(
        <>
        <div className="text-center container">

        {/* ==== row 3 Start ==== */}
          <div class="row kg-row">
            <div class="col-6">{todoName}</div>
            <div class="col-4">{todoDate} </div>
            <div class="col-2">
              <button type="btn" class="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
          {/* ==== row 3 End ==== */}
        </div>
        </>
    )
}
export default TodoItem02;