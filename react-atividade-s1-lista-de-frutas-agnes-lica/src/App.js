import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const totalPrice = fruits.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  function filterRedFruits() {
    const filteredFruits = fruits.filter((fruit) => fruit.color === "red");
    setFruits(filteredFruits);
  }

  return (
    <div className="App">
      <p> The total is: {totalPrice} </p>
      {fruits.map((fruit) => {
        return <p key={fruit.name}>{fruit.name}</p>;
      })}
      <button onClick={filterRedFruits}>Only Red</button>
    </div>
  );
}

export default App;
