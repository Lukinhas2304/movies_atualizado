import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: '#141a29',
      alignItems: 'center'
    },

    containerView:{
        display:'flex',
        flexDirecrion:'column',
        alignItems:'center'
    },
    textBanner:{
        fontSize: 30,
        color: 'white',
        marginTop: 15,
        marginLeft: -180,
        fontWeight: 'bold'
    }
  });

  export default styles;