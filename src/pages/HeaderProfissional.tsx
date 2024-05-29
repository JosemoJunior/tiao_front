//import React from 'react';
import '../style/Header.css';
import logo from '../images/tiao.png'
import { Link } from 'react-router-dom';
import logout from '../utils/authUtils';

// Adicionar Menu do Profissional
const HeaderProfissional = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">TIÃO</h1>
        </div>
      </Link>
      <Link to="/login">
        <div>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      </Link>
    </header>
  );
};

export default HeaderProfissional;