import style from "./FoodInput.module.css";
function FoodInput({handleOnChangeInput}) {

  return <input type="text" placeholder="Enter food Item here"  className={style.foodInput}
  onChange={handleOnChangeInput}
  />;
}
export default FoodInput;
