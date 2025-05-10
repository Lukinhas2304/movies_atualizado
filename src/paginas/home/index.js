import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Cabecalho from '../../componentes/cabecalho/index';
import Pesquisa from '../../componentes/pesquisa/index';
import Banner from '../../componentes/banner/index';
import CardMovies from '../../componentes/cardsFilmes/index';
import Filmes from '../../../data/movie';

export default function Home (){
    return(
      <ScrollView style={styles.scrollcont}>
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
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container :{
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     
    },
    scrollcont :{
     width:'100%',
     height:'100%',
     backgroundColor:'#141a28'
     

    }
  });
  