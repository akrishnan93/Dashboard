import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import moment from 'moment-timezone'

const FutureForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
        {
            data && data.length > 0 ? 
            data.map((data, idx) => (
                idx !== 0 &&  <FutureForecastItem key={idx} forecastItem={data}/>
            ))
            :
            <View/>
        }
    </View>
  )
};

const FutureForecastItem = ({forecastItem}) => {
    const img = {uri: 'http://openweathermap.org/img/wn/' + forecastItem.weather[0].icon + '@4x.png'}

    return (
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>{moment(forecastItem.dt * 1000).format("dddd")}</Text> 
            <Image source ={img} style={styles.image}/>
            <Text style={styles.temp}>Night: {forecastItem.temp.night}&#176;F</Text> 
            <Text style={styles.temp}>Day: {forecastItem.temp.day}&#176;F</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100
    }, 
    futureForecastItemContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius:10,
        borderColor:"#eee",
        borderWidth:1,
        padding: 25,
        marginLeft: 5,
        marginRight: 30
    }, 
    day: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },   
    temp: {
        fontSize: 14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
})

export default FutureForecast;
