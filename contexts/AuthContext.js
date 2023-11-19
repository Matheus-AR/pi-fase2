import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [usuario, setUsuario] = useState({logado: false});
    const login = (nome, senha) => {
        setUsuario({ nome, logado: true });
    }

    const logout = () => {
        setUsuario({ logado: false })
    }

    const atualizarUsuario = (data) => {
        const {nome, descricao} = data;
        setUsuario({nome, descricao, logado: true});
    }
    return (
        <AuthContext.Provider value={{ usuario, login, logout, atualizarUsuario }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
export { AuthContext };