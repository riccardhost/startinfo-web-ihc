import React from 'react';
import "../../styles/ModeloTutorial.css"; // Importe o arquivo CSS para os estilos

// Importa a Imagem do WhatsApp
import whatsapp from "../../assets/whatsapp.ico"; 

// Botão Returno - Ao clicar, redireciona para a página inicial (home)
import ButtonReturn from '../../components/buttonreturn/ButtonReturn';
import TutorialLogin from './TutorialLogin';

// Importe os componentes Navbar / Footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


export default function LoginEx() {

  return (

    <>

      {/* Componente - NAVBAR */}
      <Navbar/>

      {/* Componente - TUTORIAL DO EMAIL */}
      <TutorialLogin/> 

      {/* Componente - FOOTER */}
      <Footer />

      {/* Componente - WHATSAPP */}
      <div className="whatsapp-icon">
        <a href="https://api.whatsapp.com/send?phone=5581995150302" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp"/>
        </a>
      </div>

      {/* Componente - BottomReturn */}
      <div>
        
        <ButtonReturn />

      </div>

    </>

  );

}
