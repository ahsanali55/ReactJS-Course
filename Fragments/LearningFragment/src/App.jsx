import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const foodItems = [
    "Dal",
    "Fruits",
    "Vegetables",
    "Dry-Fruits",
    "Milk",
    "Salad",
  ];

  let handleOnChangeInput = ((event) => {
    console.log(event.target.value)
  })
  let textToShow = "Food Item Entered by user"; 

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <p>{textToShow}</p>
        <ErrorMessage foodItems={foodItems} />
        <FoodInput handleOnChangeInput={handleOnChangeInput} />
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
