import style from "./FoodInput.module.css";
function FoodInput({handleOnKeyDown}) {

  return <input type="text" placeholder="Enter food Item here"  className={style.foodInput}
  onKeyDown={handleOnKeyDown}
  />;
}
export default FoodInput;
