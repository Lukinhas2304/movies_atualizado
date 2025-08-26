import {View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect,useState } from 'react';

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
        }

        buscarFilmes()
    },[])

    const route = useRoute();

    return(
        <View>
        <Text>
            {route.params.pesquisa}
        </Text>
    </View>
    )
}   