import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeHeader from '../../components/HomeHeader';
import HomeMenuBar from '../../components/HomeMenuBar';
import TransacHistoryList from './../../components/TransacHistoryList';

export default function Home(props) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <HomeHeader />
      <HomeMenuBar />
      <TransacHistoryList />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
});
