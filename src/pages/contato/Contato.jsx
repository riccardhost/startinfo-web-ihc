

import React, { useState } from "react";
import '../../styles/Contato.css';
import '../../styles/ContatoForms.css';

// Importando os componentes Header e Footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import { FaChevronDown } from "react-icons/fa";

const ContatoForms = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");  
  const [assunto, setAssunto] = useState("");    
  const [mensagem, setMensagem] = useState("");

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simplesmente exibe os dados no alerta
    alert(`Mensagem enviada por ${nome}!\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);

    // Limpar os campos após o envio
    setNome("");
    setEmail("");
    setTelefone("");
    setAssunto("");
    setMensagem("");
  };

  return (

    <>

      {/* Componente - NAVBAR */}
      <Navbar/>

      <main className="main-container">

        <div className="tituloTutorial">

          <h1> [ ENTRE EM CONTATO CONOSCO! ] </h1>

        </div>

        <div className="contato-container">

          <h3>Preencha atentamente os campos abaixo: </h3>

          <form onSubmit={handleSubmit}>

            <div className="input-container">

              <label htmlFor="nome">Nome Completo:</label>

              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder="Digite seu nome completo"
              />

            </div>

            <div className="input-container">

              <label htmlFor="email">E-mail:</label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
              />

            </div>

            <div className="input-container">

              <label htmlFor="telefone">Telefone:</label>

              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                placeholder="Ex: (XX) XXXXX-XXXX"
                maxLength="15"
              />

            </div>

            <div className="input-container">

              <label htmlFor="assunto">Assunto:</label>

              <div className="select-container">
                <select
                  id="assunto"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  required
                  aria-label="Assunto"
                >
                  <option value="" disabled>Selecione um assunto</option>
                  <option value="suporte">Suporte</option>
                  <option value="vendas">Vendas</option>
                  <option value="informacoes">Informações</option>
                  <option value="outros">Outros</option>
                </select>

                <FaChevronDown className="select-icon" /> {/* Ícone de seta */}

              </div>

            </div>

            <div className="input-container">

              <label htmlFor="mensagem">Mensagem:</label>

              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                placeholder="Digite sua mensagem..."
              >
              </textarea>

            </div>

            <button type="submit" className="submit-btn"> ENVIAR </button>

          </form>

        </div>

      </main>

      {/* Adicionando o componente Footer */}
      <Footer />

    </>

  );

};

export default ContatoForms;
