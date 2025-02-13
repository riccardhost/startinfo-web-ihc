
// src/App.js
import React from 'react';
import Rotas from '../src/Rotas'; // Importando o arquivo de rotas

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './App.css';

export default function App() {

  return (

    <div className='App'>

      <ToastContainer />

      <Rotas /> {/* Renderiza as rotas definidas em Rotas.jsx */}
      
    </div>

  );

}
