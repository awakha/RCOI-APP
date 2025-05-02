// 1. Сделай компонент с текстом "Включено" или "Выключено" и кнопкой. По клику на кнопку состояние текста должно переключаться между этими значениями.
import { useState } from "react";

const Task1 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p>{toggle ? "Включено" : "Выключено"}</p>
      <button onClick={handleToggle}>Переключить</button>
    </div>
  );
};
export default Task1;
