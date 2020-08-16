// screens/Blog.js

import React, { Component } from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  View,Item,
  Button,
  Alert
} from 'react-native';


import MMKVStorage from "react-native-mmkv-storage";
import Layout from '../src/home/components/cities-list-layout';

var MMKV = new MMKVStorage.Loader().initialize();
class ListActivity extends Component {
  state={
    cityArray:[],
}
  

  async componentDidMount(){
    this.showDataFromHeader();
  }

     
   async showDataFromHeader(){
    MMKV.getArray("array" , (error, result) => {

      if (error) {
        console.log(error)
        return;
        }

        this.setState({
          cityArray:result,
        })
     //let CityArray=result;
     
     console.log("Get Array "+this.state.cityArray) // logs array
     });
  }

  deleteItem(itemSelected){
  var index = this.state.cityArray.indexOf(itemSelected);
  if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
  this.state.cityArray.splice(index, 1);
  }
  console.log(this.state.cityArray);
  MMKV.setArray("array", this.state.cityArray, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
  
  console.log("Ok "+result); // logs true
  });
  
  this.setState({
    cityArray:this.state.cityArray
  })
  
}
     
  showAlert1(itemSelected) {  
    Alert.alert(  
        'Information',  
        'Do you want to delete to: '+itemSelected,  
        [  
            {  
                text: 'Delete',
                style:'cancel',  
                onPress: () => {
                  console.log('Delete Pressed'),  
                  this.deleteItem(itemSelected) 
                } 
              },  
            {text: 'Search', onPress: () =>{
              console.log('Search Pressed'),
              this.gointoHome(itemSelected) }
            },  
        ]  
    );  
}

gointoHome(itemSelected){
this.props.navigation.navigate('Home',{something:itemSelected})
}
  
 SampleFunction=(item)=>{
 
    //Alert.alert(item);
    console.log("seleccion de la lista "+item)
    // MMKV.setString("stringCity", item, (error, result) => {
    //   if (error) {
    //     console.log(error);
    //     return;
    //   }
    
    //   console.log("saved "+result);
    // });
    
    this.showAlert1(item);
  }

  render() {
    return (
      <Layout
        title="SELECCION DE CIUDADES: "
        >
        
          <View style={styles.MainContainer}>
          { this.state.cityArray.map((item, key)=>(
          <Text key={key} style={styles.TextStyle} 
          onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)
          )}
          </View>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 10
    
  },
  
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  }
  
 });

export default ListActivity;