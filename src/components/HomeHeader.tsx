import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { HomeHeaderBg } from '../assets/svg/HomeHeaderBg';
import { LogoIcon } from './../assets/svg/LogoIcon';
import { PrimaryColor } from '../utils/colors';

interface Props {}

export default function HomeHeader(props: Props) {
  // get device width
  const width = RN.useWindowDimensions().width;

  return (
    <RN.View style={[styles.container, { width }]}>
      <RN.View style={styles.wrapper}>
        <RN.View style={styles.top}>
          <LogoIcon />
          <NB.Thumbnail
            style={styles.userImage}
            source={require('../assets/images/avatar.jpg')}
            square={true}
          />
        </RN.View>

        <RN.View style={styles.mid}>
          <RN.Text style={styles.userName}>Oyebode yusuf</RN.Text>
        </RN.View>

        <RN.View style={styles.bottom}>
          <RN.Text style={styles.amount}>₦ 272.30</RN.Text>
          <RN.Text style={styles.desc}>Your Balance</RN.Text>
        </RN.View>
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    // left: 0,
    // right: 0,
    // top: 0,
    // height: RFValue(272),
    backgroundColor: '#FFFFFF',

    // paddingBottom: RFValue(30),
  },
  wrapper: {
    backgroundColor: PrimaryColor,
    height: RFValue(272),
    padding: RFValue(20),
    paddingTop: RFValue(40),
    elevation: RFValue(3),
    borderBottomRightRadius: RFValue(44),
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImage: {
    borderRadius: RFValue(10),
    width: RFValue(50),
    height: RFValue(50),
  },
  mid: { marginVertical: RFValue(10) },
  userName: { color: '#FFFFFF50', fontSize: RFValue(16) },
  bottom: { flex: 1, justifyContent: 'flex-end' },
  amount: { color: '#FFFFFF', fontSize: RFValue(40), fontFamily: 'Sb' },
  desc: { color: '#FFFFFF', fontSize: RFValue(16) },
});
