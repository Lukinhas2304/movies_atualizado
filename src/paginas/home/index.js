import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Cabecalho from '../../componentes/cabecalho/index';
import Pesquisa from '../../componentes/pesquisa/index';
import Banner from '../../componentes/banner/index';
import CardMovies from '../../componentes/cardsFilmes/index';
import styles from './style';
import Filmes from '../../../data/movie';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home (){
    const [moviesTopRated, setMoviesTopRated] = useState([]);

    const [moviesPopular, setMoviesPopular] = useState([]);

    const [moviesEmBreve, setMoviesEmBreve] = useState([]);

    const [moviesCartaz, setMoviesCartaz] = useState([]);

    useEffect(()=>{
      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br-US&page=1';
        const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBmOGM5N2QyY2I0MjFhNzg2YWM4M2RmODg2NDgyMSIsIm5iZiI6MTc1NTAyMTUxMy40MjgsInN1YiI6IjY4OWI4MGM5ZjY3OWYxZjk4MDhlYmExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1pmvF7ANUfX0oYEEEro7Hr2QDXV3VX7DyA-NUhzB5rQ'
          }
        }; 

        

        const response = await fetch(url, options)
        const data = await response.json();
        console.log(data);

        setMoviesTopRated(data.results);
      }

    buscarFilmes();
    },[])

    useEffect(()=>{
      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBmOGM5N2QyY2I0MjFhNzg2YWM4M2RmODg2NDgyMSIsIm5iZiI6MTc1NTAyMTUxMy40MjgsInN1YiI6IjY4OWI4MGM5ZjY3OWYxZjk4MDhlYmExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1pmvF7ANUfX0oYEEEro7Hr2QDXV3VX7DyA-NUhzB5rQ'
          }
        };

        

        const response = await fetch(url, options)
        const data = await response.json();
        console.log(data);

        setMoviesPopular(data.results);
      }
      

    buscarFilmes();
    },[])

    useEffect(()=>{
      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBmOGM5N2QyY2I0MjFhNzg2YWM4M2RmODg2NDgyMSIsIm5iZiI6MTc1NTAyMTUxMy40MjgsInN1YiI6IjY4OWI4MGM5ZjY3OWYxZjk4MDhlYmExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1pmvF7ANUfX0oYEEEro7Hr2QDXV3VX7DyA-NUhzB5rQ'
          }
        };

        

        const response = await fetch(url, options)
        const data = await response.json();
        console.log(data);

        setMoviesEmBreve(data.results);
      }
      

    buscarFilmes();
    },[])

    useEffect(()=>{
      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBmOGM5N2QyY2I0MjFhNzg2YWM4M2RmODg2NDgyMSIsIm5iZiI6MTc1NTAyMTUxMy40MjgsInN1YiI6IjY4OWI4MGM5ZjY3OWYxZjk4MDhlYmExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1pmvF7ANUfX0oYEEEro7Hr2QDXV3VX7DyA-NUhzB5rQ'
          }
        };

        

        const response = await fetch(url, options)
        const data = await response.json();
        console.log(data);

        setMoviesCartaz(data.results);
      }
      

    buscarFilmes();
    },[])

    return(
      <ScrollView style={styles.scrollcont}>
        <View style={styles.container}>
        
          <Cabecalho />
        
          <Pesquisa />
        
          <Banner/>
          <View style ={{width: "90%", height:"300%"}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={moviesTopRated}
              keyExtactor={(item) => item.id}
              renderItem={({item}) => (
        
        
                <CardMovies style={styles.textNota} titulo = {item.title} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                  
              )}
            />  
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={moviesPopular}
              keyExtactor={(item) => item.id}
              renderItem={({item}) => (
        
        
                <CardMovies style={styles.textNota} titulo = {item.title} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                  
              )}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={moviesEmBreve}
              keyExtactor={(item) => item.id}
              renderItem={({item}) => (
        
        
                <CardMovies style={styles.textNota} titulo = {item.title} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                  
              )}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={moviesCartaz}
              keyExtactor={(item) => item.id}
              renderItem={({item}) => (
        
        
                <CardMovies style={styles.textNota} titulo = {item.title} nota = {item.vote_average} imagem = {item.poster_path} sinopse = {item.overview}/>
                  
              )}
            />
          </View>
        </View>
      </ScrollView>
    )
}
  