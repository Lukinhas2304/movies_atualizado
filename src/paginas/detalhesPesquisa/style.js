import { StyleSheet } from "react-native";
import { Button } from "react-native-web";

const styles = StyleSheet.create({

    viewCard:{
        backgroundColor: 'white',
        height: 500,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 20,  
        marginTop: 35,
        marginBottom: 20
    },

    viewContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:  '#141a29'
    },
    images:{
        width: 250,
        height: 360,
        borderRadius: 8,
    },
    
    titulo:{
        fontSize: 24,
        color:'black',
        fontWeight: 600,
        marginTop: 15
    },
    textNota:{
        color: 'rgb(255, 190, 0)',
        fontSize: 16,
        textAlign: 'center'
    },
    sinopseCont:{
        marginTop: 25,
        fontSize: 10,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        textAlign: 'center',
        height: 'auto',
        width: 350,
        borderRadius: 30,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
    },


    sinopseT:    {
        color: 'black',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold'  
    },
    sinopse:    {
        color: 'black',
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',    
        fontSize: 20
    },
    MainButton:    {
        backgroundColor: 'white',
        borderRadius:25,
        marginTop: 30,
        alignItems:'center'
      
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        padding: 13,
        fontFamily: "Arial"
    
    }
})

export default styles;

