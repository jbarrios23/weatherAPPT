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
    Images,
    IconExplore,
    ImageBackground
  } from 'react-native';
  import MapView, { PROVIDER_GOOGLE,AnimatedRegion, Marker } from 'react-native-maps';
 

  class Body extends Component{

    constructor(props) {
        super(props);
        this.state = {
          getLat: 10.16,
          getLong:-68.01,
          
        }
        
      }

    render(){
        return(
            <View >
                
                <Text style={styles.containerText}>
                <ImageBackground source={require('../../../assets/loc.png')} 
                style={styles.ImageBackground} />
                <Text style={styles.textLocation}>{this.props.dataName}</Text>
                </Text>    
                <Text style={styles.containerFecha}>
                <Text>Country: {this.props.dataCountry}</Text>
                </Text>
                <Text style={styles.containerParam}>
                <Text>Temperature: {this.props.dataTemperature}</Text>
                </Text>
                <Text style={styles.containerParam}>
                <Text>Pressure: {this.props.dataPressure}</Text>
                </Text>
                <Text style={styles.containerParam}>
                <Text>Humidity: {this.props.dataHumidity}</Text>
                </Text>
                <Text style={styles.containerParam}>
                <Text>Max Temperature: {this.props.dataMaxTemperature}</Text>
                </Text>
                <Text style={styles.containerParam}>
                <Text>Min Temperature: {this.props.dataMinTemperature}</Text>
                </Text>

                <View style={styles.containerMap}>
                <Text style={styles.containerMapText}>Mapa</Text>
                <Text style={styles.containerMapText}>Lat: {this.props.dataLat}</Text>
                <Text style={styles.containerMapText}>Long: {this.props.dataLong}</Text>
                </View>
                <View style={styles.containerMapN}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                            region={{
                            latitude: this.props.dataLat,
                            longitude: this.props.dataLong,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                        <MapView.Marker
                         coordinate={{
                            latitude: this.props.dataLat,
                            longitude: this.props.dataLong}}
                         pinColor = {"purple"} 
                         title={this.props.dataName}
                         description={this.props.dataCountry}
                        />    
                    </MapView>
                    </View> 
            </View>
            
        )
    }
  }

  const styles=StyleSheet.create({
    container:{
        padding:15,
                  
    },
    containerText:{
        flex:0,
        padding:10,
                  
    },
    ImageBackground:{
        width: 25,
        height: 25,
    },
    textLocation:{
        fontSize:25,
        marginLeft:30,
    },
    containerFecha:{
        fontSize:15,
        marginLeft:30,
    },
    containerParam:{
        fontSize:15,
        marginLeft:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    containerMap:{
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        
    },
    containerMapText:{
        fontSize:10,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        
    },
    containerMapN: {
        ...StyleSheet.absoluteFillObject,
        height: '80%',
        width: 400,
        marginVertical:300,    
        justifyContent:'center',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },

});

export default Body;