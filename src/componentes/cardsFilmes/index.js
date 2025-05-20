import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo,imagem,nota,sinopse}){
    const navigation = useNavigation();
    return(
        <>
        <TouchableOpacity style = {styles.containerJogos} onPress={()=> navigation.navigate('Detalhes',{titulo, nota, imagem, sinopse})}>
         
        <View  style = {styles.viewcontainer}> 
            <View style = {styles.viewCards}>
                <Image style = {styles.images} source = {{uri:(imagem)}}/>
                <Text style = {styles.titulo}>{titulo}</Text>
                <Text style= {styles.textNota}>{nota}</Text>
                <Text style = {styles.sinopse}></Text>
            </View>

        </View>

        </TouchableOpacity>

        </>
    );
}