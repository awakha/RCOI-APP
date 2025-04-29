import React from "react";

const Navigation = () => {
  return (
    <nav className="nav">
      <a to="/about" className="nav__item">
        О нас
      </a>
      <a to="/news" className="nav__item">
        Новости
      </a>
      <a to="/documents" className="nav__item">
        Документы
      </a>
      <a to="/g9" className="nav__item">
        ГИА-9
      </a>
      <a to="/g11" className="nav__item">
        ГИА-11
      </a>
      <a to="/contacts" className="nav__item">
        Контактная информация
      </a>
    </nav>
  );
};

export default Navigation;
