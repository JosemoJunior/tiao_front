//import React from 'react';
import './Header.css';
import logo from '../images/tiao.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="logo-text">TIÃO</h1>
      </div>
      <div>
        <button className="btn">Quero me cadastrar</button>
        <button className="btn btn-primary">Entrar</button>
      </div>
    </header>
  );
};

export default Header;