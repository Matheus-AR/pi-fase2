import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './routes/MainNavigator';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
        <AuthProvider>
            <MainNavigator />
        </AuthProvider>
    </NavigationContainer>
  )
}

export default App;