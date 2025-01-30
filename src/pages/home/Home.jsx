
import React from 'react';
import '../../styles/Home.css';  
import '../../styles/Carrossel.css'; 
import '../../styles/SaibaMais.css'; 

import { Link } from "react-router-dom";

import idoso from "../../assets/idoso3.png";
import atividades from "../../assets/atividades.png";
import comunidade from "../../assets/acolhimento2.png";
import casal_idosos from "../../assets/casal_idosos-removebg.png";

import Carrossel from '../../components/carrossel/Carrossel';

// Importe os componentes Navbar, Header e Footer
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Home() {

  return (

    <>

      {/* Componente - NAVBAR */}
      <Navbar/>

      {/* Adicionando o componente Header */}
      <Header/>

        <main >

          <div className="tituloHome">
            <h2>Felicidade no Letramento Digital</h2>
            <Carrossel />
            <p>
              Nosso objetivo é proporcionar aos idosos o desenvolvimento de habilidades digitais de maneira <strong style={{ color: 'blue' }}> SIMPLES</strong>, <strong style={{ color: 'green' }}> PRÁTICA </strong> e <strong style={{ color: 'red' }}> PRAZEROSA</strong>, promovendo autonomia e bem-estar através da #TECNOLOGIA.
            </p>
          </div>

          <div className="cardsHome">
            <div className="cardHome">
              <h3>Aprenda no Seu Ritmo!</h3>
              <img src={idoso} alt="Icone de Mão com Coração" className="idoso" />
              <p>Tutoriais simples e fáceis de acompanhar.</p>
            </div>

            <div className="cardHome">
              <h3>Atividades Interativas</h3>
              <img src={atividades} alt="Logomarca de Atividades" className="atividades" />
              <p>Pratique suas novas habilidades com exercícios.</p>
            </div>

            <div className="cardHome">
              <h3>Comunidade Acolhedora</h3>
              <img src={comunidade} alt="Logomarca de Comunidade" className="comunidade" />
              <p>Conecte-se com outros aprendizes e compartilhe experiências.</p>
            </div>

            <div className="containerCasal">

              <div className="image">
                <img src={casal_idosos} alt="Imagem exemplo" />
              </div>

              <div className="text">
                <h1>Projeto Start Info</h1>
                <p>É um projeto focado no Letramento Digital para Idosos, com o objetivo de promover a inclusão digital e melhorar a qualidade de vida dessa população. Através deste projeto, buscamos ensinar aos idosos como utilizar a tecnologia de maneira segura e eficiente, permitindo que se conectem com o mundo digital e acessem uma variedade de serviços e recursos.</p>
                
                {/* Link Saiba mais */}
                <Link to="/quemsomos#projeto" className="link-saiba-mais">
                  Saiba mais...
                </Link>

              </div>

            </div>

          </div>

        </main>

      {/* Adicionando o componente Footer */}
      <Footer />

    </>

  );

}
