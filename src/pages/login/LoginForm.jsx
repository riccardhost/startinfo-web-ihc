

import axios from 'axios'; // Adicionando a importação do axios
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../components/util/Util';
import { registerSuccessfulLoginForJwt } from '../../components/util/AuthenticationService';

import whatsapp from "../../assets/whatsapp.ico"; 

// Botão Returno - Ao clicar, redireciona para a página inicial (home)
import ButtonReturn from '../../components/buttonreturn/ButtonReturn';

// Importando a logomarca
import logo from '../../assets/startinfox.png'; // Ajuste o caminho conforme necessário

export default function LoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Função de validação
  const validateForm = () => {
    const errors = {};
    
    // Validação do e-mail
    if (!username) {
      errors.username = 'O e-mail é obrigatório!';
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      errors.username = 'E-mail inválido!';
    }

    // Validação da senha
    if (!password) {
      errors.password = 'A senha é obrigatória!';
    } else if (password.length < 8) {
      errors.password = 'A senha deve ter pelo menos 8 caracteres!';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Evita o comportamento padrão do formulário
  function logar(e) {
    e.preventDefault();  

    if (!validateForm()) {
      return;
    }

    let authenticationRequest = {
      username: username,
      password: password,
    };

    axios.post("http://localhost:8085/api/auth", authenticationRequest)
      .then((response) => {
        notifySuccess('Usuário logado com sucesso!');
        registerSuccessfulLoginForJwt(response.data.token, response.data.expiration);
        navigate("/");
      })
      .catch((error) => {
        notifyError('Usuário não encontrado!');
      });
  }
 
  // Função para lidar com a "Esqueceu a Senha?"
  function handleForgotPassword() {
    notifyError('Redirecionar para recuperação de senha!');
  }

  return (

    <>

      <div className="login-formulario">

        {/* Logomarca com a caixa de texto sobreposta */}
        <div className="logo-container">
          
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div className="text-overlay">
            <h1>Seja bem-vindo <br />ao nosso Website!</h1>
            <p>Acesse a Sua Conta para continuar explorando os nossos conteúdos!</p>
          </div>

        </div>

        <form className="formulary-login" onSubmit={logar}>

          <h3> FAÇA SEU LOGIN </h3>

          <div className="input-group">
            <label htmlFor="username">E-mail</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="exemplo@dominio.com"
              required
            />

            {errors.username && <span className="error">{errors.username}</span>}

          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />

            {errors.password && <span className="error">{errors.password}</span>}

          </div>

          <div className="input-group">
            <button type="submit" className="buttonLogin">ENTRAR</button>
          </div>

          <div className="forgot-password">
            
            <button onClick={handleForgotPassword} className="forgot-password-btn">
              <p>Esqueceu a Senha?</p>
            </button>

          </div>

        </form>

      </div>

      <div className="whatsapp-icon">

        <a href="https://api.whatsapp.com/send?phone=5581995150302" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp"/>
        </a>

      </div>

      {/* Usando o componente BottomReturn */}
      <div>
        <ButtonReturn />
      </div>
      
    </>

  );

}
