import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';

import { BlackColor, GreenColor, RedColor } from '../utils/colors';
import { BoldText, RegularText, SmallText } from '../utils/textStyles';

interface Props {
  id: string;
  accountName: string;
  accountNumber: string;
  dateTime: string;
  bankName: string;
  amount: string;
  transacType: 'send' | 'request';
}

interface State {}

export default function TransacHistoryItem(props: Props) {
  return (
    <RN.Pressable style={styles.container}>
      <NB.Icon
        style={styles.accountImage}
        name={'face-profile'}
        type={'MaterialCommunityIcons'}
      />
      <RN.View style={styles.subWrapper}>
        <RN.Text style={[styles.accountName, RegularText]}>
          {props.accountName}
        </RN.Text>
        <RN.Text style={[styles.details, SmallText]}>
          {props.bankName} | {moment(props.dateTime).fromNow()}
        </RN.Text>
      </RN.View>
      <RN.Text
        style={[
          styles.amount,
          { color: props.transacType === 'send' ? GreenColor : RedColor },
        ]}
      >
        {props.transacType === 'send' ? '+' : '-'} ₦{props.amount}
      </RN.Text>
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
    marginHorizontal: RFValue(10),
  },
  accountName: { color: BlackColor, marginBottom: RFValue(5) },
  details: { color: BlackColor + '50' },
  amount: {
    ...BoldText,
    fontSize: RFValue(13),
  },
});
