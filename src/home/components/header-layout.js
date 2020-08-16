import React,{ Component }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  ImageBackground
} from 'react-native';

function HeaderLayout(props){
    return(
        <ImageBackground
            source={require('../../../assets/fondo.png')}  
            style={styles.container}>
            <View style={styles.contentTitle}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
            </View>
            
           </ImageBackground>
            
       
    )
}

const styles=StyleSheet.create({
    container:{
        paddingVertical:30,
        paddingHorizontal:5,
                          
    },
    title:{
        color:'white',
        fontSize:25,
        marginBottom:10,
        fontWeight:'bold',
    },
    contentTitle:{
        alignItems:'center'
    }

});
export default HeaderLayout;