import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";
import AuthProvider from "./contexts/AuthContext";
import UsuarioProvider from "./contexts/UsuarioContext";
import MensagensProvider from "./contexts/MensagensContext";

const App = () => {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <AuthProvider>
          <MensagensProvider>
            <MainNavigator />
          </MensagensProvider>
        </AuthProvider>
      </UsuarioProvider>
    </NavigationContainer>
  );
};

export default App;
