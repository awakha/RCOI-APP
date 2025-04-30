import { useState } from "react";

const UseStateSecond = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <div className="btns">
        <div className="btn" onClick={increment}>
          +1
        </div>
        <div className="btn" onClick={decrement}>
          -1
        </div>
      </div>
    </>
  );
};

export default UseStateSecond;
