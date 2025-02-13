

// src/NotFound.js
import React from 'react';
import '../../styles/NotFound.css'

const NotFound = () => {

  return (

    <div className="notfound-container">

      <div className="notfound-content">

        <h1 className="notfound-title"> 404 </h1>
        <p className="notfound-subtitle"> [ PÁGINA NÃO ENCONTRADA ]</p>
        <p className="notfound-message">A página que VOCÊ está procurando NÃO EXISTE!</p>

        <a href="/" className="notfound-home-link"> Página Inicial </a>

      </div>

    </div>

  );

};

export default NotFound;
