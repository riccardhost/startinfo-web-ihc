

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "../../styles/UserPerfil.css"; // Importe o arquivo CSS para os estilos

import whatsapp from "../../assets/whatsapp.ico";
import ButtonReturn from '../../components/buttonreturn/ButtonReturn';
import logo from '../../assets/startinfox.png';
import defaultProfilePic from "../../assets/default-profile.png"; // Foto padrão de perfil


import Navbar from '../../components/navbar/Navbar';

export default function UserProfile() {

  const [profilePic, setProfilePic] = useState(defaultProfilePic); // Estado para a foto de perfil
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [username, setUsername] = useState('');
  const [foneCelular, setFoneCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    console.log('Perfil atualizado:', { nomeCompleto, username, foneCelular, cpf, profilePic });
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result); // Atualiza o estado com a URL da imagem
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <>

      {/* Componente - NAVBAR */}
      <Navbar/>

      <div className='container-user-profile'>

        <div className="perfil-logo-container">

          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <h1>Bem-vindo ao seu Perfil!</h1>
          <p>Gerencie suas informações pessoais abaixo.</p>

        </div>

        <div className="profile-form">
          <h3>SEU PERFIL</h3>

          <div className="profile-picture-container">
          <img src={profilePic} alt="Foto do Perfil" className="profile-picture" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="profile-picture-input"
            />
          )}
          
          </div>

          <div className="input-group">
            <label htmlFor="fullName">Nome Completo</label>
            <input
              type="text"
              id="fullName"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              disabled={!isEditing}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!isEditing}
              placeholder="exemplo@dominio.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              id="phone"
              value={foneCelular}
              onChange={(e) => setFoneCelular(e.target.value)}
              disabled={!isEditing}
              placeholder="(XX) XXXXX-XXXX"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              disabled={!isEditing}
              placeholder="Digite seu CPF"
              required
            />
          </div>

          <div className="input-group">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="buttonEdit">EDITAR</button>
            ) : (
              <button onClick={handleSave} className="buttonSave">SALVAR</button>
            )}
          </div>
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
}
