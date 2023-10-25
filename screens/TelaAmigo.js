import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

const TelaAmigo = ({ route, navigation }) => {
    const {nome, descricao} = route.params;
    const [texto, setTexto] = React.useState('+ ADD');

    function mudarTexto() {{
        if (texto == '+ ADD') {
            setTexto('ADD');
        } else {
            setTexto('+ ADD')
        }
    }}
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 6/100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
        }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require('../assets/btnVoltar.png')}
            style={{ width: 20, height: 20, marginLeft: 40 }}
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#7A7A7A',
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}>
        <Image source={require('../assets/amigo_icon.png')} resizeMode='contain' style={{ height: 50, width: 50, margin: 30, backgroundColor: 'gray', borderRadius: 100 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 5 }}>
            {route.params?.nome}
          </Text>
          <Text style={{ fontSize: 12, paddingLeft: 5 }}>{route.params?.descricao}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3291EA',
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: 1,
              }}
              onPress={() => mudarTexto()}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{texto}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Mensagem', {
                    nome: route.params?.nome
                })}
              style={{
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <Text>Mensagem</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menu e as fotos postadas */}
      <View style={{ flex: 68/100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ margin: 20, marginLeft: 175, fontWeight: 'bold' }}>
            FEED
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image
              source={require('../assets/menu_icon.png')}
              style={{ margin: 20 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 10,
            }}>
            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 6/100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          paddingBottom:20,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa')}>
          <Image
            source={require('../assets/search_outline.png')}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Galeria')}>
          <Image source={require('../assets/plus_circle.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
          <Image
            source={require('../assets/person.png')}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaAmigo;
