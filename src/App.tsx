import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import rcoiLogo from "./assets/rcoi.jpg";
import "./App.css";

// Заглушки для разных страниц
function About() {
  return <h2>О нас</h2>;
}

function News() {
  return <h2>Новости</h2>;
}

function Documents() {
  return <h2>Документы</h2>;
}

function G9() {
  return <h2>ГИА-9</h2>;
}

function G11() {
  return <h2>ГИА-11</h2>;
}

function Contacts() {
  return <h2>Контактная информация</h2>;
}

function App() {
  return (
    <div>
      <Navigation />
      <h1 className="title">
        ГКУ "Региональный центр обработки информации ЕГЭ и мониторинга качества
        образования Чеченской Республики"
      </h1>
      <p></p>
      <img src={rcoiLogo} alt="" />
      {/* Тут прописываем маршруты */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/g9" element={<G9 />} />
        <Route path="/g11" element={<G11 />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
