import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {TitleHeader} from './TitleHeader';
import {HeaderButton} from './HeaderButton';

const arrowRightGrey = require('../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png');
const arrowLeftGradient = require('../../../assets/icons/componentsNavBarXButtonsRoundedBlack.png');

export const FormHeader = () => {
  return (
    <View style={styles.headerContainter}>
      <View style={styles.headerContent}>
        <HeaderButton
          container={styles.ButtonContainer}
          imageSource={arrowLeftGradient}
        />
        <TitleHeader title={'פרטי התאונה'} />
        <HeaderButton
          container={styles.ButtonContainer}
          imageSource={arrowRightGrey}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    flexFlow: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    height: windowHeight * 0.1,
  },
  headerContent: {
    alignContent: 'center',
    flexFlow: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.93,
  },
  ButtonContainer: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
});
