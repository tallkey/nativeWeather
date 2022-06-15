import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import IWeather from 'weatherTypes';

export default function WeatherInfo({ currentWeather }: IWeather) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main } = details;

  return (
    <View style={styles.WeatherInfo}>
      <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} />
      <Text style={styles.weatherTemp}>
        {Math.round(temp)}
        &#176;
      </Text>
      <Text style={styles.weatherDescription}>{main}</Text>
      <Text style={styles.weatherCity}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherTemp: {
    color: 'white',
    fontSize: 35,
  },
  weatherDescription: {
    color: 'white',
    fontSize: 32,
    textTransform: 'lowercase',
  },
  weatherCity: {
    fontSize: 20,
    color: 'white',
  },
});
