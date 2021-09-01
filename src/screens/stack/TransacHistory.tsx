import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavBar from '../../components/NavBar';
import { BlackColor } from '../../utils/colors';
import TransacHistoryHeader from '../../components/TransacHistoryHeader';
import TransacHistoryList from '../../components/TransacHistoryList';

export default function TransacHistory() {
  // menu
  const [menu, setMenu] = React.useState('all');
  const onSelectMenu = (menu) => setMenu(menu);

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavBar
        title={'Transaction History'}
        renderRight={
          <NB.Icon
            name={'search'}
            type={'MaterialIcons'}
            style={styles.searchIcon}
          />
        }
      />
      <TransacHistoryHeader selectedMenu={menu} onSelectMenu={onSelectMenu} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <TransacHistoryList full={true} selectedMenu={menu} />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: RFValue(40),
    paddingHorizontal: RFValue(20),
  },
  content: {},
  contentContainer: {},
  searchIcon: { color: BlackColor, fontSize: RFValue(30) },
});
