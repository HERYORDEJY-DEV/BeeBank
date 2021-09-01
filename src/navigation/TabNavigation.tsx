import * as React from 'react';
import * as RN from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

import { BlackColor, PrimaryColor } from '../utils/colors';

import Home from '../screens/tabs/Home';
import Weather from '../screens/tabs/Weather';
import Alarm from './../screens/tabs/Alarm';
import { SmallText } from '../utils/textStyles';

const BottomTab = createBottomTabNavigator();

function tabIcons(label, isFocused) {
  if (label === 'Wallet') {
    return (
      <NB.Icon
        name={'wallet-outline'}
        type={'Ionicons'}
        style={[styles.icon, { color: isFocused ? PrimaryColor : BlackColor }]}
      />
    );
  }
  if (label === 'Weather') {
    return (
      <NB.Icon
        name={'cloud-outline'}
        type={'Ionicons'}
        style={[styles.icon, { color: isFocused ? PrimaryColor : BlackColor }]}
      />
    );
  }
  if (label === 'Alarm') {
    return (
      <NB.Icon
        name={'alarm-outline'}
        type={'Ionicons'}
        style={[styles.icon, { color: isFocused ? PrimaryColor : BlackColor }]}
      />
    );
  }
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <RN.View style={styles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const focusedButtonStyle: RN.ViewStyle = {
          backgroundColor: '#FFFFFF',
          borderRadius: RFValue(20),
          height: RFValue(60),
          width: RFValue(20),
        };

        return (
          <RN.TouchableOpacity
            key={label}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.labelWrapper, isFocused && focusedButtonStyle]}
          >
            {tabIcons(label, isFocused)}
            {isFocused && <RN.Text style={styles.label}>{label}</RN.Text>}
          </RN.TouchableOpacity>
        );
      })}
    </RN.View>
  );
}

// ...

export function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName={'Wallet'}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen name={'Wallet'} component={Home} />
      <BottomTab.Screen name={'Weather'} component={Weather} />
      <BottomTab.Screen name={'Alarm'} component={Alarm} />
    </BottomTab.Navigator>
  );
}

const styles = RN.StyleSheet.create({
  barStyle: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(0),
    borderWidth: 0,
  },
  labelWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: RFValue(5),
    height: RFValue(60),
    width: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: RFValue(18),
    marginRight: RFValue(5),
  },
  label: { ...SmallText, color: PrimaryColor },
});
