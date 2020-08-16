import React, { Component } from "react";
import MMKVStorage from "react-native-mmkv-storage";
const BASE_API='http://api.openweathermap.org/data/2.5/weather?';

class Api{
   
    async getForeCast(city){
        console.log("getForeCast "+city);
        //const query= await fetch(`${BASE_API}units=metric&appid=e94c6ede2116d4d60e51e3da969dd635&q=${city}`)
        const query= await fetch(`${BASE_API}units=metric&appid=e94c6ede2116d4d60e51e3da969dd635&q=${city}`)
        //const {data}=await query.json();
        .catch(function(error){
          console.log('There has been a problem with your fetch operation: ' + error.message);
          // ADD THIS THROW error
          throw error;
          });
        let data=await query.json();
        console.log(`${BASE_API}units=metric&appid=e94c6ede2116d4d60e51e3da969dd635&q=${city}`);
        //console.log("data");
        //console.log(data);
        return data;
    }
    
      

}

export default new Api();