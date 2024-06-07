import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/components/Navbar/NavBar';

type LayoutProps = {
  type: 'login' | 'signup' | 'professional' | 'home' | 'client' | '';
};

const Layout: React.FC<LayoutProps> = ({ type }) => {
  return (
    <>
      <NavBar type={type} />
      <Outlet />
    </>
  );
};

export default Layout;