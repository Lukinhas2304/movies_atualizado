import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {View, Text, TouchableOpacity, Image} from "react-native-web";
import styles from "./style.";
export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <View>
            <Image style = {styles.images} source = {{uri:(route.params.imagem)}}/>
            <Text style ={styles.titulo}> {route.params.titulo}</Text>
            <Text style ={styles.nota}> {route.params.nota} </Text>
            <TouchableOpacity onPress={()=> navigation.goBack()}>Página Inicial</TouchableOpacity>
        </View>
    )
}