import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Cabecalho from './src/componentes/cabecalho/index';
import Pesquisa from './src/componentes/pesquisa/index';
import Banner from './src/componentes/banner/index';
import CardMovies from './src/componentes/cardsFilmes/index';
import Filmes from './data/movie'

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner/>
      <View style ={{width: "90%", height:"100%"}}>
      <FlatList
      horizontal = {true}
        data={Filmes}
        keyExtactor={(item) => item.id}
        renderItem={({item}) => (


          <CardMovies titulo = {item.nome} nota = {item.nota} imagem = {item.imagem}
          />
          
        )}
      />  
      </View>
      

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
