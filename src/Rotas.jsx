

// src/Rotas.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/util/ProtectedRoute';

// Importação - Páginas 404 - ROTAS INEXISTENTES!
import NotFound from './components/notfound/NotFound';


// Importação - Páginas de Acesso/Cadastro
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';


// Importação - Páginas de Uso Público
import Home from './pages/home/Home';
import QuemSomos from './pages/quemsomos/QuemSomos';
import Tutoriais from './pages/tutoriais/Tutoriais';
import Contato from './pages/contato/Contato';


// Importação - Página do Perfil/Privadas
import User from './pages/usuario/Usuario';


// Importação - Páginas de Serviços/Privadas
import Email from './pages/produtos/Email';
import PIX from './pages/produtos/PIX';
import WhatsApp from './pages/produtos/WhatsApp';


const Rotas = () => {

  return (

    <Router>

      <Routes>

        {/* Rota para páginas inexistentes */}
        <Route path="*" element={<NotFound />} />

        {/* Definindo as rotas */}
        <Route path="/" element={<Home />} /> {/* Home */}
        <Route path="/login" element={<Login />} /> {/* Login */}
        <Route path="/signup" element={<Signup />} /> {/* Signup */}
        <Route path="/quemsomos" element={<QuemSomos />} /> {/* Quem Somos */}
        <Route path="/tutoriais" element={<Tutoriais />} /> {/* Tutoriais */}
        <Route path="/contato" element={<Contato /> } /> {/* Contato */}

        <Route
          path="/tutoriais/email"
          element={
            <ProtectedRoute>
              <Email />
            </ProtectedRoute>
        } />

        <Route
          path="/tutoriais/pix"
          element={
            <ProtectedRoute>
              <PIX />
            </ProtectedRoute>
        } />

        <Route
          path="/tutoriais/whatsapp"
          element={
            <ProtectedRoute>
              <WhatsApp />
            </ProtectedRoute>
        } />

        <Route
          path="/perfil/user"
          element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />

      </Routes>

    </Router>

  );

};

export default Rotas;
