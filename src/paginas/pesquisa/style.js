import { StyleSheet } from "react-native";
import { Button } from "react-native-web";

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#141a29',
        height: 500,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 20,  
    },

    viewScroll: {
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#141a29'
    },
    imagem:{
      width: 220,
      height: 350,
      borderRadius: 8,
      alignItems: 'center'
    },
    
    titulo:{
        fontSize: 24,
        color: 'black',
        fontWeight: 600,
        marginTop: 15,
        textAlign: 'center'
    },
    notas:{
        color: 'rgb(255, 190, 0)',
        fontSize: 18,
        textAlign: 'center'
    },
    containerFilme:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginBottom: 35,
      backgroundColor: 'white',
      padding: 15,
      margin: 35,
      borderRadius: 15
    }
})

export default styles;

