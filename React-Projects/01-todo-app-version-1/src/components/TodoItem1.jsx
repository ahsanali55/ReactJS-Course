function TodoItem1() {
    let todoName = "Buy Milk";
    let todoDate = "14-10-2025";

    return (
        <>
        <div className="text-center container">

          {/* ==== row 2 Start ==== */}
          <div class="row kg-row">
            <div class="col-6">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2">
              <button type="btn" class="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
          {/* ==== row 2 End ==== */}

        </div>
        </>
    )
}
export default TodoItem1;