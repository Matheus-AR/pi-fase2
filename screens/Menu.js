import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 40,
      }}>
        {/* Header */}
      <View style={{
            flex: 6/100,
            flexDirection: 'row',

            alignItems: 'center',
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/btnVoltar.png')}
            style={{ width: 20, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 100, fontWeight: 'bold', fontSize: 16 }}>
          Menu
        </Text>
      </View>
      {/* Botões do menu */}
      <View style={{ flex: 88/100, justifyContent: 'center' }}>

        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Configuracoes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Arquivadas')}>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Arquivadas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Editar Perfil
          </Text>
        </TouchableOpacity>

      </View>

      <View
        style={{
            flex: 6/100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>
          <Image
            style={{ marginLeft: 10 }}
            source={require('../assets/search_outline.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Galeria')}>
          <Image source={require('../assets/plus_circle.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image
            style={{ marginRight: 10 }}
            source={require('../assets/person.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Menu;
