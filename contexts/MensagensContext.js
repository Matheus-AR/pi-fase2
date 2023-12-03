import React, { createContext, useContext, useState } from 'react';

// Crie o contexto para armazenar as mensagens
const MensagensContext = createContext();

// Crie um componente de provedor para envolver sua árvore de componentes
const MensagensProvider = ({ children }) => {
  const [mensagens, setMensagens] = useState([]);

  // Função para adicionar uma nova mensagem
  const addMensage = (novaMensagem) => {
    setMensagens([...mensagens, novaMensagem]);
  };

  return (
    <MensagensContext.Provider value={{ mensagens, addMensage }}>
      {children}
    </MensagensContext.Provider>
  );
};

export default MensagensProvider;
export { MensagensContext };
