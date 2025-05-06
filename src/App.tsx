import rcoiLogo from "./assets/rcoi.jpg";

import Colors from "./components/Colors.js";
import Counter from "./components/Counter.js";

import Task1 from "./components/Task1.tsx";
import Task2 from "./components/Task2.tsx";
import Task3 from "./components/Task3.tsx";
import Task4 from "./components/Task4.tsx";
import Task5 from "./components/Task5.tsx";
import Task6 from "./components/Task6.tsx";
import Task7 from "./components/Task7.tsx";

import "./App.css";

function App() {
  return (
    <div>
      <Colors />
      <Counter />
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
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
