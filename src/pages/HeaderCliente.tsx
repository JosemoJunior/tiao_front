//import React from 'react';
import '../style/Header.css';
import logo from '../images/tiao.png'
import { Link } from 'react-router-dom';

// Adicionar Menu do Cliente
const HeaderCliente = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">TIÃO</h1>
        </div>
      </Link>
      <Link to="/">
        <div>
          <button className="btn">Logout</button>
        </div>
      </Link>
    </header>
  );
};

export default HeaderCliente;