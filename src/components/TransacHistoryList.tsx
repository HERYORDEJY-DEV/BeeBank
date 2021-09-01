import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { BoldText, SmallText } from '../utils/textStyles';
import { BlackColor } from '../utils/colors';
import { transacList } from '../api/datas';
import TransacHistoryItem from './TransacHistoryItem';
import { compareTimes } from '../utils/compare-values';

interface Props {
  full?: boolean;
  selectedMenu?: string;
}

interface State {}

export default function TransacHistoryList(props: Props) {
  // sort transactions
  const transacListSorted = transacList.sort(
    compareTimes('dateTime', 'descending'),
  );

  return (
    <RN.View style={styles.container}>
      {!props.full && (
        <RN.View style={styles.headerWrapper}>
          <RN.Text style={[styles.activity, BoldText]}>Activity</RN.Text>
          <RN.Pressable style={[styles.viewAllWrapper, SmallText]}>
            <RN.Text style={styles.viewAll}>View all</RN.Text>
          </RN.Pressable>
        </RN.View>
      )}

      <RN.View style={styles.listWrapper}>
        {transacListSorted.map((transac, index) =>
          !props.full ? (
            index < 3 && (
              <TransacHistoryItem {...transac} key={transac.id + index} />
            )
          ) : props.selectedMenu === 'all' ? (
            <TransacHistoryItem {...transac} key={transac.id + index} />
          ) : (
            props.selectedMenu === transac.transacType && (
              <TransacHistoryItem {...transac} key={transac.id + index} />
            )
          ),
        )}
      </RN.View>
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
  listWrapper: { marginTop: RFValue(10), paddingHorizontal: RFValue(20) },
});
