import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Galeria = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 6 / 100,
          flexDirection: "row",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/btnVoltar.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 80 }}>
          Nova Postagem
        </Text>
      </View>
      {/* Imagem principal */}
      <View
        style={{
          flex: 41 / 100,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/imagem_principal_galeria.png")}
          resizeMode="contain"
          style={{ height: '100%', width: 320 }}
        />
      </View>

      {/* Filtro */}
      <View
        style={{
          flex: 8 / 100,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'white' }}
          onPress={() => {}}
        >
          <Text style={{ fontWeight: "bold" }}>Imagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center",  alignItems: 'center', backgroundColor: 'white'}}
          onPress={() => {}}
        >
          <Text style={{ fontWeight: "bold" }}>Videos</Text>
        </TouchableOpacity>
      </View>

      {/* Galeria de fotos */}
      <View style={{ flex: 41 / 100 }}>
        <ScrollView>
          <View style={{ flexDirection: "row", justifyContent: 'center', flexWrap: "wrap" }}>
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require("../assets/imagem_galeria.png")}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 6 / 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Pesquisa")}>
          <Image
            source={require("../assets/search_outline.png")}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Galeria")}>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            source={require("../assets/person.png")}
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Galeria;
