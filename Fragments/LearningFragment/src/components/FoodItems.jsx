import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

function FoodItems({ foodItems }) {
  return (
    <>
      <ul className="list-group">
        {Array.from(foodItems).map((item) => (
          <Item
            key={item}
            foodItems={item}
            handleBuyButtonClick={() => {
              console.log(`${item} being bought!`);
            }}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
