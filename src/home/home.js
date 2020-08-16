import React,{ Component }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button
} from 'react-native';



import Homec from './container/homec';
import HEADER from './components/header';
import Body from './components/body';
import APIS from './components/utils/api';

import MMKVStorage from "react-native-mmkv-storage";

var MMKV = new MMKVStorage.Loader().initialize();

export default class HomeScreem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      nameCity:'',
      date:'',
      enableValue:false,
      Lat:0,
      Long:0,
      
     }
    this.flag='';
   
    this.getCityValue = this.getCityValue.bind(this);
    
  }

  async componentDidMount(){
    this.searchValue="Buenos Aires"; //here you can place
    // GPS data lat and long and locate on the map
    this.getCityForecastWeather(this.searchValue);
    }

  componentDidUpdate() {
   console.log('componentDidUpdate ');
   if(this.props.route.params!=null && this.props.route.params.something!=null 
    && this.props.route.params.something!=this.flag ){
     this.flag=this.props.route.params.something;
     console.log("componentDidUpdate "+this.props.route.params.something);
     this.getCityForecastWeather(this.props.route.params.something);
   }
      
  }

  getCityValue(val) {
      this.getCityForecastWeather(val)
      
  }


  

  async getCityForecastWeather(city){
    console.log("searching... "+city)
    const dataForecast= await APIS.getForeCast(city);  
    console.log("getCityForecastWeather");
    if (typeof dataForecast.name === 'undefined'){
      console.log("City not found");
      alert("City not found");
    }else{
      console.log(dataForecast.name);
      this.setState({
        nameCity: dataForecast.name,
        date: dataForecast.sys.country,
        Temperature: dataForecast.main.temp,
        Pressure: dataForecast.main.pressure,
        Humidity: dataForecast.main.humidity,
        MaxTemperature: dataForecast.main.temp_max,
        MinTemperature: dataForecast.main.temp_min,
        Lat: dataForecast.coord.lat,
        Long: dataForecast.coord.lon,
                  
      })
    }
    
  }
  
  
  render(){
    
    return(
      
      <Homec>
        <HEADER getCity={this.getCityValue}
        //getEnableButton={this.getCityArray}
        navigation={this.props.navigation}/>  
        {/* <Body dataName={this.state.nameCity} />   */}
        <Body dataName={this.state.nameCity}
        dataCountry={this.state.date}
        dataTemperature={this.state.Temperature}
        dataPressure={this.state.Pressure}
        dataHumidity={this.state.Humidity}
        dataMaxTemperature={this.state.MaxTemperature}
        dataMinTemperature={this.state.MinTemperature}
        dataLat={this.state.Lat}
        dataLong={this.state.Long}
        />
        
      </Homec>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 }); 


