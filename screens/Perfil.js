import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";


const Perfil = ({ navigation }) => {
    
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 6/100,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/logout_icon.png")}
            style={{ width: 30, height: 30, marginLeft: 40 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Amigos")}>
          <Image
            source={require("../assets/people_icon.png")}
            style={{ width: 25, height: 25, marginRight: 40 }}
          />
        </TouchableOpacity>
      </View>

      {/* Informação do perfil*/}
      <View
        style={{
          flex: 20/100,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#7A7A7A",
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Image source={require("../assets/foto_perfil.png")} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingLeft: 5 }}>
            Matheus
          </Text>
          <Text style={{ fontSize: 12, paddingLeft: 5 }}>
            Designer, 23 anos
          </Text>
        </View>
      </View>

      {/* Menu e as fotos postadas */}
      <View style={{ flex: 68/100, }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ margin: 20, marginLeft: 175, fontWeight: "bold" }}>
            FEED
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image
              source={require("../assets/menu_icon.png")}
              style={{ margin: 20 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem1.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem2.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem3.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem4.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem5.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem6.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 6/100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Pesquisa")}>
          <Image
            source={require("../assets/search_outline.png")}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Galeria")}>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            source={require("../assets/person.png")}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Perfil;
