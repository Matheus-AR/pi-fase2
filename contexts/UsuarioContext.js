import { createContext, useState } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const criar = (nome, email, senha) => {
        const novoUsuario = { id: usuarios.length + 1, nome, email, senha };
        setUsuarios([...usuarios, novoUsuario]);
    };
    const buscar = (email) => {
        return usuarios.find((usuario) => usuario.email === email)
    };
    const atualizar = (id, nome, descricao) => {
        const usuarioAtualizado = {id, nome, descricao};
        const listaAtualizada = usuarios.map((usuario) => usuario.id ? usuarioAtualizado : usuario);
        setUsuarios(listaAtualizada);
    };
    const remover = (id) => {
        const listaAtualizada = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(listaAtualizada);
    }
    return (
        <UsuarioContext.Provider value={{ usuarios, criar, buscar, atualizar, remover}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;
export { UsuarioContext };