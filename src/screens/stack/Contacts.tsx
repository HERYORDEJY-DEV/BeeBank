import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavBar from '../../components/NavBar';
import { BlackColor } from '../../utils/colors';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../components/ContactList';
import { ContactItemProps } from '../../components/ContactItem';

export default function Contacts() {
  // navigation instances
  const navigation = useNavigation();

  const onSelectContact = (data: ContactItemProps) =>
    navigation.navigate('SendMoney', {
      ...data,
    });
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavBar
        title={'Contacts'}
        renderRight={
          <NB.Icon
            name={'account-plus-outline'}
            type={'MaterialCommunityIcons'}
            style={styles.searchIcon}
          />
        }
      />
      <SearchBar />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ContactList onSelectContact={onSelectContact} />
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
