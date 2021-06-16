import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, LogBox } from 'react-native';

import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { RFValue } from 'react-native-responsive-fontsize';

import AppNavigation from './src/navigation/index';

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
      backgroundColor: 'transparent',
      borderBottomWidth: RFValue(1),
      flex: 1,
      fontSize: RFValue(14),
      fontFamily: 'Rg',
      
    },
    multiline: true,
  };
  React.useEffect(() => {
    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
  })

  if (!loaded) {
    return null;
  }

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
