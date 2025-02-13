
import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/Tutoriais.css';

import pix from "../../assets/pix.png";
import whatsApp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";

// Importando os componentes Header e Footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Tutoriais() {

  return (

    <>
    
      {/* Componente - NAVBAR */}
      <Navbar/>

      <main >

        <div className="tituloTutorial">
          <h2>Tutoriais</h2>
          <p>Aprenda a usar a tecnologia no seu dia a dia, da melhor forma possível:</p>
        </div>

        <div className="cardsTutorial">

          <div className="cardTutorial">
            <h3>Aprenda a se cadastrar</h3>
            <img src={pix} alt="Logomarca do Pix" className="pix" />
            <Link to="/tutoriais/cadastro"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda a fazer o login</h3>
            <img src={whatsApp} alt="Logomarca do WhatsApp" className="whatsapp" />
            <Link to="/tutoriais/loginex"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda como salvar um contato</h3>
            <img src={email} alt="Logomarca do E-mail" className="email" />
            <Link to="/tutoriais/salvacontato"><p> Saiba mais! </p></Link>
          </div>

        </div>

        <br /><br />

        <div className="cardsTutorial">

          <div className="cardTutorial">
            <h3>Aprenda a Usar o PIX!</h3>
            <img src={pix} alt="Logomarca do Pix" className="pix" />
            <Link to="/tutoriais/pix"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda a Usar o WhatsApp</h3>
            <img src={whatsApp} alt="Logomarca do WhatsApp" className="whatsapp" />
            <Link to="/tutoriais/whatsapp"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda a Usar o E-mail</h3>
            <img src={email} alt="Logomarca do E-mail" className="email" />
            <Link to="/tutoriais/email"><p> Saiba mais! </p></Link>
          </div>

        </div>

        <br /><br />

        <div className="cardsTutorial">

          <div className="cardTutorial">
            <h3>Aprenda a Usar o PIX!</h3>
            <img src={pix} alt="Logomarca do Pix" className="pix" />
            <Link to="/tutoriais/pix"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda a Usar o WhatsApp</h3>
            <img src={whatsApp} alt="Logomarca do WhatsApp" className="whatsapp" />
            <Link to="/tutoriais/whatsapp"><p> Saiba mais! </p></Link>
          </div>

          <div className="cardTutorial">
            <h3>Aprenda a Usar o E-mail</h3>
            <img src={email} alt="Logomarca do E-mail" className="email" />
            <Link to="/tutoriais/email"><p> Saiba mais! </p></Link>
          </div>

        </div>

        <br /><br />

      </main>

      {/* Adicionando o componente Footer */}
      <Footer />

    </>

  );

}
