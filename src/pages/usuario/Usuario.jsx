

import axios from "axios";
import React, { useState, useEffect } from 'react';
import FormUsuario from '../../pages/usuario/FormUsuario';
import "../../styles/FormUsuario.css"; // Importe o arquivo CSS para os estilos

const Usuario = ({ state }) => {  // Assumindo que `state` vem como prop

  const [userData, setUserData] = useState({
    photo: '',
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    foneCelular: '',
    username: '',
    password: '', 
  });

  const handleUpdateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const formatarData = (data) => {
    // Exemplo de formatação para o formato 'DD/MM/YYYY'
    const date = new Date(data);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  useEffect(() => {
    if (state && state.id) {
      axios.get(`http://localhost:8085/api/cliente/` + state.id, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      })
      .then((response) => {
        // Atualizar o estado com o método funcional para evitar dependência direta de userData
        setUserData((prevUserData) => ({
          ...prevUserData,
          nomeCompleto: response.data.nomeCompleto,
          dataNascimento: formatarData(response.data.dataNascimento),
          cpf: response.data.cpf,
          foneCelular: response.data.foneCelular,
          username: '',
          password: '', 
        }));
      })
      .catch((error) => {
        console.error("Erro ao buscar cliente:", error);
      });
    }
  }, [state]);

  return (

    <div>

      <FormUsuario user={userData} onUpdate={handleUpdateUserData} />

    </div>

  );
  
};

export default Usuario;
