import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './TabNavigation';

import SendMoney from '../screens/stack/SendMoney';
import Contacts from '../screens/stack/Contacts';
import TransacHistory from '../screens/stack/TransacHistory';
import Succesfull from '../screens/stack/Succesfull';

const StackNavigator = createStackNavigator();

export function StackNavigation() {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'} headerMode={null}>
      <StackNavigator.Screen
        name={'Home'}
        component={BottomTabNavigation}
        options={{
          animationEnabled: false,
        }}
      />
      <StackNavigator.Screen
        name={'SendMoney'}
        component={SendMoney}
        options={{
          animationEnabled: false,
        }}
      />
      <StackNavigator.Screen
        name={'Contacts'}
        component={Contacts}
        options={{
          animationEnabled: false,
        }}
      />
      <StackNavigator.Screen
        name={'TransacHistory'}
        component={TransacHistory}
        options={{
          animationEnabled: false,
        }}
      />
      <StackNavigator.Screen
        name={'Succesfull'}
        component={Succesfull}
        options={{
          animationEnabled: false,
        }}
      />
    </StackNavigator.Navigator>
  );
}
