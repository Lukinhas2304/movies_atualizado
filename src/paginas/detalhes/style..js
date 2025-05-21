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
        marginBottom: 30
    },

    viewContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 35,
        backgroundColor:  '#141a29'
    },
    images:{
        
        width: 150,
        height: 260,
        borderRadius: 8,
    },
    
    titulo:{
        fontSize: 20,
        color:'black'
    },
    nota: {
        marginTop: 30,
        marginBottom:5,
        fontSize:20
    },
    sinopseCont:{
        marginTop: 35,
        fontSize: 10,
        backgroundColor: 'white',
          flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        textAlign: 'center',
        height: 500 ,
        width: 300,
        borderRadius: 30
      
    },


    sinopseT:    {
        color: 'black',
        fontSize: 30,
        marginTop: 30,
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
        fontSize: 20,
        color: 'black',
        padding:15,
        fontFamily: "Arial"
    
    }
})

export default styles;

