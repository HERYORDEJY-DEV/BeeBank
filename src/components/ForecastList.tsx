import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import ForecastItem from './ForecastItem';
import { PrimaryColor2 } from '../utils/colors';

interface Props {
    data: Array<{id: string; hour: string; temp: string, icon: string}>
}

export default function ForecastList(props: Props) {
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={styles.headerText}>Forecast</RN.Text>
      </RN.View>
      <RN.ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
          {props.data.map((d, index) => <ForecastItem key={index.toString()} {...d}/> )}
      </RN.ScrollView>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  headerWrapper: { marginBottom: RFValue(20) },
  headerText: { color: '#FFFFFF', fontSize: RFValue(16), fontFamily: 'Bd' },
  list: {},
});
