import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const Pesquisa = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 20 }}>
      <View
        style={{
          flex: 6 / 100,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/btnVoltar.png")}
            style={{ width: 20, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
      </View>
      {/*Barra de pesquisa */}
      <View style={{ flex: 6 / 100, flexDirection: "row", alignItems: 'center' }}>
        <TextInput
          placeholder={"Pesquisar"}
          style={{
            backgroundColor: "#D9D9D9",
            width: "80%",
            borderRadius: 20,
            paddingHorizontal: 10,
            marginHorizontal: 20
          }}
        />
        <Image
          source={require("../assets/search_outline.png")}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>

          {/* Lista resultado da pesquisa */}
          <View style={{ flex: 82/100 }}></View>
      {/* Footer */}
      <View
        style={{
          flex: 6 / 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pesquisa");
          }}
        >
          <Image
            style={{ marginLeft: 10 }}
            source={require("../assets/search_outline.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Galeria");
          }}
        >
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Perfil");
          }}
        >
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/person.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pesquisa;
