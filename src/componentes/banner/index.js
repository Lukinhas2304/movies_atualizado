import {Text, Image} from "react-native";
import styles from './style'

// Array de imagens
const imagens = [
    require('../../../assets/Ant-Man_and_the_Wasp.jpg'),
    require('../../../assets/Black_Panther_2018.jpg'),
    require('../../../assets/Black_Widow_(2021).jpg'),
    require('../../../assets/capitao_america_guerracivil_poster.jpg'),
    require('../../../assets/Doctor_Strange_poster.jpg'),
    require('../../../assets/Eternals_poster.jpg'),
    require('../../../assets/guardioes_da_galaxia_poster.jpg'),
    require('../../../assets/guerra_infinita_poster.jpg'),
    require('../../../assets/Iron_Man_poster.jpg'),
    require('../../../assets/londe de casa_ poster.jpg'),
    require('../../../assets/poster_shang-chi_poster.jpg'),
    require('../../../assets/sem volta pra casa_poster.jpg'),
    require('../../../assets/The_Avengers_Cartaz.jpg'),
    require('../../../assets/ultimato_poster.jpg'),
    require('../../../assets/vingadores_ultron_poster.jpg')
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