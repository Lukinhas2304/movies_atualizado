import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {ScrollView, View, Text, TouchableOpacity, Image} from "react-native-web";
import styles from "./style.";
export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style = {styles.viewContainer}>
       
        <View  style = {styles.viewCard}>
              <Image style = {styles.images} source = {{uri:(`https://image.tmdb.org/t/p/original/${route.params.imagem}`)}}/>
              <Text style ={styles.titulo}> {route.params.titulo}</Text>
            <Text style ={styles.textNota}> {route.params.nota} </Text>
        
        </View>
            <View   style = {styles.sinopseCont}>
                <Text style = {styles.sinopseT}>SINOPSE</Text>
                <Text style = {styles.sinopse}>{route.params.sinopse}</Text>
            </View>
                <View  style = {styles.MainButton}>
              <TouchableOpacity style = {styles.button}onPress={()=> navigation.goBack()}>Página Inicial</TouchableOpacity>   
                </View>
        </View>
        </ScrollView>
    )
}