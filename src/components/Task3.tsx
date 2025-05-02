import { useState } from "react";

const Task3 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p>{toggle ? "Включено" : "Выключено"}</p>
      <button onClick={handleToggle}> Переключатель</button>
    </div>
  );
};
export default Task3;
