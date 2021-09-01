import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { HomeHeaderBg } from '../assets/svg/HomeHeaderBg';
import { LogoIcon } from '../assets/svg/LogoIcon';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  PrimaryColor2,
} from '../utils/colors';
import { RegularText } from '../utils/textStyles';

interface Props {
  selectedMenu: 'all' | 'send' | 'request';
  onSelectMenu: (e: any) => void;
}

export default function TransacHistoryHeader(
  { selectedMenu = 'all', onSelectMenu },
  props: Props,
) {
  return (
    <RN.View style={[styles.container]}>
      <RN.Pressable
        onPress={() => onSelectMenu('all')}
        style={[
          styles.wrapper,
          {
            backgroundColor: selectedMenu === 'all' ? PrimaryColor2 : GrayColor,
          },
        ]}
      >
        <RN.Text
          onPress={() => onSelectMenu('all')}
          style={[
            styles.text,
            RegularText,
            {
              color: selectedMenu === 'all' ? '#FFFFFF' : BlackColor,
            },
          ]}
        >
          All
        </RN.Text>
      </RN.Pressable>

      <RN.Pressable
        onPress={() => onSelectMenu('send')}
        style={[
          styles.wrapper,
          {
            backgroundColor:
              selectedMenu === 'send' ? PrimaryColor2 : GrayColor,
          },
        ]}
      >
        <RN.Text
          style={[
            styles.text,
            RegularText,
            {
              color: selectedMenu === 'send' ? '#FFFFFF' : BlackColor,
            },
          ]}
        >
          Sent
        </RN.Text>
      </RN.Pressable>

      <RN.Pressable
        onPress={() => onSelectMenu('request')}
        style={[
          styles.wrapper,
          {
            backgroundColor:
              selectedMenu === 'request' ? PrimaryColor2 : GrayColor,
          },
        ]}
      >
        <RN.Text
          style={[
            styles.text,
            RegularText,
            {
              color: selectedMenu === 'request' ? '#FFFFFF' : BlackColor,
            },
          ]}
        >
          Request
        </RN.Text>
      </RN.Pressable>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GrayColor,
    // paddingBottom: RFValue(30),
    borderRadius: RFValue(12),
    elevation: RFValue(3),
    marginVertical: RFValue(20),
  },
  wrapper: {
    // backgroundColor: PrimaryColor,
    height: RFValue(44),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(12),
  },
  text: { color: BlackColor, textAlign: 'center' },
});
