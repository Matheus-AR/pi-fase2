import { useState, useContext } from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";


import { UsuarioContext } from '../contexts/UsuarioContext';


const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');

    const { criar } = useContext(UsuarioContext);

    
    
    function cadastrarUsuario() {
        if (senha === repetirSenha) {
            criar(nome, email, senha);
            Alert.alert(
                'Usuário criado',
                'Usuário criado com sucesso'
            )
        }
    };
  return (
    <ImageBackground
      style={{
        flex: 1,
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
            Cadastro
          </Text>
          <Text style={{ alignSelf: "stretch", fontSize: 16, fontWeight: 'bold' }}>Usuário</Text>
          <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
            keyboardType='default'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Text style={{ alignSelf: "stretch" }}>E-mail</Text>
          <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={{ alignSelf: "stretch" }}>Senha</Text>
          <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <Text style={{ alignSelf: "stretch" }}>Digite a senha novamente</Text>
          <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", paddingHorizontal: 5 }}
            secureTextEntry={true}
            value={repetirSenha}
            onChangeText={(text) => setRepetirSenha(text)}
          />
          <TouchableOpacity onPress={ cadastrarUsuario }>
            <Text
              style={{
                marginTop: 10,
                backgroundColor: "#D9D9D9",
                textAlign: "center",
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
              }}
            >
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cadastro;
