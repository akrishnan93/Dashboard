import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { auth } from '../firebase'
import DateTime from '../components/DateTime.js'
import WeatherScoll from '../components/WeatherScoll'
import * as Location from 'expo-location';

const HomeScreen = () => {
  const navigation = useNavigation()
  const image = require('../assets/bg_image.png')
  const API_KEY = "2d8d10edfb9a8be575c9651a2e7881a0";

  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {
      setData(data)
      console.log(data);
      })
    }
  }


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style = {styles.image}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
        <WeatherScoll weatherData={data.daily}/>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {flex:1, resizeMode: "cover", justifyContent: "center"}
})