import style from "./Item.module.css";
let Item = ({ foodItems, handleBuyButtonClick, bought }) => {
  // lets destructuring Props
  // let {foodItem} = props;
  // console.log(isBought);
  return (
    <>
      <li
        className={`${style["kgItem"]} list-group-item ${
          bought ? style.buyItem : ""
        }  `}
      >
        {foodItems}
        <button
          className={`btn btn-info  ${
          bought && style.buttonStyle
        } `}
          onClick={handleBuyButtonClick}
        >
          Buy 
        </button>
      </li>
    </>
  );
};
export default Item;
