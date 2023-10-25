import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Arquivadas = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 20,
      }}
    >
      {/* Header */}
      <View
        style={{
          flex: 1,
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          

        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require("../assets/btnVoltar.png")}
            style={{ width: 20, height: 20, marginRight: 100, marginLeft: 30,}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ marginRight: 85, fontWeight: "bold", fontSize: 15 }}>
          Arquivadas
        </Text>
      </View>

      {/* Fotos arquivadas */}
      <View style={{ flex: 15, alignSelf: "flex-start", marginTop: 20 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            <View style={{ width: "50%", height: 180 }}>
              <Image
                source={require("../assets/imagem1.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 180 }}
              />
            </View>

            <View style={{ width: "50%", height: 180 }}>
              <Image
                source={require("../assets/imagem2.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 180 }}
              />
            </View>

            <View style={{ width: "50%", height: 180 }}>
              <Image
                source={require("../assets/imagem3.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 180 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 1,
          width: "100%",
          height: 45,
          flexDirection: "row",
          justifyContent: "space-between",
         paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa')}>
          <Image
            style={{ marginLeft: 10 }}
            source={require("../assets/search_outline.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Galeria')}>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/person.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Arquivadas;
