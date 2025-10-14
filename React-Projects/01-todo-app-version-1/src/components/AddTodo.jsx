function AddTodo() {
    return (
        <>
         {/* ==== row 1 start ==== */}
          <div className="row inputItem kg-row">
            <div class="col-6">
              <input type="text" name="" placeholder="Enter Todo Here" id="" />
            </div>
            <div class="col-4">
              <input type="date" name="" id="" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success kg-button">
                Add
              </button>
            </div>
          </div>
          {/* ==== row 1 End ==== */}
        </>
    )
}
export default AddTodo;