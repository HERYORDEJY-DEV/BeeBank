import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { AuthNavigation } from './AuthNavigation';
import { StackNavigation } from './StackNavigation';
import SendMoney from './../screens/stack/SendMoney';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
