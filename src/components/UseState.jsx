import React from "react";

function UseState() {
  let x = 0;
  const inc = () => {
    x++;
    console.log(x);
  };
  return (
    <div>
      <h1>{x}</h1>
      <div className="btns">
        <div className="btn" onClick={inc}>
          +1
        </div>
        <div className="btn">-1</div>
      </div>
    </div>
  );
}

export default UseState;
