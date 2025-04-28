import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/about" className="nav__item">
        О нас
      </Link>
      <Link to="/news" className="nav__item">
        Новости
      </Link>
      <Link to="/documents" className="nav__item">
        Документы
      </Link>
      <Link to="/g9" className="nav__item">
        ГИА-9
      </Link>
      <Link to="/g11" className="nav__item">
        ГИА-11
      </Link>
      <Link to="/contacts" className="nav__item">
        Контактная информация
      </Link>
    </nav>
  );
};

export default Navigation;
