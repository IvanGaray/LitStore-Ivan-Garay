import React, { useState } from "react";
import './ItemCount.css';

const ItemCounter = ({ initialValue, maxValue, minValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    if (counter === minValue) {
      return alert("El minimo es 1");
    }
    setCounter(counter - 1);
    onAdd(counter - 1);

    console.log(decrement);
  };

  const increment = () => {
    if (counter === maxValue) {
      return alert("No queda más stock!");
    }

    setCounter(counter + 1);
    onAdd(counter + 1);
  };

  return (
    <div className="btns-container">
      <div class="mini ui secondary button disable" style={{"padding" : "10px"}}>{counter}</div>
     
      <div className="btns-container">
        <button onClick={decrement} className="mini ui negative button"> - </button>
        <button onClick={increment} className="mini ui positive button"> + </button>
        {/* <button className="btn-buy">Comprar {counter} </button> */}
      </div>
    </div>
  );
};

export default ItemCounter;
