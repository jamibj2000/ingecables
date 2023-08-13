import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar">ESTO</div>
        <div className="bar">AQUI</div>
        <div className="bar">ALLA</div>
      </div>
      <ul className="menu-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Menu;
