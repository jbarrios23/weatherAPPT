import React,{ Component }  from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Item,
    Image
} from 'react-native';

function Cities(props){
    console.log(props)
    return(
        <View style={styles.container}>
            <View style={styles.left}>
            </View>
            <View style={styles.right}>
            <Text style={styles.title} >{props}</Text>
            {/* <Text style={styles.year} >{props.year}</Text>
            <Text style={styles.rating} >{props.rating} Estrellas </Text> */}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row'
                
    },
   cover:{
        height:150,
        width:100,
        resizeMode:'contain'
    },
    right:{
        padding:10,
        justifyContent:'space-between'

    },
    title:{
        fontSize:18,
        color:'#44546b',
        fontWeight:'bold',

    },
    year:{
        backgroundColor:'#70b124',
        paddingVertical:4,
        paddingHorizontal:6,
        color:'white',
        fontSize:11,
        borderRadius:15,
        overflow:'hidden',
        alignSelf:'flex-start'
        
    },
    rating:{
        color:'#6b6b6b',
        fontSize:14,
        fontWeight:'bold',

    }
  

});
export default Cities;