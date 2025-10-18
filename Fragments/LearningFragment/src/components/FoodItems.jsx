import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import style from './FoodItems.module.css';
import Item from "./Item";

function FoodItems({ foodItems }) {
  let [activeItems, setActiveState] = useState([]);

  let onBuyButton = (item, event) => {
    
      let newItem = [...activeItems, item]
      setActiveState(newItem)
    
    
  }

  return (
    <>
      <ul className="list-group">
        {Array.from(foodItems).map((item) => (
          <Item bought={activeItems.includes(item)}
            key={item}
            foodItems={item}
            handleBuyButtonClick={ (event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
