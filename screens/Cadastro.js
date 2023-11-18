import { useState, useContext } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";

import { UsuarioContext } from "../contexts/UsuarioContext";

const Cadastro = ({ navigation }) => {
  const { criar } = useContext(UsuarioContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { nome, email, senha, repetirSenha } = data;
    if (senha === repetirSenha) {
      criar(nome, email, senha);
      Alert.alert(
        'Usuário criado',
        'Usuário criado com sucesso.'
      )
    }
  };

  const rulesNome = {
    required: { value: true, message: "O nome é obrigatório" },
    minLength: { value: 3, message: "Número de caracteres min é 3" },
  };
  const rulesEmail = {
    required: { value: true, message: "O email é obrigatório" },
  };
  const rulesSenha = {
    required: { value: true, message: "A senha é obrigatória" },
    minLength: {
      value: 8,
      message: "A senha deve ter no mínimo de 8 caracteres",
    },
  };
  const rulesRepetirSenha = {
    required: { value: true, message: "A confirmação de senha é obrigatória" },
    minLength: {
      value: 8,
      message: "A confirmação de senha deve ter no mínimo de 8 caracteres",
    },
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      source={require("../assets/telalogin.png")}
      resizeMode="stretch"
    >
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

      <View style={{ flex: 65 / 100, alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "white",
            width: 270,
            height: 400,
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
            Cadastro
          </Text>
          <Text
            style={{ alignSelf: "stretch", fontSize: 16, fontWeight: "bold" }}
          >
            Usuário
          </Text>
          <Controller
            name="nome"
            control={control}
            rules={rulesNome}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
                keyboardType="default"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.nome && errors.nome.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>E-mail</Text>
          <Controller
            name="email"
            control={control}
            rules={rulesEmail}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.email && errors.email.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>Senha</Text>
          <Controller
            name="senha"
            control={control}
            rules={rulesSenha}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.senha && errors.senha.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>Digite a senha novamente</Text>
          <Controller
            name="repetirSenha"
            control={control}
            rules={rulesRepetirSenha}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  paddingHorizontal: 5,
                }}
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.repetirSenha && errors.repetirSenha.message}</HelperText>

          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text
              style={{
                marginTop: 10,
                backgroundColor: "#D9D9D9",
                textAlign: "center",
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
              }}
            >
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cadastro;
