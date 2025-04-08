import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function CardMovies(){
    return(
        <TouchableOpacity style = {styles.containerJogos}>
        
         
         <View  style = {styles.viewcontainer}>


        <View >
            <Image style = {styles.images} source = {require(`../../../assets/Ant-Man_and_the_Wasp.jpg`)}/>
            <Text style = {styles.titulo}>Titulo do Filme</Text>
            <Text style= {styles.textNota}>Nota do Filme</Text>-
        </View>
        <View>
            <Image style = {styles.images} source = {require(`../../../assets/Black_Panther_2018.jpg`)}/>
            <Text style = {styles.titulo}>Titulo do Filme</Text>
            <Text style= {styles.textNota}>Nota do Filme</Text>-
        </View>
    






         </View>


         


            
            
        </TouchableOpacity>
    );
}