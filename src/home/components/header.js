import React, { Component }  from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Platform,
    Image,
    ImageBackground,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    AsyncStorage
  } from 'react-native';

  import HeaderLayout from './header-layout';
  import ListViewActivity from '../../ListActivity';
  import Body from './body';
  //import MMKV from "react-native-mmkv-storage";
  import APIS from '../components/utils/api';
  import MMKVStorage from "react-native-mmkv-storage";

  var MMKV = new MMKVStorage.Loader().initialize();
  
  var CityArray = [] ;
  class Header extends Component{

    constructor(props) {
      super(props);
      this.state = {
        inputVal: '',
        Holder: '',
        enable:false,
        CityArray:[],
      }
      //this.onInputChange = this.onInputChange.bind(this);
      this.sendCitySelected = this.sendCitySelected.bind(this);
    }

    
     AddItemsToArray=()=>{
 
      //Adding Items To Array.
      if(CityArray.indexOf(this.state.Holder.toString()) > -1){
        //si la ciudad ya esta en la lista no la repite

      }else{
        CityArray.push(this.state.Holder.toString());
        this.saveArray(CityArray);
        console.log("CityArray "+CityArray);
        console.log("CityArray "+Object.keys(CityArray));
      }
      
      //APIS.saveData(CityArray)
      // Showing the complete Array on Screen Using Alert
      //alert(CityArray.toString());
      
      //this.props.getEnableButton(this.state.CityArray)
      
 
  }

  gotoListActivity=()=>{
    this.props.navigation.navigate('ListCity')
  }

  saveArray(array){
    MMKV.setArray("array", array, (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
    
      console.log("Ok "+result); // logs true
    });
  }

  
    
  // handle button click event and pass data in parent
  sendCitySelected() {
    if(this.state.Holder!=''){
      this.props.getCity(this.state.Holder);
      this.AddItemsToArray();
    }else{
      alert("you must write a city");
    }
 } 
    
    render(){
        
      return(
        <HeaderLayout
        title="Weather"
        >
        <TouchableHighlight 
        onPress={this.gotoListActivity}
        style={styles.buttonX}
        underlayColor="green"
        hitSlop={{
            top: 5,
            left: 5,
            bottom: 5,
            right: 5, 
          }}
        >
        <Text>go to ListCity</Text>
        </TouchableHighlight>
        {/* <View style={styles.containerOne}> */}
        
        <Text style={styles.textOne}>Enter city:</Text>
        <TextInput style={styles.searchBar}
          onChangeText={(search) => 
            this.setState(
            // {inputVal:search},
            {Holder:search},
            console.log("busqueda "+search)
            )
        }
        
        placeholder="Ej: Caracas"
        placeholderTextColor="grey"
    
        />
        <TouchableHighlight 
        onPress={this.sendCitySelected}
        style={styles.buttonAdd}
        underlayColor="cyan"
        hitSlop={{
            top: 5,
            left: 5,
            bottom: 5,
            right: 5, 
          }}
        >
        <Text >Search</Text>
        </TouchableHighlight>
        
       </HeaderLayout>
      )
  }
}



  const styles=StyleSheet.create({
    logo:{
        width: 200,
        height: 200,
        resizeMode:'contain'
    },
    containerImage:{
      paddingVertical:30,
      paddingHorizontal:5,
      
      resizeMode:'cover'
              
  },
    container:{
        backgroundColor: 'white',
        alignItems: 'flex-end',
        height: '30%',
        flex:1,
                
    },
    containerOne:{
       marginTop:10,
       flexDirection:'column',
                
    },
    rigth:{
        backgroundColor:'green',
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
          
    },
    text:{
        fontSize:22,
        color:'black',
        marginLeft:10,

    },
    textOne:{
        fontSize:18,
        color:'#4c4c4c',
        marginLeft:10,
    },
    searchBar: {
        fontSize:18,
        marginLeft:10,
        width: '80%',
        height: 50,
        marginTop:5,
        color:'black',
        backgroundColor: 'white',
        borderRadius:20,
    },
    itemText: {
        margin: 2,
        color: 'white',
        fontSize: 18,
        backgroundColor: 'black',
        width: '100%',
        height: 50
      },
      buttonAdd:{
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'transparent'
      },
      buttonX:{
        paddingHorizontal: 15,
        height: 25,
        marginHorizontal:23,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'transparent'
      },
      container_second:
     {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        backgroundColor:'#ff00ff'
         
     },
     ActivityNameTextCss:
     {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
     },

});



export default Header;