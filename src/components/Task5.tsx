// 2. Создай компонент с кнопкой и заголовком (например, <h1>). При каждом клике на кнопку текст в заголовке должен изменяться на случайную фразу из массива (например, массив из пяти разных фраз).

import { useState } from "react";

const phrases = [
  "Хавашка учится с душой",
  "Код Хавашки — чистый и аккуратный",
  "Хавашка не сдаётся, даже если сложно",
  "Каждый день Хавашка становится сильнее",
  "Frontend — это путь, который Хавашка точно пройдёт",
];
const Task5 = () => {
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle + 1) % phrases.length);
  };
  return (
    <div>
      <p>{phrases[toggle]}</p>
      <button onClick={handleToggle}> Изменить фразу</button>
    </div>
  );
};
export default Task5;
