
import React from "react";
//import { Link } from "react-router-dom";
//import logo from "../../assets/startinfox.png"; // Importa a logomarca
import "../../styles/Header.css"; // Importe o arquivo CSS para os estilos

export default function Header() {

  return (

    <>

      <header className="container-header" id="banner">

        <div className="container-logo">

          {/* Logomarca 
          <div className="logo-container">

            <Link to="/">
              <img
                src={logo}
                alt="Logomarca do Letramento Digital"
                className="logo"
              />
                
            </Link>
        
          </div>
          */}
          
        </div>

      </header>

    </>

  );

}
