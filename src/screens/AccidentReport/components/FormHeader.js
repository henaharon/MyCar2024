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
import Paginator from './Paginator';

const arrowRightGrey = require('../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png');
const arrowLeftGradient = require('../../../assets/icons/componentsNavBarXButtonsRoundedBlack.png');

export const FormHeader = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <HeaderButton
          container={styles.ButtonContainer}
          imageSource={arrowLeftGradient}
        />
        <TitleHeader title={title} />
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
    height: windowHeight * 0.15,
    zIndex: 2,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContent: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: windowHeight * 0.1,
    width: windowWidth * 0.93,
    alignItems: 'flex-start',
  },
  ButtonContainer: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
});
