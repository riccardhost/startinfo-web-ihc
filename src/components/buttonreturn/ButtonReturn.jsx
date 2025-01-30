
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ButtonReturn = () => {
  const navigate = useNavigate();  // Hook para navegação

  const goToHome = () => {
    navigate('/');  // Redireciona para a página inicial (home)
  };

  return (

    <button
      onClick={goToHome}  // Ao clicar, vai para a página inicial
      style={styles.button}
    >
        
      <i className="bi bi-arrow-left-circle-fill" style={{ fontSize: '3.2rem', color: ' #e89404' }}></i>

    </button>

  );

};

const styles = {
  button: {
    position: 'fixed',
    bottom: '25px',
    left: '15px',
    padding: '11px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.85))',
  }
};

export default ButtonReturn;
