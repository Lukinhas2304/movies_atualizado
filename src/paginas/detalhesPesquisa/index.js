import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {ScrollView, View, Text, TouchableOpacity, Image} from "react-native-web";
import styles from "./style";

export default function DetalhesPesquisa(){
    const route = useRoute();
    const navigation = useNavigation();
    const { filme } = route.params;
    return(
        <ScrollView>
        <View style = {styles.viewContainer}>
       
        <View  style = {styles.viewCard}>
              <Image style = {styles.images} source = {{uri:(`https://image.tmdb.org/t/p/original/${filme.poster_path}`)}}/>
              <Text style ={styles.titulo}> {filme.title}</Text>
            <Text style ={styles.textNota}> {filme.vote_average} </Text>
        
        </View>
            <View   style = {styles.sinopseCont}>
                <Text style = {styles.sinopseT}>SINOPSE</Text>
                <Text style = {styles.sinopse}>{filme.overview}</Text>
            </View>
          
        </View>
        </ScrollView>
    )
}