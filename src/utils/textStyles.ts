import * as React from 'react';
import * as RN from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const SmallText: RN.TextStyle = {
  fontSize: RFValue(12),
  fontFamily: 'Rg',
};

export const RegularText: RN.TextStyle = {
  fontSize: RFValue(16),
  fontFamily: 'Rg',
};

export const BoldText: RN.TextStyle = {
  fontSize: RFValue(16),
  fontFamily: 'Sb',
};
