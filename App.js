import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Cabecalho from './src/componentes/cabecalho/index';
import Pesquisa from './src/componentes/pesquisa/index';
import Banner from './src/componentes/banner/index';
import CardMovies from './src/componentes/cardsFilmes/index';

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner/>

      <CardMovies/>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center'
  }
});
