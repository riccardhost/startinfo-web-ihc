

import React from 'react';
import "../../styles/LoginForm.css"; // Importe o arquivo CSS para os estilos

import LoginForm from '../../pages/login/LoginForm';
import celularIdosoImage from '../../assets/banner-idosos04png.png'; // Importação da imagem

export default function Login() {

  return (

    <>

      <div className="app-containerLogin"> {/* Alterei para seguir o padrão com o prefixo correto */}

        <div className="form-containerLogin"> {/* Alterei para seguir o padrão com o prefixo correto */}

          <LoginForm /> {/* O componente do formulário de login */}

        </div>

        <div className="image-containerLogin"> {/* Alterei para seguir o padrão com o prefixo correto */}

          <img src={celularIdosoImage} alt="Celular e idoso" /> {/* Exibe a imagem */}

        </div>

      </div>

    </>

  );

}
