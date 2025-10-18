import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
 
  
  // Use State Hook
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];  // value
  // let setStateMethod = textStateArr[1];  // Method
  
  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodState] = useState([
    
    ]);

    
    
    const handleOnKeyDown = ((event) => {
    if (event.key === "Enter"){
      let newfoodItem = event.target.value;
      let newItems = [...foodItems, newfoodItem];
      setFoodState(newItems)
      console.log(newfoodItem);
    }
    
   
  })

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <ErrorMessage foodItems={foodItems} />
        
        <FoodItems foodItems={foodItems} />
      </Container>

      {/* <Container>
        <p className="para">
          Hey! it's the items that are good for your health and also well
          being,.
        </p>
      </Container> */}



    </>
  );
}

export default App;
