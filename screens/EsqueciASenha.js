import { useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const EsqueciASenha = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const enviarEmail = () => {
    Alert.alert(
      "E-mail enviado",
      "Um e-mail foi enviado para o endereço fornecido."
    );
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      source={require("../assets/telalogin.png")}
      resizeMode="stretch"
    >
      <View
        style={{ flex: 35 / 100 }}
      >
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
      <View style={{ flex: 65 / 100, alignItems: "center" }}>
        <View
          style={{
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
            Esqueci a senha
          </Text>
          <Text
            style={{ alignSelf: "stretch", fontSize: 16, fontWeight: "bold" }}
          >
            E-mail
          </Text>
          <TextInput
            keyboardType="default"
            value={email}
            onChanceText={(text) => setEmail(text)}
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch" }}
          />

          <TouchableOpacity onPress={() => enviarEmail()}>
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
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EsqueciASenha;
