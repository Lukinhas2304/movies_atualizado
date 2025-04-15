import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function CardMovies({titulo,imagem,nota}){
    return(
        <>
        <TouchableOpacity style = {styles.containerJogos}>
         
        <View  style = {styles.viewcontainer}> 
            <View>
                <Image style = {styles.images} source = {{uri:(imagem)}}/>
                <Text style = {styles.titulo}>{titulo}</Text>
                <Text style= {styles.textNota}>{nota}</Text>
            </View>

        </View>

        
         


            
            
        </TouchableOpacity>

        </>
    );
}