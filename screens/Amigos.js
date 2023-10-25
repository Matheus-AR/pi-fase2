import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Amigos = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingTop: 55 }}>
      {/* Header */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/btnVoltar.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 36 }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 110 }}>
          Amigos
        </Text>
      </View>
      {/* Barra de pesquisa */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 12,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="pesquisa"
          style={{
            backgroundColor: "#D9D9D9",
            width: "90%",
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/search_outline.png")}
            resizeMode="contain"
            style={{ marginRight: 4 }}
          />
        </TouchableOpacity>
      </View>
      {/* parte que lista os amigos */}
      <View style={{ flex: 12, marginHorizontal: 12 }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Natália',
                descricao: 'Artista, 22 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>
                Natália
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem",{
                nome: 'Natália'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Matheus',
                descricao: 'UI/UX designer, 25 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>
                Matheus
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem", {
                nome: 'Matheus'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Jorge',
                descricao: 'Gerente, 45 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Jorge</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem", {
                nome: 'Jorge'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Caio',
                descricao: 'Designer gráfico, 28 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Caio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem", {
                nome: 'Caio'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Karol',
                descricao: 'Gerente, 34 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Karol</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem", {
                nome: 'Karol'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={() => navigation.navigate("TelaAmigo", {
                nome: 'Nicolas',
                descricao: 'Gerente, 45 anos'
              })}
            >
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>
                Nicolas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mensagem", {
                nome: 'Nicolas'
            })}>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Footer */}
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Pesquisa")}>
          <Image
            style={{ marginLeft: 10 }}
            source={require("../assets/search_outline.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Galeria")}>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/person.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Amigos;
