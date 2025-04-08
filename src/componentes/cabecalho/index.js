import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {Feather} from '@expo/vector-icons';

export default function Cabecalho(){
    return(
        <View style = {styles.viewHeader}>
        
            <TouchableOpacity>
                <Feather style = {{marginLeft:-70}} name = 'menu' size = {36} color = "#FFF" />
            </TouchableOpacity>  
        
            <Text style = {styles.textHeader}> TELA MÁGICA </Text>
        </View>
    );
}