import { useState, createContext } from "react";

import { signIn, signUp } from "../services/AuthService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ logado: false });
  const [error, setError] = useState();

  const login = async (nome, senha) => {
    try {
      await signIn(nome, senha);
      setUsuario({ nome, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    setUsuario({ logado: false });
  };

  const criarUsuario = async (nome, email, senha) => {
    try {
      await signUp(nome, email, senha);
      setUsuario({ email, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const atualizarUsuario = (data) => {
    const { nome, descricao } = data;
    setUsuario({ nome, descricao, logado: true });
  };
  return (
    <AuthContext.Provider
      value={{ usuario, login, logout, criarUsuario, atualizarUsuario }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
