import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavBar from '../../components/NavBar';
import { BlackColor, PrimaryColor } from '../../utils/colors';
import NumberPad from '../../components/NumberPad';
import { BoldText } from '../../utils/textStyles';
import ContactItem from '../../components/ContactItem';
import { useRoute, useNavigation } from '@react-navigation/native';
import { transacList } from '../../api/datas';

export default function SendMoney() {
  // navigation instance
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  // check validity
  const [send, setSend] = React.useState({ enable: undefined });
  const enableSend = (value) => setSend({ enable: value });

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavBar title={'Send Money'} />

      {/* recipeint details */}
      <RN.View style={styles.contWrapper}>
        <ContactItem {...params} receipient={true} />
      </RN.View>

      <RN.View style={styles.padWrapper}>
        <NumberPad validityCheck={setSend} />
      </RN.View>
      <RN.Pressable
        disabled={!send.enable ? true : false}
        style={[
          styles.sendButton,
          { backgroundColor: send.enable ? PrimaryColor : BlackColor + '50' },
        ]}
        onPress={() => navigation.navigate('Succesfull')}
      >
        <RN.Text style={styles.send}>Send</RN.Text>
      </RN.Pressable>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: RFValue(40),
    paddingHorizontal: RFValue(20),
    justifyContent: 'space-between',
  },
  content: {},
  contentContainer: {},
  contWrapper: { flex: 0.1, marginVertical: RFValue(20) },
  padWrapper: { flex: 0.8 },
  sendButton: {
    flex: 0.1,
    height: RFValue(64),
    backgroundColor: PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(20),
    elevation: RFValue(3),
  },
  send: { ...BoldText, color: '#FFFFFF' },
});
