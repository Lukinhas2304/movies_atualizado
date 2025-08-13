import {Text, Image} from "react-native";
import styles from './style'

// Array de imagens
const imagens = [
    require('../../../assets/cinepolis.webp')
];

// Escolhe uma imagem aleatória
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner(){

    return(
        <>
            <Text style={styles.textBanner}> FILMES </Text>
    
            <Image style={styles.imageBanner} source={imagem}/>
        </>
    );
    
}