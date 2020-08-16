import React,{ Component }  from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,Item
} from 'react-native';


function Empty(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
    },
    text:{
        fontSize:16, 
        
    },
    

});
export default Empty;