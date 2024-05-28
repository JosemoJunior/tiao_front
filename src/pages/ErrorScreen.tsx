//import React from 'react';

import { Link } from "react-router-dom";

interface ErrorScreenProps {
    errorCode: number;
  }

  const ErrorScreen: React.FC<ErrorScreenProps> = ({ errorCode }) => {
    let errorMessage = '';
  
    switch (errorCode) {
      case 403:
        errorMessage = 'Acesso proibido. Você não tem permissão para acessar esta página.';
        break;
      case 404:
        errorMessage = 'Página não encontrada. Verifique o URL e tente novamente.';
        break;
      default:
        errorMessage = 'Ocorreu um erro. Tente novamente mais tarde.';
    }
  
    return (
      <div className="error-screen">
        <h2>Erro {errorCode}</h2>
        <p>{errorMessage}</p>
        <p>{localStorage.getItem("error")}</p>

        <Link to="/"><button >Voltar</button></Link>
      </div>
    );
  };
  
  export default ErrorScreen;