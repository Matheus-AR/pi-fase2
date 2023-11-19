import { useState } from "react";
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

const EsqueciASenha = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const rulesEmail = {
    required: { value: true, message: "O email é obrigatório" },
  };

  const onSubmit = (data) => {
    enviarEmail();
  };

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
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
          />
          <HelperText type='error' visible={true}>{errors.email && errors.email.message}</HelperText>

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
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EsqueciASenha;
