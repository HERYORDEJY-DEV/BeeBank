// import React, { useState, useEffect, useRef } from 'react';
// import { API_KEY } from "react-native-dotenv";
import axios from 'axios';
import moment from "moment";
// import { getLocationInfo } from './getLocationInfo';

const API_KEY = `5e8205419a200ef7d8bd90e096f0c41a`;

const _url = 'http://api.openweathermap.org/data/2.5/weather?lat=8.4846727&lon=4.6747559&appid=5e8205419a200ef7d8bd90e096f0c41a'

// fetch api with axios
const url = 'https://api.openweathermap.org/data/2.5';

const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});

// export function useWeather(lat, lon) {
//   const [weather, setWeather] = useState(null);

//   const latLon = useGeoLocation();

//   useEffect(() => {
//     if (latLon) {
//       fetchAPI(...latLon);
//     }
//   }, [latLon]);

//   const fetchAPI = async (lat, lon) => {
//     try {
//       const endpoint = `/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
//       const res = await callAPI.get(endpoint);
//       const data = await storeWeather(filterData(res.data));
//       setWeather(data);
//     } catch (err) {
//       console.log('API conection failed');
//       const data = await getWeather();
//       setWeather(data);
//     }
//   };

//   return weather;
// }

function fToC(fahrenheit)
{
  let fToCel = (fahrenheit - 32) * 5 / 9;
  return fToCel + '\xB0C.';
}

const filterData = (rawData) => {
  const {id, name, cod, coord: {lat, lon}, weather: {0:{ icon}}, main: {temp, pressure, humidity, }, sys: {country}}  = rawData
  return {
    id,
    cod,
    name,
    country,
    lat,
    lon,
    icon, temp, pressure, humidity,
  };
};

const getHourly = (data) => {
const {hourly} = data;
return  hourly.map((hour) => {
  return {'hour': moment(hour.dt).format('hA') , 'temp': hour.temp, 'icon': hour.weather[0].icon, 'id': hour.weather[0].id}
})
}


export const getWeatherData = async (latitude, longitude) => {
  let weather;
  try {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const res = await axios.get(endpoint);
    // console.log( filterData(res.data));
    return filterData(res.data);
    // return location;
  } catch (err) {
    console.log('API conection failed');
  }
  // return weather;
};

export const getHourlyWeatherData = async (latitude, longitude) => {
  let weather;
  try {
    const endpoint = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&exclude=minutely,daily&units=metric`
    const res = await axios.get(endpoint);
    // console.log( filterData(res.data));
    return getHourly(res.data);
    // return location;
  } catch (err) {
    console.log('API conection failed');
  }
  // return weather;
};



const dummyLocation = {"base": "stations", "clouds": {"all": 99}, "cod": 200, "coord": {"lat": 8.4847, "lon": 4.6748}, "dt": 1624267811, "id": 2337639, "main": {"feels_like": 302.01, "grnd_level": 974, "humidity": 67, "pressure": 1015, "sea_level": 1015, "temp": 300.31, "temp_max": 300.31, "temp_min": 300.31}, "name": "Ilorin", "sys": {"country": "NG", "sunrise": 1624253074, "sunset": 1624298494}, "timezone": 3600, "visibility": 10000, "weather": [{"description": "overcast clouds", "icon": "04d", "id": 804, "main": "Clouds"}], "wind": {"deg": 281, "gust": 3.14, "speed": 2.68}}