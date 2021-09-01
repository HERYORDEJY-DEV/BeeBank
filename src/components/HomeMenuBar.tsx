import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { HomeHeaderBg } from '../assets/svg/HomeHeaderBg';
import { LogoIcon } from './../assets/svg/LogoIcon';
import HomeMenuItem from './HomeMenuItem';
import { SendIcon, RequestIcon, MoreIcon } from './../assets/svg/MenuIcons';
import { PrimaryColor } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

interface Props {}

interface State {
  selectedMenu: 'SendMoney' | 'RequestMoney';
}

const menuList = [
  {
    id: '001',
    icon: (selected) => <SendIcon fill={selected ? '#FFFFFF' : PrimaryColor} />,
    title: `Send\nMoney`,
    route: 'SendMoney',
  },
  {
    id: '002',
    icon: (selected) => (
      <RequestIcon fill={selected ? '#FFFFFF' : PrimaryColor} />
    ),
    title: `Request\nMoney`,
    route: 'RequestMoney',
  },
];

export default function HomeMenuBar(props: Props) {
  // navigation instance
  const navigation = useNavigation();
  // get device width
  const width = RN.useWindowDimensions().width;

  // menu state
  const [menu, setMenu] = React.useState<State>({ selectedMenu: 'SendMoney' });
  const { selectedMenu } = menu;

  // toggleMenu
  const onSelectMenu = (menu) => {
    navigation.navigate('Contacts');
    setMenu({ selectedMenu: menu });
  };

  return (
    <RN.View style={[styles.container]}>
      {menuList.map((menu, index) => (
        <HomeMenuItem
          key={menu.id + index}
          {...menu}
          icon={menu.icon(menu.route === selectedMenu)}
          selected={menu.route === selectedMenu}
          onPress={() => onSelectMenu(menu.route)}
        />
      ))}
      <RN.Pressable style={styles.moreWrapper}>
        <MoreIcon />
      </RN.Pressable>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
  },
  moreWrapper: {
    width: RFValue(66),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
