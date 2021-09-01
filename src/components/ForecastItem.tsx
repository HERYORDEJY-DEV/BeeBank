import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, PrimaryColor2 } from '../utils/colors';
import {weatherIcons} from "../utils/weatherIcons";

interface Props {hour: string; temp: string, icon: string}

export default function ForecastItem(props: Props) {
  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.time}>{props.hour}</RN.Text>
      <RN.View style={styles.bigIconWrapper}>
        <RN.Image
            style={styles.infoBigIcon}
            source={weatherIcons[props.icon]}
        />
      </RN.View>
      <RN.Text style={styles.value}>{props.temp}°C</RN.Text>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor2,
    width: RFValue(64),
    height: RFValue(99),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: RFValue(20),
    borderWidth: RFValue(0.5),
    borderRadius: RFValue(5),
    borderColor: PrimaryColor2,
  },
  time: {  fontSize: RFValue(14), fontFamily: 'Sb' , color: '#FFFFFF'},
  icon: { color: PrimaryColor2, fontSize: RFValue(50) },
  value: {  fontSize: RFValue(14), fontFamily: 'Sb', color: '#FFFFFF' },
  bigIconWrapper: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: RFValue(40),
    width: RFValue(40),
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
});
