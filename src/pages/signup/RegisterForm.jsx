

import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from '../../components/util/Util';
import { registerSuccessfulLoginForJwt } from '../../components/util/AuthenticationService';

import whatsapp from "../../assets/whatsapp.ico";

// Botão Returno - Ao clicar, redireciona para a página inicial (home)
import ButtonReturn from '../../components/buttonreturn/ButtonReturn';

// Importando a logomarca
import logo from '../../assets/startinfox.png'; // Ajuste o caminho conforme necessário

export default function RegisterForm() {

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foneCelular, setFoneCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    // Validação do nome completo
    if (!nomeCompleto) {
      errors.nomeCompleto = "Nome completo é obrigatório!";
    }

    // Validação do e-mail
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.username = "E-mail inválido!";
    }

    // Validação da senha
    if (!password || password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres!";
    }

    // Validação do telefone
    if (!foneCelular || !/^\(\d{2}\)\s\d{5}-\d{4}$/.test(foneCelular)) {
      errors.foneCelular = "Telefone inválido! Use o formato (XX) XXXXX-XXXX";
    }

    // Validação do CPF
    if (!cpf || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      errors.cpf = "CPF inválido! Use o formato XXX.XXX.XXX-XX";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };


  // Função para formatar o telefone (XXX) XXXXX-XXXX
  const formatPhone = (value) => {
    // Remove tudo o que não for número
    let formattedValue = value.replace(/\D/g, '');

    // Aplica a máscara, com o limite de 15 caracteres
    if (formattedValue.length <= 2) {
      formattedValue = `(${formattedValue}`;
    } else if (formattedValue.length <= 7) {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`;
    } else {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
    }

    // Limita a 15 caracteres, incluindo a máscara
    return formattedValue.slice(0, 15);
  };


  // Função para formatar o CPF XXX.XXX.XXX-XX
  const formatCPF = (value) => {
    // Remove tudo o que não for número
    let formattedValue = value.replace(/\D/g, '');

    // Limita a 11 números
    if (formattedValue.length > 11) {
      formattedValue = formattedValue.slice(0, 11);
    }

    // Aplica a máscara do CPF (XXX.XXX.XXX-XX)
    if (formattedValue.length <= 3) {
      formattedValue = formattedValue.slice(0, 3);
    } else if (formattedValue.length <= 6) {
      formattedValue = `${formattedValue.slice(0, 3)}.${formattedValue.slice(3, 6)}`;
    } else if (formattedValue.length <= 9) {
      formattedValue = `${formattedValue.slice(0, 3)}.${formattedValue.slice(3, 6)}.${formattedValue.slice(6, 9)}`;
    } else {
      formattedValue = `${formattedValue.slice(0, 3)}.${formattedValue.slice(3, 6)}.${formattedValue.slice(6, 9)}-${formattedValue.slice(9, 11)}`;
    }

    return formattedValue;
  };

  
  const cadastrar = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let clienteRequest = {
      nomeCompleto: nomeCompleto,
      email: email,
      password: password,
      cpf: cpf,
      foneCelular: foneCelular,
    };

    axios.post("http://localhost:8085/api/cliente", clienteRequest)
      .then((response) => {
        notifySuccess('Cliente cadastrado com sucesso!', response);

        // Supondo que o token e o ID sejam retornados na resposta
        const { token, clienteId } = response.data;

        // Armazenar ID do cliente e token no localStorage
        localStorage.setItem("clienteId", clienteId);
        localStorage.setItem("token", token);

        // Realizar o login com o token JWT
        registerSuccessfulLoginForJwt(token);

        // Limpar os campos do formulário
        setNomeCompleto('');
        setEmail('');
        setPassword('');
        setFoneCelular('');
        setCpf('');

        // Redirecionar para a página do cliente ou home após o cadastro
        navigate(`/perfil/user/`); // Página de perfil do cliente, por exemplo
      })
      .catch((error) => {
        notifyError('Erro ao incluir o um cliente!', error);
      });
  };


  return (

    <>

      <div className="register-formulario">

        {/* Logomarca com a caixa de texto sobreposta */}
        <div className="logo-container">

          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div className="text-overlay">
            <h1>Seja bem-vindo <br />ao nosso Website!</h1>
            <p>Crie a Sua Conta para continuar explorando os nossos conteúdos!</p>
          </div>

        </div>

        <form className="formulary-register" onSubmit={cadastrar}>

          <h3>FAÇA SEU CADASTRO</h3>

          <div className="input-group">
            <label htmlFor="fullName">Nome Completo</label>
            <input
              type="text"
              id="fullName"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder="Digite seu nome completo"
              required
            />

            {errors.nomeCompleto && <span className="error">{errors.nomeCompleto}</span>}

          </div>

          <div className="input-group">
            <label htmlFor="username">E-mail</label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Crie uma senha segura"
              required
            />

            {errors.password && <span className="error">{errors.password}</span>}

          </div>

          <div className="input-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              id="phone"
              value={foneCelular}
              onChange={(e) => setFoneCelular(formatPhone(e.target.value))}
              placeholder="(XX) XXXXX-XXXX"
              required
            />

            {errors.foneCelular && <span className="error">{errors.foneCelular}</span>}

          </div>

          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(formatCPF(e.target.value))}
              placeholder="Digite seu CPF"
              required
            />

            {errors.cpf && <span className="error">{errors.cpf}</span>}

          </div>

          <div className="input-group">
            <button type="submit" className="buttonRegister">CADASTRAR</button>
          </div>

        </form>

      </div>

      <div className="whatsapp-icon">

        <a href="https://api.whatsapp.com/send?phone=5581995150302" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>

      </div>

      {/* Usando o componente BottomReturn */}
      <div>
        <ButtonReturn />
      </div>

    </>

  );

}
