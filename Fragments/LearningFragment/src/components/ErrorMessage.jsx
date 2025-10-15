let ErrorMessage = (Props) => {
    let {foodItem} = Props; // detructuring props
    
    // Conditional rendering

  // if (foodItems.length === 0){
  //   return <h1> Iam still hungry </h1>
  // }
  //Ternary Operator
  // let emptyMessage = (foodItems.length === Z0) ? <h1> i'm Hungry still!</h1> : null;
    return(
        <>
        {/* {emptyMessage} */}
      {/* // Logical Operator  */}
      {foodItem.length === 0 && <h1>I'm still hungry!</h1>}
        </>
    )
}
export default ErrorMessage;