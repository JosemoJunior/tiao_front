//import HeaderBeforeLogin from '../pages/HeaderBeforeLogin';
import NavBar from "../shared/components/Navbar/NavBar";
import NavBarCliente from "../shared/components/Navbar/NavBarCliente";
import NavBarProfissional from "../shared/components/Navbar/NavBarProfissional";
import HomeCliente from '../pages/HomeCliente';
import HomeProfissional from '../pages/HomeProfissional';
import ErrorScreen from '../pages/ErrorScreen';
import Register from '../pages/Register';
import React from 'react';
import FormLogin from "../shared/components/FormLogin/FormLogin";
import Home from '../pages/Home';
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
        <Route path="/" element={<NavBar />} />
        <Route path={LOGIN_PATH} element={<NavBar />} />
        <Route path={REGISTER_PATH} element={<NavBar />} />
        <Route path={CLIENTE_PATH} element={<NavBarCliente />} />
        <Route path={PROFISSIONAL_PATH} element={<NavBarProfissional />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={LOGIN_PATH} element={<FormLogin />} />
        <Route path={REGISTER_PATH} element={<Register />} />
        <Route path={CLIENTE_PATH} element={<HomeCliente />} />
        <Route path={PROFISSIONAL_PATH} element={<HomeProfissional />} />

        {/* Rotas de erros */}
        <Route path="/error/400" element={<ErrorScreen errorCode={400} />} />
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