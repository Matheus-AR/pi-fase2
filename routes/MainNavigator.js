import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Amigos from "../screens/Amigos";
import Arquivadas from "../screens/Arquivadas";
import Cadastro from "../screens/Cadastro";
import Configuracoes from "../screens/Configuracoes";
import EditarPerfil from "../screens/EditarPerfil";
import EditarSenha from "../screens/EditarSenha";
import EsqueciASenha from "../screens/EsqueciASenha";
import Galeria from "../screens/Galeria";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import Mensagem from "../screens/Mensagem";
import Menu from "../screens/Menu";
import Perfil from "../screens/Perfil";
import Pesquisa from "../screens/Pesquisa";
import TelaAmigo from "../screens/TelaAmigo";

import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      {!usuario.logado ? (
        <>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            
          />
          <Stack.Screen
            name="Login"
            component={Login}
            
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            
          />
          <Stack.Screen
            name="EsqueciASenha"
            component={EsqueciASenha}
            
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            
          />
          <Stack.Screen
            name="Amigos"
            component={Amigos}
            
          />
          <Stack.Screen
            name="Arquivadas"
            component={Arquivadas}
            
          />
          <Stack.Screen
            name="Configuracoes"
            component={Configuracoes}
            
          />
          <Stack.Screen
            name="EditarPerfil"
            component={EditarPerfil}
            
          />
          <Stack.Screen
            name="EditarSenha"
            component={EditarSenha}
            
          />
          <Stack.Screen
            name="Galeria"
            component={Galeria}
            
          />
          <Stack.Screen
            name="Mensagem"
            component={Mensagem}
            
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            
          />
          <Stack.Screen
            name="Pesquisa"
            component={Pesquisa}
            
          />
          <Stack.Screen
            name="TelaAmigo"
            component={TelaAmigo}
            
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
