

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

// Importe o arquivo CSS para os estilos
import "../../styles/Navbar.css"; 

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginLogout = () => {
      setIsLoggedIn(!isLoggedIn);
    };

  return (

    <>

        <div className="navbar-modelo-tutorial">
        
            <nav className="navbar-modelo-navbar">

                {/* Logo */}
                <div className="navbar-modelo-logo">
                    <Link to="/"> Start Info </Link>
                </div>

                {/* Links de navegação */}
                <div className="navbar-modelo-nav-links">
                    <Link to="/" className="navbar-modelo-nav-link">HOME</Link>
                    <Link to="/quemsomos" className="navbar-modelo-nav-link">SOBRE</Link>
                    <Link to="/tutoriais" className="navbar-modelo-nav-link">TUTORIAIS</Link>
                    <Link to="/contato" className="navbar-modelo-nav-link">CONTATO</Link>
                </div>
                
                {/* PESQUISAS  */}

                <div className="nav-search-container-bar">

                    <input
                        type="text"
                        className="nav-search-input-bar"
                        placeholder="Pesquisar..."
                    />

                    <button className="nav-search-button-bar" type="button">
                        <i className="bi bi-search"></i>

                    </button>
                    
                </div>
                
                {/* Perfil/Login/Logout */}
                <div className="navbar-modelo-auth-section">

                    {isLoggedIn ? (

                        <>
                            <Link to="/perfil" className="navbar-modelo-profile-link">
                                <FaUserCircle size={28} />
                            </Link>
                            <button onClick={handleLoginLogout} className="navbar-modelo-auth-button">
                                <FaSignOutAlt size={20} />
                                SAIR
                            </button>
                        </>

                    ) : (

                        <>
                            <Link to="/login" className="navbar-modelo-auth-button">
                                <FaSignInAlt size={20} />
                                ENTRAR
                            </Link>
                            <Link to="/signup" className="navbar-modelo-auth-button">
                                <FaUserPlus size={20} />
                                CADASTRAR
                            </Link>
                        </>

                    )}
                    
                </div>

            </nav>

        </div>

    </>

  );

}
