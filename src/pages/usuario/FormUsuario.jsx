

import axios from "axios";
import React, { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from '../../components/util/Util';

import ProfilePic from "../../assets/default-profile.png"; // Foto padrão de perfil
import whatsapp from "../../assets/whatsapp.ico";
import ButtonReturn from '../../components/buttonreturn/ButtonReturn';
import Navbar from '../../components/navbar/Navbar';

const FormUsuario = ({ user, onUpdate, state }) => {
  
  const [editing, setEditing] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [nomeCompleto, setNomeCompleto] = useState(user?.nomeCompleto || '');
  const [dataNascimento, setDataNascimento] = useState(user?.dataNascimento || '');
  const [cpf, setCpf] = useState(user?.cpf || '');
  const [foneCelular, setFoneCelular] = useState(user?.foneCelular || '');
  
  const [username, setUsername] = useState(user?.username || '');
  const [password, setPassword] = useState(user?.password || '');
  
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');

  const handleEditProfile = () => {
    setEditing(!editing);
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      onUpdate({
        photo: photo || user?.photo, // Mantém a foto anterior se nenhuma nova for carregada
        nomeCompleto,
        dataNascimento,
        cpf,
        foneCelular,
        username,
        password,
      });
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    // Restaura os valores anteriores ao editar
    setNomeCompleto(user?.nomeCompleto || '');
    setDataNascimento(user?.dataNascimento || '');
    setCpf(user?.cpf || '');
    setFoneCelular(user?.foneCelular || '');
    setUsername(user?.username || '');
    setPassword(user?.password || '');
    setPhoto(null);
    setError(''); // Limpa o erro
  };

  useEffect(() => {
    if (state && state.id) { // Verifique se o estado está disponível e se tem um id
      axios.get(`http://localhost:8085/api/cliente/` + this.state.id)
        .then((response) => {
          notifySuccess("Sucesso ao carregar cliente", error);
        })
        .catch((error) => {
          notifyError("Erro ao carregar cliente", error);
        });
    }
  }, [state, error]); // Agora inclui o 'error' como dependência

  // Validação da fotografia
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "image/jpeg") {
      if (file.size <= 2 * 1024 * 1024) {
        setPhoto(file);
        setError('');
      } else {
        setError("O arquivo é muito grande. O tamanho máximo é 2MB.");
      }
    } else {
      setError("Por favor, carregue uma imagem no formato JPG.");
    }
  };

  // Validação dos campos - INPUT
  const validateForm = () => {
    const errors = {};

    if (!nomeCompleto) {
      errors.nomeCompleto = "Nome completo é obrigatório!";
    }

    if (!username || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(username)) {
      errors.username = "E-mail inválido!";
    }

    if (!password || password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres!";
    }

    if (!foneCelular || !/^\(\d{2}\)\s\d{5}-\d{4}$/.test(foneCelular)) {
      errors.foneCelular = "Telefone inválido! Use o formato (XX) XXXXX-XXXX";
    }

    if (!cpf || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      errors.cpf = "CPF inválido! Use o formato XXX.XXX.XXX-XX";
    }

    if (!dataNascimento || !/\d{2}\/\d{2}\/\d{4}/.test(dataNascimento)) {
      errors.dataNascimento = "Data de nascimento inválida! Use o formato DD/MM/AAAA";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Formatação do telefone
  const formatPhone = (value) => {
    let formattedValue = value.replace(/\D/g, '');
    if (formattedValue.length <= 2) {
      formattedValue = `(${formattedValue}`;
    } else if (formattedValue.length <= 7) {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`;
    } else {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
    }
    return formattedValue.slice(0, 15);
  };

  // Formatação da data de nascimento
  const formatDataNascimento = (value) => {
    value = value.replace(/\D/g, ''); // Remove não numéricos
    if (value.length > 8) value = value.slice(0, 8); // Limita a 8 caracteres
    return value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Formato DD/MM/YYYY
  };

  // Formatação do CPF
  const formatCPF = (value) => {
    let formattedValue = value.replace(/\D/g, '');
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

  return (
    <>
      <Navbar />

      <div className="usuario-profile-container">
        <div className="usuario-profile-header">
          <img
            src={photo ? URL.createObjectURL(photo) : ProfilePic}
            alt="Foto de Perfil"
            className="usuario-profile-photo"
          />
          <h2>{user.nomeCompleto}</h2>
          <p>{user.biografia}</p>
        </div>

        <div className="usuario-profile-info">

          {editing ? ( 

            <div className="usuario-edit-profile-form">
              <div className="usuario-input-group">
                <label htmlFor="photo">Foto do Perfil: </label>
                <input
                  id="photo"
                  type="file"
                  accept=".jpg,.jpeg"
                  onChange={handleFileChange}
                  className="usuario-input-field"
                />

                {error && <p className="error-message">{error}</p>}
              </div>

              <div className="usuario-input-group">
                <label htmlFor="nomeCompleto">Nome Completo: </label>
                <input
                  id="nomeCompleto"
                  type="text"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  placeholder="Seu nome completo"
                  className="usuario-input-field"
                />

                {errors.nomeCompleto && <span className="error">{errors.nomeCompleto}</span>}
                
              </div>

              <div className="usuario-input-group">
                <label htmlFor="dataNascimento">Data de Nascimento: </label>
                <input
                  type="text"
                  id="dataNascimento"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(formatDataNascimento(e.target.value))}
                  placeholder="DD/MM/AAAA"
                  required
                  className="usuario-input-field"
                />

                {errors.dataNascimento && <span className="error">{errors.dataNascimento}</span>}
              </div>

              <div className="usuario-input-group">
                <label htmlFor="cpf">CPF: </label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(formatCPF(e.target.value))}
                  placeholder="Digite seu CPF"
                  required
                  className="usuario-input-field"
                />

                {errors.cpf && <span className="error">{errors.cpf}</span>}
              </div>

              <div className="usuario-input-group">
                <label htmlFor="phone">Telefone: </label>
                <input
                  type="text"
                  id="phone"
                  value={foneCelular}
                  onChange={(e) => setFoneCelular(formatPhone(e.target.value))}
                  placeholder="(XX) XXXXX-XXXX"
                  required
                  className="usuario-input-field"
                />

                {errors.foneCelular && <span className="error">{errors.foneCelular}</span>}
                
              </div>

              <div className="usuario-input-group">
                <label htmlFor="username">E-mail: </label>
                <input
                  id="username"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Seu E-mail"
                  className="usuario-input-field"
                />

                {errors.username && <span className="error">{errors.username}</span>}
              </div>

              <div className="usuario-input-group">
                <label htmlFor="password">Senha: </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha"
                  className="usuario-input-field"
                />
              </div>

              <button onClick={handleSaveChanges} className="usuario-save-btn">
                SALVAR
              </button>

              <button onClick={handleCancel} className="usuario-cancel-btn">
                CANCELAR
              </button>

            </div>

          ) : ( 

            <div className="usuario-view-profile-info">
              <p><strong>Nome:</strong> {user.nomeCompleto}</p>
              <p><strong>Data de Nascimento:</strong> {user.dataNascimento}</p>
              <p><strong>CPF:</strong> {user.cpf}</p>
              <p><strong>Celular:</strong> {user.foneCelular}</p>
              <p><strong>E-mail:</strong> {user.username}</p>
              <p><strong>Senha:</strong> {user.password.replace(/./g, '*')}</p>
              
              <button onClick={handleEditProfile} className="usuario-edit-btn">
                EDITAR
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="whatsapp-icon">
        <a href="https://api.whatsapp.com/send?phone=5581995150302" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>

      <div>
        <ButtonReturn />
      </div>
    </>
  );
};

export default FormUsuario;
