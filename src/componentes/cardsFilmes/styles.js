import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerJogos:{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingRight: 16,
        marginRight: 20,
        width: 140,
        height: 28
    },
    titulo:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 8,
        marginLeft: 7
    },
    textNota:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    images:{
        width: 140,
        height: 220,
        borderRadius: 8
    }
})

export default styles