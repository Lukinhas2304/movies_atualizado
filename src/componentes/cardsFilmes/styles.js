import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerJogos:{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        paddingTop: 16,
        paddingRight: 16,
        width: 140,
        height: 28
    },
    titulo:{
        color: 'white',
        fontSize: 12,
        paddingTop: 8
    },
    textNota:{
        color: 'white',
        fontSize: 10,
        paddingLeft: 4
    },
    images:{
        width: 110,
        height: 220,
        borderRadius: 8
    },

    viewcontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap: '20px',
        marginLeft:'-69px'
    },

    viewcard:{
        padding: '10px'
    }
    
   
})

export default styles