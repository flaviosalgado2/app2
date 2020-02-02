//importar
import React from 'react'
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native'

//formatacoes
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textoRodape: {
    marginTop: 400,
    fontWeight: 'bold'
  }
};

const botaoPressionado = () => {
  alert('Botão pressionado');
}

//geracao de frases aleatorias
const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frases
  var frases = Array();
  frases[0] = 'Jesus te ama!';
  frases[1] = 'O senhor é meu pastor de nada me faltará';
  frases[2] = 'Seu dia será de sucesso!';
  frases[3] = 'Acredite no seu potencial!';
  frases[4] = 'Se Deus é por nós, quem será contra nós?!';

  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);

}

//criar componente
const App = () => {
  const { principal, botao, textoBotao, textoRodape } = Estilos;
  return(
    <View style={ principal }>

      <Image source={require('./imgs/logo.png')}/>
      
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={ textoBotao }>Gerar Nova Frase</Text>
      </TouchableOpacity>

      <Text style={ textoRodape }>By Flávio Salgado - Engenheiro da Computação</Text>
    </View>
  );
}

//rederizar para dispositivo
AppRegistry.registerComponent('app2', () => App);