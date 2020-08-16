import React,{ Component }  from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,Item
} from 'react-native';

function VerticalSeparator(props){

    return(
        <View style={[
            styles.separator,
            {
             borderTopColor: (props.color) ? props.color:'#eaeaea'
            }
            ]}>
            
        </View>
    )

}

const styles=StyleSheet.create({
    separator:{
        borderBottomWidth:1,
                
    },
    

});

export default VerticalSeparator;