import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItem = useSelector((state) => state.bag);
  const foundItem = bagItem.indexOf(item.id) >= 0; // return true and flase

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {/* {item.rating.stars} ⭐ | {item.rating.count} */}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>

        {foundItem ? (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            onClick={handleRemove}
          >
            <MdDeleteSweep />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            onClick={() => handleAddToBag(item.id)}
          >
            <IoMdAddCircleOutline />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
