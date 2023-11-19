import {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const EditarPerfil = ({ navigation }) => {

    const {atualizarUsuario} = useContext(AuthContext)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    atualizarUsuario(data);
    
    navigation.pop();
  };
  

  const rulesNome = {
    required: { value: true, message: "O nome é obrigatório" },
  };

  const rulesDescricao = {
    required: { value: true, message: "A desecrição é obrigatória" },
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
      <View style={{ flex: 50 / 100, alignItems: "center" }}>
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
            }}
          >
            Editar Perfil
          </Text>
          <Text style={{ alignSelf: "stretch" }}>Usuário</Text>
          <Controller
            name="nome"
            control={control}
            rules={rulesNome}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  padding: 5,
                }}
                value={value}
                onChangeText={onChange}
                keyboardType="default"
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.nome && errors.nome.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>Descrição</Text>
          <Controller
            name="descricao"
            control={control}
            rules={rulesDescricao}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  padding: 5,
                }}
                value={value}
                onChangeText={onChange}
                keyboardType="default"
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.descricao && errors.descricao.message}</HelperText>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                backgroundColor: "#D9D9D9",
                marginTop: 30,
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
              }}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EditarPerfil;
