

import React from 'react';
import "../../styles/RegisterForm.css"; // Importe o arquivo CSS para os estilos

import RegisterForm from '../../pages/signup/RegisterForm';
import celularIdosoImage from '../../assets/banner-idosos04png.png'; // Importação da imagem

export default function Signup() {

  return (

    <>

      <div className="app-containerRegister"> {/* Alterei para seguir o padrão com o prefixo correto */}

        <div className="form-containerRegister"> {/* Alterei para seguir o padrão com o prefixo correto */}

          <RegisterForm /> {/* O componente do formulário de login */}

        </div>

        <div className="image-containerRegister"> {/* Alterei para seguir o padrão com o prefixo correto */}

          <img src={celularIdosoImage} alt="Celular e idoso" /> {/* Exibe a imagem */}

        </div>

      </div>

    </>

  );

}
