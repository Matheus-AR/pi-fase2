import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);

    const login = () => {
        setLogado(true);
    }

    const logout = () => {
        setLogado(false);
    }
    const { usuario, setUsuario } = useState();
    return (
        <AuthContext.Provider value={{ logado, login, logout }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
export { AuthContext };