import { useState } from "react";

const Task2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p> {toggle ? "Включено" : "Выключено"} </p>
      <button onClick={handleToggle}>Переключить</button>
    </div>
  );
};
export default Task2;
