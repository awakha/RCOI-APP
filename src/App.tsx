import Navigation from "./components/Navigation";
import UseState from "./components/UseState";
import UseStateSecond from "./components/UseSteteSecond.jsx";
import rcoiLogo from "./assets/rcoi.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <UseState />
      <UseStateSecond />
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
