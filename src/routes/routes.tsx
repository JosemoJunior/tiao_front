import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomeCliente from '../pages/HomeCli';
import HomeProfissional from '../pages/HomePro';
import ErrorScreen from '../pages/ErrorScreen';
import Register from '../pages/Register';
import FormLogin from "../shared/components/FormLogin/FormLogin";
import Home from '../pages/Home2';
import Profile from '../pages/Profile';
import { CLIENTE, PROFISSIONAL } from '../config';
import {
  LOGIN_PATH,
  REGISTER_PATH,
  CLIENTE_PATH,
  PROFISSIONAL_PATH
} from '../utils/paths';


const RouterSwitch: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout type="home" />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={LOGIN_PATH} element={<Layout type="login" />}>
          <Route index element={<FormLogin />} />
        </Route>
        <Route path={REGISTER_PATH} element={<Layout type="signup" />}>
          <Route path="cliente" element={<Register type={CLIENTE} />} />
          <Route path="profissional" element={<Register type={PROFISSIONAL} />} />
        </Route>
        <Route path={CLIENTE_PATH} element={<Layout type="client" />}>
          <Route index element={<HomeCliente />} />
        </Route>
        <Route path={PROFISSIONAL_PATH} element={<Layout type="professional" />}>
          <Route index element={<HomeProfissional />} />
        </Route>
        <Route path="/profile/:email" element={<Layout type="professional" />}>
          <Route index element={<Profile />} />
        </Route>
        {/* Rotas de erros */}
        <Route path="/error/400" element={<ErrorScreen errorCode={400} />} />
        <Route path="/error/403" element={<ErrorScreen errorCode={403} />} />
        <Route path="/error/404" element={<ErrorScreen errorCode={404} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterSwitch };