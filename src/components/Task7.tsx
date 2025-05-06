// Создайте компонент "Простой калькулятор". Создайте два поля, в одном пользователь будет вводить одно значение, а другом второе. При нажатии на кнопку в диве должен отображаться текст "Ваш ответ: " и сумма двух значений из полей ввода.

import { useState } from "react";

const Task7 = () => {
  const [base, setBase] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [result, setResult] = useState(0);

  const sum = () => {
    setResult(Number(base) + Number(increment));
  };
  return (
    <div>
      <div>
        <p>Первое значение</p>
        <input
          type="text"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <p>Второе значение</p>
        <input
          type="text"
          value={increment}
          onChange={(e) => setIncrement(e.target.value)}
        />
      </div>
      <button onClick={sum}>Вывести сумму</button>
      <p>Ваш ответ: {result}</p>
    </div>
  );
};
export default Task7;
