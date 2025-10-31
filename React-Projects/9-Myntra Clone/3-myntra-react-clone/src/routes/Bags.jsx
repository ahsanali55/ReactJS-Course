import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bags = () => {
  const bagItems = useSelector((state) => state.bag);
  console.log(bagItems);
  const itemSlice = useSelector((state) => state.items);
  console.log(itemSlice);

  const items = itemSlice.filter((item) => {
    return Array.from(bagItems).some((bgItem) => {
      return item.id === bgItem;
    });
  });
  console.log("Item", items);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {items.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
          <div className="bag-summary"></div>
        </div>
      </main>
    </>
  );
};

export default Bags;
