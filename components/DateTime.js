import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import config from "../config"

const WeatherItem = ({title, value, unit}) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}>12:30am</Text>
            </View>
            <View>
                <Text style={styles.subheading}>Saturday, January 29</Text>
            </View>
            <View style = {styles.weatherItemContainer}>
                <WeatherItem title="Humidity" value="79" unit="%"/>
                <WeatherItem title="Pressure" value="897" unit="hPA"/>
                <WeatherItem title="Sunrise" value="05:00" unit="am"/>
                <WeatherItem title="Sunset" value="05:30" unit="pm"/>
            </View>
        </View>
        <View style = {styles.rightAlign}>
            <Text style={styles.timezone}>NA/USA</Text>
            <Text style={styles.latlong}>3.96N 34E</Text>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: config.deviceWidth * 0.03,
        paddingRight: config.deviceWidth * 0.03,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    heading: {
        fontSize: 45,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        fontSize: 25,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 20,
        color:'white',
    },
    latlong:{
        fontSize:16,
        color:'white',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 14,
        fontWeight: '100'
    }
})

export default DateTime;
