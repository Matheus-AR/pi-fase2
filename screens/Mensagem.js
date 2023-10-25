import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const Mensagem = ({ route, navigation }) => {
  const { nome } = route.params;
  const [messages, setMessages] = useState([]);

  function onSend(newMessages = []) {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 1 / 3,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/btnVoltar.png")}
            style={{ width: 20, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#7A7A7A",
        }}
      >
        <Image
          source={require("../assets/amigo_icon.png")}
          resizeMode="contain"
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: "gray",
          }}
        />
        <Text style={{ fontWeight: "bold" }}>{route.params?.nome}</Text>
      </View>
      <View style={{ flex: 4 }}>
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Mensagem;
