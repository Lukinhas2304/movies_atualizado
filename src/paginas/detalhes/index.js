import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {View, Text, TouchableOpacity, Image} from "react-native-web";
import styles from "./style.";
export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <View style = {styles.viewContainer}>
       
        <View  style = {styles.viewCard}>
            <Image style = {styles.images} source = {{uri:(route.params.imagem)}}/>
            <Text style ={styles.titulo}> {route.params.titulo}</Text>
            <Text style ={styles.nota}> {route.params.nota} </Text>
            <TouchableOpacity style = {styles.button}onPress={()=> navigation.goBack()}>Página Inicial</TouchableOpacity>
        </View>
            <View   style = {styles.sinopseCont}>
            <Text style = {styles.sinopse}>SINOPSE</Text>
            <Text styles = {styles.sinopse}>{route.params.sinopse}</Text>
            </View>
        </View>
    )
}