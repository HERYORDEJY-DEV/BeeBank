import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../screens/auth/LoginPage';
import CreateAccount from '../screens/auth/CreateAccount';

const StackNavigator = createStackNavigator();

export function AuthNavigation() {
  return (
    <StackNavigator.Navigator
      initialRouteName={'CreateAccount'}
      headerMode={null}
    >
      <StackNavigator.Screen name={'CreateAccount'} component={CreateAccount} />
      <StackNavigator.Screen name={'LoginPage'} component={LoginPage} />
    </StackNavigator.Navigator>
  );
}
