import {
  View,
  Text,
  TextInput,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
      }}
      source={require("../assets/telalogin.png")}
      resizeMode="stretch"
    >
      <View //container
        style={{
          marginTop: 57,
          backgroundColor: "#D9D9D9",
          justifyContent: "center",
          width: 279,
          height: 96,
          borderRadius: 27,
        }}
      >
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{
            textAlign: "center",
            fontSize: 40,
          }}
        >
          {" "}
          Get Started{" "}
        </Text>
      </View>
      <View>
        <Image
          style={{
            marginTop: 50,
          }}
          source={require("../assets/Vector.png")}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
