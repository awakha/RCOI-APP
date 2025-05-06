// Создайте компонент "Конвертер градусов Цельсия в градусы Фаренгейта". Компонент должен содержать два поля ввода для значения в градусах Цельсия и градусах Фаренгейта. После ввода значения в одно из полей, другое поле должно автоматически обновляться в соответствии с формулой конвертации.
import { useState } from "react";

const Task6 = () => {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsium, setCelsium] = useState(0);

  const handleCelsium = (value) => {
    setFahrenheit(value);
    setCelsium(((value - 32) * 5) / 9);
  };
  const handleFahrenheit = (value) => {
    setCelsium(value);
    setFahrenheit((value * 9) / 5 + 32);
  };

  return (
    <div>
      <input
        type="text"
        value={fahrenheit}
        onChange={(e) => handleFahrenheit(e.target.value)}
      />
      <p>Градус Фаренгейта</p>
      <input
        type="text"
        value={celsium}
        onChange={(e) => handleCelsium(e.target.value)}
      />
      <p>Градус Цельсия</p>
    </div>
  );
};
export default Task6;
