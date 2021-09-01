import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import {
  BlackColor,
  GreenColor,
  PrimaryColor2,
  RedColor,
} from '../utils/colors';
import { BoldText, RegularText, SmallText } from '../utils/textStyles';

export interface Props {
  searchResult?: boolean;
  navigation?: any;
}

export interface State {}

export default function SearchBar(props: Props) {
  return (
    <RN.View style={[styles.container]}>
      <NB.Icon
        name={'search'}
        type={'MaterialIcons'}
        style={styles.searchIcon}
      />
      <RN.View style={styles.inputWrapper}>
        <RN.TextInput
          placeholder={'Enter a name'}
          placeholderTextColor={BlackColor + '50'}
          style={[
            styles.textInput,
            { marginLeft: props.searchResult ? RFValue(10) : 0 },
          ]}
        />
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    height: RFValue(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(20),
    elevation: RFValue(2),
    borderRadius: RFValue(20),
    backgroundColor: '#FFFF',
    paddingHorizontal: RFValue(10),
  },
  inputWrapper: {
    height: RFValue(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: RFValue(0.3),
    paddingHorizontal: RFValue(10),
    marginRight: RFValue(10),
    backgroundColor: '#FFFF',

    flex: 1,
  },
  textInput: {
    fontSize: RFValue(14),
    color: PrimaryColor2,
    marginLeft: RFValue(10),
    flex: 1,
  },
  searchIcon: { color: BlackColor + '50', fontSize: RFValue(25) },
});
