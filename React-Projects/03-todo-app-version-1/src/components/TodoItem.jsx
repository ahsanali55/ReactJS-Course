function TodoItem({todoName, todoDate}) {
   
    return (
        <>
        <div className="text-center container">

          {/* ==== row 2 Start ==== */}
          <div className="row kg-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
              <button type="btn" className="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
          {/* ==== row 2 End ==== */}

        </div>
        </>
    )
}
export default TodoItem;