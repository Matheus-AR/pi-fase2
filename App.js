import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";
import AuthProvider from "./contexts/AuthContext";
import UsuarioProvider from "./contexts/UsuarioContext";
const App = () => {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </UsuarioProvider>
    </NavigationContainer>
  );
};

export default App;
