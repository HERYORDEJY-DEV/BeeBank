import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor } from '../../utils/colors';

export default function Alarm() {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        backgroundColor={PrimaryColor}
        barStyle={'light-content'}
        translucent={true}
      />
      {/* Header */}
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <RN.Text style={styles.title}>Alarm Screen</RN.Text>
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    padding: RFValue(20),
  },
  content: {},
  contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: RFValue(50), fontFamily: 'Xb' },
});
