import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Amigos from '../screens/Amigos';
import Arquivadas from '../screens/Arquivadas';
import Cadastro from '../screens/Cadastro';
import Configuracoes from '../screens/Configuracoes';
import EditarPerfil from '../screens/EditarPerfil';
import EditarSenha from '../screens/EditarSenha';
import EsqueciASenha from '../screens/EsqueciASenha';
import Galeria from '../screens/Galeria';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import Mensagem from '../screens/Mensagem';
import Menu from '../screens/Menu';
import Perfil from '../screens/Perfil';
import Pesquisa from '../screens/Pesquisa';
import TelaAmigo from '../screens/TelaAmigo';

const Stack = createNativeStackNavigator();


const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false}} />
            <Stack.Screen name='EsqueciASenha' component={EsqueciASenha} options={{ headerShown: false}} />
            <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false}} />
            <Stack.Screen name='Amigos' component={Amigos} options={{ headerShown: false}} />
            <Stack.Screen name='Arquivadas' component={Arquivadas} options={{ headerShown: false}} />
            <Stack.Screen name='Configuracoes' component={Configuracoes} options={{ headerShown: false}} />
            <Stack.Screen name='EditarPerfil' component={EditarPerfil} options={{ headerShown: false}} />
            <Stack.Screen name='EditarSenha' component={EditarSenha} />
            <Stack.Screen name='Galeria' component={Galeria} options={{ headerShown: false}} />
            <Stack.Screen name='Mensagem' component={Mensagem} options={{ headerShown: false}} />
            <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false}} />
            <Stack.Screen name='Pesquisa' component={Pesquisa} options={{ headerShown: false}} />
            <Stack.Screen name='TelaAmigo' component={TelaAmigo} options={{ headerShown: false}} />
        </Stack.Navigator>
    )
}

export default MainNavigator;