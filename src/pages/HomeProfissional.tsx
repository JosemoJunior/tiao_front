//import React from 'react';
import '../style/Home.css';
import { Card } from '../components/card/GenericCard';
import ErrorScreen from './ErrorScreen';
import { useUserData } from '../hooks/useUserData';


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

  const { data } = useUserData();

  return (
    <div>
    {data ? (
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
          <div className="card-grid">
            <Card
              name={data.name} 
              email={data.email} 
              phone={data.phone}
              phone2={data.phone2 || ''}
              birthday={data.birthday}
              cpf={data.cpf}
              bio={data.bio || ''}
              profissoes={data.profissoes || []}
            />
          </div>
         </section>
      </div>
    ) : (
      <ErrorScreen errorCode={parseInt(localStorage.getItem("error") ?? "404")}/>
    )}
    </div>
  );
};

export default HomeProfissional;