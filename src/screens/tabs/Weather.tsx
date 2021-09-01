import * as React from 'react';
import * as RN from 'react-native';
import * as Location from 'expo-location';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { GreenColor, PrimaryColor, PrimaryColor2 } from '../../utils/colors';
import ForecastList from '../../components/ForecastList';
import { getWeatherData, getHourlyWeatherData } from '../../utils/useWeather';
// import { getLocationInfo } from '../../utils/getLocationInfo';
import { useGeoLocation } from './../../utils/useGeoLocation';
import moment from "moment";
import {weatherIcons} from "../../utils/weatherIcons";

export default function Weather() {
  const [location, setLocation] = React.useState(null);
  const [hourly, setHourly] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    getCoord();
  }, []);

  const getCoord = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    getWeatherData(location?.coords?.latitude, location?.coords?.longitude).then((data) =>
    setLocation(data))
    getHourlyWeatherData(location?.coords?.latitude, location?.coords?.longitude).then((data) =>
    setHourly(data))

  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // text = JSON.stringify(location);
    text = Object.create(location);
  }

// console.log(moment("15", "hh").format('LT'))

  // let latitude = location?.coords?.longitude;
  // let longitude = location?.coords?.latitude;
  // let weatherData = getWeatherData(latitude, longitude);

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        backgroundColor={PrimaryColor}
        barStyle={'dark-content'}
        translucent={true}
      />
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={styles.headerTitle}>Today - </RN.Text>
        <RN.Text style={styles.city}>{location?.name}, {location?.country}</RN.Text>
      </RN.View>

      <RN.View style={styles.infoBigWrapper}>
        <RN.View style={{ alignItems: 'center' }}>
          <RN.View style={styles.bigIconWrapper}>
            <RN.Image
              style={styles.infoBigIcon}
              source={weatherIcons[location?.icon]}
            />
          </RN.View>
        </RN.View>
        <RN.Text style={styles.infoBigValue}>{location?.temp}{'\xB0C'}</RN.Text>
        {/*<RN.Text style={styles.infoBigValueDesc}>{text?.coords?.latitude}</RN.Text>*/}
      </RN.View>

      {/* forecast */}
      <ForecastList data={hourly?? []} />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
    padding: RFValue(20),
    paddingTop: RFValue(40),
    justifyContent: 'space-between',
  },
  content: {},
  contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: RFValue(20),
    fontFamily: 'Md',
    color: '#FFFFFF',
  },
  city: {
    fontSize: RFValue(25),
    fontFamily: 'Xb',
    color: '#FFFFFF',
  },
  infoBigWrapper: {},
  bigIconWrapper: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: RFValue(200),
    width: RFValue(200),
  },
  infoBigIcon: {
    // color: PrimaryColor2,
    // fontSize: RFValue(200),
    // fontFamily: 'Bd',
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  infoBigValue: {
    color: '#FFFFFF',
    fontSize: RFValue(80),
    fontFamily: 'Bd',
  },
  infoBigValueDesc: {},
});
