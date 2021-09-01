import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { BoldText } from '../utils/textStyles';
import { BlackColor } from '../utils/colors';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  title: string;
  renderRight?: React.ReactNode;
  navigation?: any;
}

export default function NavBar(props: Props) {
  const renderLeft = () => (
    <RN.Pressable
      style={styles.leftWrapper}
      onPress={() => props.navigation.goBack()}
    >
      <NB.Icon
        style={styles.backIcon}
        name={'chevron-left'}
        type={'MaterialCommunityIcons'}
      />
    </RN.Pressable>
  );

  const renderBody = () => (
    <RN.View style={styles.bodyWrapper}>
      <RN.Text style={[styles.bodyText, BoldText]}>{props.title}</RN.Text>
    </RN.View>
  );

  const renderRight = () => (
    <RN.View style={styles.rightWrapper}>{props.renderRight}</RN.View>
  );

  return (
    <RN.View style={styles.container}>
      {renderLeft()}
      {renderBody()}
      {renderRight()}
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {},
  backIcon: { fontSize: RFValue(30), color: BlackColor },
  bodyWrapper: {},
  bodyText: { color: BlackColor },
  rightWrapper: {},
});
