import React from 'react';
import "../../styles/Footer.css";
import whatsapp from "../../assets/whatsapp.ico"; 

//importa o botão voltar ao topo!
import ScrollToTopButton from '../buttontop/ButtonTop';

export default function Footer() {

  return (

    <footer>

      <div className="container_footer">

        <div className="footer-row">

          <div className="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><a href="/quemsomos">Sobre</a></li>
              <li><a href="/">Termos de Uso</a></li>
              <li><a href="/">Política de Privacidade</a></li>
              <li><a href="/">Mapa do Site</a></li>
            </ul>
          </div>

          <div className="footer-links">

            <h4>Fale Conosco!</h4>

            <ul>
              <li><a href="mailto:suporte@letramentodigital.com">Via E-mail</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5581995150302">Via WhatsApp</a></li>
            </ul>

          </div>

          <div className="footer-links">

            <h4>Siga-nos!</h4>

            <ul className="social-links">
              <li><a href="/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="/"><i className="fab fa-youtube"></i></a></li>
              <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
            </ul>

          </div>

        </div>

      </div>

      {/* Role para baixo para ver o botão aparecer */}
      <div style={{ height: '0' }}>

        <ScrollToTopButton />

      </div>

      <div className="whatsapp-icon">
        <a href="https://api.whatsapp.com/send?phone=5581995150302" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp"/>
        </a>
      </div>
    
      <p> © 2025 Start Info | TODOS OS DIREITOS RESERVADOS. </p>

      <hr></hr>

    </footer>

  );

};
