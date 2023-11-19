import { useContext } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";

const EditarSenha = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //navigation.pop();
  };
  const rulesSenha = {
    required: { Value: true, message: "Digite a senha atual" },
  };
  const rulesSenhaNova = {
    required: { value: true, message: "Digite a nova senha" },
  };
  const rulesRepetirSenha = {
    required: { value: true, message: "Digite novamente a nova senha"}
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
      <View style={{ flex: 50 / 100, alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "white",
            width: 270,
            height: 380,
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
          <Text style={{ alignSelf: "stretch" }}>Senha Atual</Text>
          <Controller
            name="senha"
            control={control}
            rules={rulesSenha}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  padding: 5,
                }}
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.senha && errors.senha.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>Senha nova</Text>
          <Controller
            name="senhanova"
            control={control}
            rules={rulesSenhaNova}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  padding: 5,
                }}
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.senhanova && errors.senhanova.message}</HelperText>

          <Text style={{ alignSelf: "stretch" }}>Confirme a senha</Text>
          <Controller
            name="repetirsenha"
            control={control}
            rules={rulesRepetirSenha}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={{
                  backgroundColor: "#D9D9D9",
                  alignSelf: "stretch",
                  padding: 5,
                }}
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.repetirsenha && errors.repetirsenha.message}</HelperText>

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

export default EditarSenha;
