//import React from 'react';
import '../style/Home.css';

const tipoUsuario = () => {
  if (localStorage.getItem('type') == 'C') {
    return 'Cliente';
  } else if (localStorage.getItem('type') == 'P'){
    return 'Profissional';
  } else {
    return 'Sem definição';
  }
}

// Componente Principal
const HomeProfissional = () => {
  return (
    <div className="tiao-component">
      <div className="decorative-elements">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
      </div>
      <section className="main-section">
        <h2 className="section-title">Tela do Profissional!!!</h2>
        <h3 className="section-description">
          Bem vindo, {localStorage.getItem('name')}
        </h3>
        <p className="section-description">
          Você é um {tipoUsuario()}
        </p>
        <p className="section-description">
          Seu Token: {localStorage.getItem('token')}
        </p>
       </section>
    </div>
  );
};

export default HomeProfissional;