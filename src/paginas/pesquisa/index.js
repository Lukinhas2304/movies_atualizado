import {View, Text, FlatList,Image,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import styles from './style';

export default function PesquisarFilmes(){

    const [filmes, setFilmes] = useState (['']);

    useEffect(()=>{
        async function buscarFilmes() {
            const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&include_adult=false&language=pt-BR&page=1`;
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBmOGM5N2QyY2I0MjFhNzg2YWM4M2RmODg2NDgyMSIsIm5iZiI6MTc1NTAyMTUxMy40MjgsInN1YiI6IjY4OWI4MGM5ZjY3OWYxZjk4MDhlYmExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1pmvF7ANUfX0oYEEEro7Hr2QDXV3VX7DyA-NUhzB5rQ'
                }
            };

            const response = await fetch (url, options)
            const data = await response.json()
            console.log(data.results)
            setFilmes(data.results)
        }

        buscarFilmes()
    },[])

    const route = useRoute();

    return(
    <ScrollView>
        <FlatList
            data={filmes}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View>
                    <Text>Filme:{item.title}</Text>
                    <Text>Nota: {item.vote_average}</Text>
                    <Image style ={{width: "100%",height:150}} source={{uri:(`https://image.tmdb.org/t/p/original/${item.poster_path}`)}}/>
                </View>
            )}
        />
    </ScrollView>
    )
}   