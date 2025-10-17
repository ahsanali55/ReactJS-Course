import style from "./Item.module.css";
let Item = ({ foodItems, handleBuyButtonClick }) => {
    // lets destructuring Props
    // let {foodItem} = props;
    
    return (
        <>
      <li className={`${style["kgItem"]} list-group-item `}>
        {foodItems}
        <button
          className={`btn btn-info ${style.button}`}
          onClick={handleBuyButtonClick}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
