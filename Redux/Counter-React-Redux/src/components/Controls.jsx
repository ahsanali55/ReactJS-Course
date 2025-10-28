import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE"})
  }

  const handleAdd = () => {
    dispatch({type: "ADD", payload: {
      num: inputValue.current.value,
    }});
    inputValue.current.value = "";
  }
  const handleSubtract = () => {
     dispatch({type: "SUBTRACT", payload: {
      num: inputValue.current.value,
    }});
    inputValue.current.value = "";
  }
  return (
    <>
      <div className="controlRow">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>


       <div className="constrolRow2">
        <input
          type="text" 
          placeholder="Enter Numbers"
          className="inputNumber"
          ref={inputValue}
        />
        

        <button
          type="button"
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
