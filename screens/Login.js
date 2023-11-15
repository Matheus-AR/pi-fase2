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
import { useForm, Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const Login = ({ route, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { nome, senha} = data;
    login(nome, senha);
  };
  const { login } = useContext(AuthContext);

  const rulesNome = {
    required: { value: true, message: "O nome é obrigatório" },
    minLength: { value: 3, message: "Número de caracteres min é 3" },
  };
  const rulesSenha = {
    required: { value: true, message: "A senha é obrigatória"}
  }
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
      <View style={{ flex: 35 / 100 }}>
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
      <View style={{ flex: 55 / 100, alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: 270,
            height: 320,
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
            Nome
          </Text>
          <Controller
            name="nome"
            control={control}
            rules={rulesNome}
            render={({ field: { value, onChange } }) => (
              <TextInput
                keyboardType="default"
                value={value}
                onChangeText={onChange}
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
              />
            )}
          />
          <HelperText type="error" visible={true}>
            {errors.nome && errors.nome.message}
          </HelperText>

          <Text style={{ alignSelf: "stretch", fontSize: 16, fontWeight: "bold" }}>Senha</Text>
          <Controller
            name="senha"
            control={control}
            rules={rulesSenha}
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
              />
            )}
           />
           <HelperText type='error' visible={true}>
            {errors.senha && errors.senha.message }
           </HelperText>

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

          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
