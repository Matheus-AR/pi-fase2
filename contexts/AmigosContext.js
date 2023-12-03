import { createContext, useState } from "react";

const AmigosContext = createContext();

const AmigosProvider = ({ children }) => {
  const [amigos, setAmigos] = useState([]);

  const adicionarAmigo = (nome) => {
    setAmigos([...amigos, nome]);
  };

  const removerAmigo = (nome) => {
    const index = contatos.findIndex((contato) => contato.nome === nome);
    contatos.splice(index, 1);
    setContatos([...contatos]);
  };
  return (
    <AmigosContext.Provider value={(amigos, adicionarAmigo, removerAmigo)}>
      {children}
    </AmigosContext.Provider>
  );
};

export default AmigosProvider;
export { AmigosContext };