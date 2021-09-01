import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';

import { BlackColor, GreenColor, RedColor } from '../utils/colors';
import { BoldText, RegularText, SmallText } from '../utils/textStyles';

export interface ContactItemProps {
  id: string;
  accountName: string;
  accountNumber: string;
  dateTime: string;
  bankName: string;
  amount: string;
  transacType: 'send' | 'request';
  receipient?: boolean;
  onPress?: () => void;
}

interface State {}

export default function ContactItem(props: ContactItemProps) {
  // destructuring props
  const { id, accountName, accountNumber, dateTime, bankName } = props;

  // navigation instance

  return (
    <RN.Pressable style={styles.container} onPress={props.onPress}>
      <NB.Icon
        style={styles.accountImage}
        name={'face-profile'}
        type={'MaterialCommunityIcons'}
      />
      <RN.View style={styles.subWrapper}>
        {props.receipient && (
          <RN.Text style={[styles.details, SmallText]}>To</RN.Text>
        )}
        <RN.Text style={[styles.accountName, RegularText]}>
          {props.accountName}
        </RN.Text>
        <RN.Text style={[styles.details, SmallText]}>
          {props.bankName} | {props.accountNumber}
        </RN.Text>
      </RN.View>
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFValue(20),
  },
  accountImage: { color: BlackColor, fontSize: RFValue(30) },
  subWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: RFValue(20),
  },
  accountName: { color: BlackColor, marginBottom: RFValue(5) },
  details: { color: BlackColor + '50' },
  amount: {
    ...BoldText,
    fontSize: RFValue(13),
  },
});
