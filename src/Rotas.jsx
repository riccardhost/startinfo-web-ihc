
// src/Rotas.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação das páginas de acesso/cadastro
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// Importação das páginas comuns
import Home from './pages/home/Home';
import QuemSomos from './pages/quemsomos/QuemSomos';
import Tutoriais from './pages/tutoriais/Tutoriais';
import Contato from './pages/contato/Contato';

// Importação - Página do Perfil
import UserPerfil from './pages/perfil/UserPerfil';

// Importação das páginas comuns
import Email from './pages/produtos/Email';
import PIX from './pages/produtos/PIX';
import WhatsApp from './pages/produtos/WhatsApp';



/*import LoginForm from './pages/loginform/LoginForm';*/

const Rotas = () => {

  return (

    <Router>

      <Routes>

        {/* Definindo as rotas */}
        <Route path="/" element={<Home />} /> {/* Home */}
        <Route path="/login" element={<Login />} /> {/* Login */}
        <Route path="/signup" element={<Signup />} /> {/* Signup */}
        <Route path="/quemsomos" element={<QuemSomos />} /> {/* Quem Somos */}
        <Route path="/tutoriais" element={<Tutoriais />} /> {/* Tutoriais */}
       
        <Route path="/tutoriais/email" element={<Email />} /> {/* Email */}
        <Route path="/tutoriais/pix" element={<PIX />} /> {/* PIX */}
        <Route path="/tutoriais/whatsapp" element={<WhatsApp />} /> {/* WhatsApp */}


        <Route path="/contato" element={<Contato />} /> {/* Contato */}
        <Route path="/perfil" element={<UserPerfil />} /> {/* UserPerfil */}

      </Routes>

    </Router>

  );
  
};

export default Rotas;
