import React from "react";
import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["red", "violet", "blue"];

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const changeCountColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div>
      <h1 className={colors[colorIndex]} onMouseEnter={changeCountColor}>
        {count}
      </h1>
      <div className="btns">
        <div className="btn" onClick={increment}>
          +1
        </div>
        <div
          className={`btn ${count === 0 ? "disable" : ""}`}
          onClick={decrement}
        >
          -1
        </div>
      </div>
    </div>
  );
}

export default UseState;
