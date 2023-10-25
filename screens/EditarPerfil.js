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

const EditarPerfil = ({ navigation }) => {
    function editarPerfil() {
        Alert.alert(
            "Perfil editado",
            "Perfil editado com sucesso."
        )
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
      <View style={{ flex: 35 / 100, }}>
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
          <TextInput
            style={{
              backgroundColor: "#D9D9D9",
              alignSelf: "stretch",
              padding: 5,
            }}
          />
          <Text style={{ alignSelf: "stretch" }}>Descrição</Text>
          <TextInput
            style={{
              backgroundColor: "#D9D9D9",
              alignSelf: "stretch",
              padding: 5,
            }}
          />

          <TouchableOpacity onPress={() => {editarPerfil()}}>
            <Text
              style={{
                backgroundColor: "#D9D9D9",
                marginTop: 60,
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
