import { useState } from "react";

const phrases = ["Привет", "Ты молодец", "Продолжай"];

const Task3 = () => {
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle + 1) % phrases.length);
  };
  return (
    <div>
      <p>{phrases[toggle]}</p>
      <button onClick={handleToggle}> Переключатель</button>
    </div>
  );
};
export default Task3;
