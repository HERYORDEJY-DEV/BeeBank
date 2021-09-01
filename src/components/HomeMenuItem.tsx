import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { HomeHeaderBg } from '../assets/svg/HomeHeaderBg';
import { LogoIcon } from '../assets/svg/LogoIcon';
import { PrimaryColor } from '../utils/colors';
import { SendIcon } from './../assets/svg/MenuIcons';

interface Props {
  icon: React.ReactNode;
  title: string;
  route: string;
  selected: boolean;
  onPress: () => void;
}

export default function HomeMenuItem(props: Props) {
  return (
    <RN.Pressable
      style={[
        styles.container,
        { backgroundColor: props.selected ? PrimaryColor : '#FFFFFF' },
      ]}
      onPress={props.onPress}
    >
      {props.icon}
      <RN.Text
        style={[
          styles.title,
          { color: props.selected ? '#FFFFFF' : PrimaryColor },
        ]}
      >
        {props.title}
      </RN.Text>
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    elevation: RFValue(3),
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(20),
    height: RFValue(120),
    width: RFValue(107),
    padding: RFValue(20),
    justifyContent: 'space-between',
  },
  title: { fontFamily: 'Bd', fontSize: RFValue(12), color: '#FFFFFF' },
});
