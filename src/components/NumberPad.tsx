import React from 'react';
import * as RN from 'react-native';

import NumberPad, { Input, Display } from 'react-native-numpad';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, PrimaryColor } from '../utils/colors';

const padRow1 = [
  {
    id: '01',
    title: 'numeric-1',
    value: '1',
  },
  {
    id: '02',
    title: 'numeric-2',
    value: '2',
  },
  {
    id: '01',
    title: 'numeric-3',
    value: '3',
  },
];
const padRow2 = [
  {
    id: '04',
    title: 'numeric-4',
    value: '4',
  },
  {
    id: '05',
    title: 'numeric-5',
    value: '5',
  },
  {
    id: '0',
    title: 'numeric-6',
    value: '6',
  },
];
const padRow3 = [
  {
    id: '07',
    title: 'numeric-7',
    value: '7',
  },
  {
    id: '08',
    title: 'numeric-8',
    value: '8',
  },
  {
    id: '09',
    title: 'numeric-9',
    value: '9',
  },
];

const padRow4 = [
  {
    id: '00',
    title: 'numeric-0',
    value: '0',
  },
  {
    id: 'dot',
    title: '.',
    value: '.',
  },
  {
    id: 'cancel',
    title: 'backspace-outline',
    value: 'cancel',
  },
];

interface Props {
  validityCheck: () => void;
}

export default (props: Props) => {
  //
  const [key, setKey] = React.useState(null);
  // display state
  const [display, setDisplay] = React.useState('');
  //
  const onPressKey = (value) => {
    props.validityCheck({ enable: display.length > 0 && !isNaN(+display) });
    if (value === 'cancel') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };
  // max number of digits
  const disableKey = display.length > 11 ? true : false;
  // to calcel all entries
  const onCancellAll = (value) => (value === 'cancel' ? setDisplay('') : null);
  //
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.displayWrapper}>
        <RN.Text style={[styles.currency]}>₦</RN.Text>
        <RN.Text
          numberOfLines={1}
          style={[
            styles.display,
            { color: display.length > 0 ? BlackColor : BlackColor + '50' },
          ]}
        >
          {display.length > 0 ? display : '0.00'}
        </RN.Text>
      </RN.View>

      <RN.View style={styles.padWrapper}>
        {/* first row */}
        <RN.View style={styles.row}>
          {padRow1.map((pad, index) => (
            <RN.Pressable
              disabled={disableKey}
              style={styles.element}
              key={index + pad.title}
              onPress={() => onPressKey(pad.value)}
            >
              <NB.Icon
                style={styles.icon}
                name={pad.title}
                type={'MaterialCommunityIcons'}
              />
            </RN.Pressable>
          ))}
        </RN.View>

        {/* second row */}
        <RN.View style={styles.row}>
          {padRow2.map((pad, index) => (
            <RN.Pressable
              disabled={disableKey}
              style={styles.element}
              key={index + pad.title}
              onPress={() => onPressKey(pad.value)}
            >
              <NB.Icon
                style={styles.icon}
                name={pad.title}
                type={'MaterialCommunityIcons'}
              />
            </RN.Pressable>
          ))}
        </RN.View>

        {/* third row */}
        <RN.View style={styles.row}>
          {padRow3.map((pad, index) => (
            <RN.Pressable
              disabled={disableKey}
              style={styles.element}
              key={index + pad.title}
              onPress={() => onPressKey(pad.value)}
            >
              <NB.Icon
                style={styles.icon}
                name={pad.title}
                type={'MaterialCommunityIcons'}
              />
            </RN.Pressable>
          ))}
        </RN.View>

        {/* fourth row */}
        <RN.View style={styles.row}>
          {padRow4.map((pad, index) => (
            <RN.Pressable
              disabled={disableKey && pad.value !== 'cancel'}
              style={styles.element}
              key={index + pad.title}
              onPress={() => onPressKey(pad.value)}
              onLongPress={() => onCancellAll(pad.value)}
            >
              {pad.id === 'dot' ? (
                <RN.Text
                  style={[
                    // styles.currency,
                    {
                      fontSize: RFValue(60),
                      textAlign: 'center',
                      color: BlackColor,
                    },
                  ]}
                >
                  {pad.title}
                </RN.Text>
              ) : (
                <NB.Icon
                  style={[
                    styles.icon,
                    {
                      fontSize: pad.id === 'cancel' ? RFValue(30) : RFValue(60),
                    },
                  ]}
                  name={pad.title}
                  type={'MaterialCommunityIcons'}
                />
              )}
            </RN.Pressable>
          ))}
        </RN.View>
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  textStyle: { fontSize: RFValue(40), color: BlackColor, fontFamily: 'Sb' },
  cursorStyle: {},
  inputStyle: {},
  //
  container: {},
  displayWrapper: {
    flexDirection: 'row',
    height: RFValue(72),
    paddingHorizontal: RFValue(10),
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(20),
    borderWidth: RFValue(2),
    borderColor: PrimaryColor,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    // height: RFValue(72),
    // flex: 1,
    fontSize: RFValue(40),
    color: BlackColor,
    fontFamily: 'Sb',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 0,
    // padding: 0,
    // lineHeight: 0,
  },
  currency: {
    fontSize: RFValue(40),
    color: BlackColor,
    fontFamily: 'Sb',
    marginRight: RFValue(10),
  },
  padWrapper: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  element: {
    height: RFValue(72),
    width: RFValue(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { color: BlackColor, fontSize: RFValue(60) },
});
