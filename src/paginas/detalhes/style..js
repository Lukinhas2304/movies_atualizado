import { StyleSheet } from "react-native";

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
        marginTop: 35
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
        marginTop: 10,
        marginBottom:10
    },
    sinopseCont:{
        color: 'white',
        fontSize: 10,
      
          flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      
    },
    sinopse:    {
        color: 'white',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30
    }
})

export default styles;

