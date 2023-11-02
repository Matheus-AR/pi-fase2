import { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";

import { AuthContext } from "../contexts/AuthContext";

const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const { login } = useContext(AuthContext);

  return (
    <ImageBackground
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      source={require("../assets/telalogin.png")}
      resizeMode="stretch"
    >
      {/* Botão voltar */}
      <View style={{ flex: 35/100 }}>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            alignSelf: "flex-start",
            padding: 20,
            marginLeft: 50,
            width: 20,
            height: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../assets/btnVoltar.png")} />
        </TouchableOpacity>
      </View>

      {/* Caixa com campos de entrada */}
      <View style={{ flex: 50 / 100, alignItems: 'center', }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "white",
            width: 270,
            height: 300,
            padding: 12,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              padding: 10,
              borderRadius: 27,
              backgroundColor: "#D9D9D9",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
          <Text
            style={{ alignSelf: "stretch", fontSize: 16, fontWeight: "bold" }}
          >
            Usuário
          </Text>
          <TextInput
            keyboardType="default"
            value={email}
            onChanceText={(text) => setEmail(text)}
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
          />
          <Text
            style={{ alignSelf: "stretch", fontSize: 16, fontWeight: "bold" }}
          >
            Senha
          </Text>
          <TextInput
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
          />
          <Text
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#D9D9D9",
              marginTop: 10,
              borderRadius: 27,
              padding: 5,
              paddingHorizontal: 30,
              fontSize: 16,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("EsqueciASenha")}
          >
            Esqueceu a senha?
          </Text>
          <Text
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#D9D9D9",
              marginTop: 10,
              borderRadius: 27,
              padding: 5,
              paddingHorizontal: 53,
              fontSize: 16,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastre-se
          </Text>

          <TouchableOpacity onPress={() => login()}>
            <Text
              style={{
                backgroundColor: "#D9D9D9",
                marginTop: 10,
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
