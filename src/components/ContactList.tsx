import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { BoldText, SmallText } from '../utils/textStyles';
import { BlackColor } from '../utils/colors';
import { transacList } from '../api/datas';
import TransacHistoryItem from './TransacHistoryItem';
import { compareTimes } from '../utils/compare-values';
import ContactItem, { ContactItemProps } from './ContactItem';

interface Props {
  onSelectContact?: (e: ContactItemProps) => void;
}

interface State {}

export default function ContactList(props: Props) {
  // sort transactions
  const transacListSorted = transacList.sort(
    compareTimes('dateTime', 'descending'),
  );

  return (
    <RN.View style={styles.container}>
      {transacListSorted.map((contact, index) => (
        <ContactItem
          {...contact}
          onPress={() => props.onSelectContact(contact)}
          key={contact.id + index}
        />
      ))}
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
  },
  activity: { color: BlackColor },
  viewAllWrapper: {},
  viewAll: { color: BlackColor + '50' },
  listWrapper: { marginTop: RFValue(10) },
});
