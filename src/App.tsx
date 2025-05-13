import rcoiLogo from "./assets/rcoi.jpg";

import Task1 from "./components/Task1.tsx";
import Task2 from "./components/Task2.tsx";
import Task3 from "./components/Task3.tsx";
import Task5 from "./components/Task5.tsx";
import Task6 from "./components/Task6.tsx";
import Task7 from "./components/Task7.tsx";

import Button from "./components/Task11.tsx";
import UserCard from "./components/Task12.tsx";
import StarRating from "./components/Task13.tsx";
import Library from "./components/Task14.tsx";

import "./App.css";

function App() {
  const users = [
    { name: "Ava", age: 25, occupation: "programmer" },
    { name: "Dora", age: 26, occupation: "teacher" },
    { name: "Alex", age: 32, occupation: "engineer" },
    { name: "Daisy", age: 25, occupation: "programmer" },
    { name: "Nensy", age: 23, occupation: "programmer" },
  ];
  const raitingArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Button label="Купить" />
      <Button label="Подробнее" />

      {users.map(({ name, age, occupation }, i) => (
        <UserCard name={name} age={age} occupation={occupation} key={i} />
      ))}
      {raitingArray.map((num, index) => (
        <StarRating key={index} rating={num} />
      ))}
      <Library />

      <h1 className="title">
        ГКУ "Региональный центр обработки информации ЕГЭ и мониторинга качества
        образования Чеченской Республики"
      </h1>
      <p></p>
      <img src={rcoiLogo} alt="" />
    </div>
  );
}

export default App;
