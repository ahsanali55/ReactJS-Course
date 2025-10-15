import { useState } from "react";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const foodItems = [
    "Dal",
    "Fruits",
    "Vegetables",
    "Dry-Fruits",
    "Milk",
    "Salad",
  ];
  return (
    <>
        <h1>Healthy Food</h1>
        <ErrorMessage foodItem={foodItems}/>
        <FoodItems foodItem={foodItems}/>
    </>
  );
}

export default App;
