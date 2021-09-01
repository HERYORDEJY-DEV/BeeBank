import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, LogBox } from 'react-native';

import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { RFValue } from 'react-native-responsive-fontsize';

import Home from './src/screens/tabs/Home';
import TransacHistory from './src/screens/stack/TransacHistory';
import Contacts from './src/screens/stack/Contacts';
import { SmallText } from './src/utils/textStyles';
import SendMoney from './src/screens/stack/SendMoney';
import AppNavigation from './src/navigation';

// console.disableYellowBox = true;
// LogBox.ignoreAllLogs(true);

export default function App() {
  const [loaded] = useFonts({
    Rg: require('./src/assets/fonts/manrope-regular.otf'),
    Md: require('./src/assets/fonts/manrope-medium.otf'),
    Lt: require('./src/assets/fonts/manrope-light.otf'),
    Bd: require('./src/assets/fonts/manrope-bold.otf'),
    Sb: require('./src/assets/fonts/manrope-semibold.otf'),
    Th: require('./src/assets/fonts/manrope-thin.otf'),
    Xb: require('./src/assets/fonts/manrope-extrabold.otf'),
  });

  // Setting default styles for some components.
  const customTextProps = {
    style: {
      fontSize: RFValue(14),
      fontFamily: 'Rg',
    },
    selectable: true,
  };
  const customTextInputProps = {
    style: {
      ...SmallText,
      backgroundColor: 'transparent',
      flex: 1,
      fontSize: RFValue(14),
      fontFamily: 'Rg',
    },
    multiline: true,
  };
  React.useEffect(() => {
    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
  });

  if (!loaded) {
    return null;
  }

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Bd',
    fontSize: RFValue(50),
    color: '#1546A0',
    textAlign: 'center',
    marginVertical: RFValue(100),
    marginHorizontal: RFValue(50),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
