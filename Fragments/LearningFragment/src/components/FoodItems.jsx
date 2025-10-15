import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

function FoodItems({foodItem}) {
 
  return (
    <>
      <ul className="list-group">
        {Array.from(foodItem).map((item) => (
          <Item key={item} foodItem={item}/>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
