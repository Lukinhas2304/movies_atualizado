import {Text, Image} from "react-native";
import styles from './style'

// Array de imagens
const imagens = [
    require('../../../assets/guardioes_da_galaxia_poster.jpg'),
    require('../../../assets/Black_Panther_2018.jpg'),
    require('../../../assets/Black_Widow_(2021).jpg'),
    require('../../../assets/capitao_america_guerracivil_poster.jpg')
];

// Escolhe uma imagem aleatória
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner(){

    return(
        <>
            <Text style={styles.textBanner}> Em Cartaz </Text>
    
            <Image style={styles.imageBanner} source={imagem}/>
        </>
    );
    
}