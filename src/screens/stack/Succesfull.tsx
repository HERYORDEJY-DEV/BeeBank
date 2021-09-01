import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { GreenColor, PrimaryColor } from '../../utils/colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import { BoldText } from '../../utils/textStyles';

export default function Succesfull() {
  // navigation instance
  const navigation = useNavigation();

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NB.Icon
        style={styles.icon}
        name={'ios-checkmark-done-circle-sharp'}
        type={'Ionicons'}
      />

      <RN.Text style={styles.text}>Yayy!!{`\n`}Transaction Successfull</RN.Text>
      <RN.Pressable
        style={styles.sendButton}
        onPress={() => navigation.navigate('Wallet')}
      >
        <RN.Text style={styles.send}>Go Home</RN.Text>
      </RN.Pressable>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {},
  contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: {
    fontSize: RFValue(30),
    fontFamily: 'Xb',
    color: GreenColor,
    textAlign: 'center',
    marginBottom: RFValue(100),
  },
  icon: { fontSize: RFValue(300), fontFamily: 'Xb', color: GreenColor },
  sendButton: {
    width: '100%',
    height: RFValue(50),
    backgroundColor: GreenColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(20),
    elevation: RFValue(3),
  },
  send: { ...BoldText, color: '#FFFFFF' },
});
