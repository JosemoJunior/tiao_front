import NavBar from "../shared/components/Navbar/NavBar";
import HomeCliente from '../pages/HomeCliente';
import HomeProfissional from '../pages/HomeProfissional';
import ErrorScreen from '../pages/ErrorScreen';
import Register from '../pages/Register';
import React from 'react';
import FormLogin from "../shared/components/FormLogin/FormLogin";
import Home from '../pages/Home';
import { CLIENTE, PROFISSIONAL } from '../config';
import {
  LOGIN_PATH,
  REGISTER_PATH, 
  CLIENTE_PATH, 
  PROFISSIONAL_PATH
} from '../utils/paths';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


const RouterSwitch: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar type="home" />} />
        <Route path={LOGIN_PATH} element={<NavBar type="login"/>} />
        <Route path={REGISTER_PATH+'/*'} element={<NavBar type="signup"/>} />
        <Route path={CLIENTE_PATH} element={<NavBar type="client"/>} />
        <Route path={PROFISSIONAL_PATH} element={<NavBar type="professional"/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={LOGIN_PATH} element={<FormLogin />} />
        <Route path={REGISTER_PATH+CLIENTE_PATH} element={<Register type={CLIENTE} />} />
        <Route path={REGISTER_PATH+PROFISSIONAL_PATH} element={<Register type={PROFISSIONAL} />} />
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