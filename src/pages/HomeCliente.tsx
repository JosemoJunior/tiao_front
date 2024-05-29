//import React from 'react';
import '../style/Home.css';
import { useAllProfissionalData } from '../hooks/useProfissionalData';
import { Card } from '../components/card/GenericCard';
import ErrorScreen from './ErrorScreen';


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
 const HomeCliente = () => {

  const { data } = useAllProfissionalData();

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
          <h2 className="section-title">Tela do Cliente!!!</h2>
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
          {data?.map(profissionalData => 
            <Card
            // profissoes
            name={profissionalData.name} 
            email={profissionalData.email} 
            phone={profissionalData.phone}
            phone2={profissionalData.phone2}
            birthday={profissionalData.birthday}
            cpf={profissionalData.cpf}
            bio={profissionalData.bio}
            profissoes={profissionalData.profissoes}
            />
            )}
          </div>
         </section>
      </div>
    ) : (
      <ErrorScreen errorCode={parseInt(localStorage.getItem("error") ?? "404")}/>
    )}
    </div>
  );
};

export default HomeCliente;