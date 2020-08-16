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

function CitiesListLayout(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        paddingVertical:10,
        flex:1,
                
    },
    title:{
        color:'#4c4c4c',
        fontSize:15,
        marginBottom:10,
        fontWeight:'bold',
        marginLeft:8,

    }

});
export default CitiesListLayout;