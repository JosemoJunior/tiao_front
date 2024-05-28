//import React from 'react';
import '../style/Header.css';
import logo from '../images/tiao.png'
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../routes/routes'


const HeaderBeforeLogin = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">TIÃO</h1>
        </div>
      </Link>
      <div>
        <button className="btn">Quero me cadastrar</button>
        <Link to={LOGIN_PATH}><button className="btn btn-primary">Entrar</button></Link>
      </div>
    </header>
  );
};

export default HeaderBeforeLogin;