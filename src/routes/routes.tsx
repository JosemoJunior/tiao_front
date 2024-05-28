import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import HeaderBeforeLogin from '../pages/HeaderBeforeLogin';
import HeaderCliente from '../pages/HeaderCliente';
import HeaderProfissional from '../pages/HeaderProfissional';
import HomeCliente from '../pages/HomeCliente';
import HomeProfissional from '../pages/HomeProfissional';
import ErrorScreen from '../pages/ErrorScreen';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

const LOGIN_PATH = '/login';
const REGISTER_PATH = '/register';
const CLIENTE_PATH = '/cliente';
const PROFISSIONAL_PATH = '/profissional';

const RouterSwitch: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderBeforeLogin />} />
        <Route path={LOGIN_PATH} element={<HeaderBeforeLogin />} />
        <Route path={REGISTER_PATH} element={<HeaderBeforeLogin />} />
        <Route path={CLIENTE_PATH} element={<HeaderCliente />} />
        <Route path={PROFISSIONAL_PATH} element={<HeaderProfissional />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={REGISTER_PATH} element={<Login />} />
        <Route path={CLIENTE_PATH} element={<HomeCliente />} />
        <Route path={PROFISSIONAL_PATH} element={<HomeProfissional />} />

        {/* Rotas de erros */}
        <Route path="/error/403" element={<ErrorScreen errorCode={403} />} />
        <Route path="/error/404" element={<ErrorScreen errorCode={404} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterSwitch, 
          LOGIN_PATH,
          REGISTER_PATH,
          CLIENTE_PATH,
          PROFISSIONAL_PATH};