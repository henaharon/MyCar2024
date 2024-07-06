import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TitleHeader } from './TitleHeader';
import { HeaderButton } from './HeaderButton';
import Paginator from './Paginator';

const arrowRightGrey = require('../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png');
const arrowLeftGradient = require('../../../assets/icons/componentsNavBarXButtonsRoundedBlack.png');

const FormHeader = ({ title, data, pagesCount,currentPage, onNextPage, onPreviousPage}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <HeaderButton
          container={styles.ButtonContainer}
          imageSource={arrowLeftGradient}
          onPress={onNextPage}
        />
        <View style={styles.MiddleHeaderContainer}>
          <TitleHeader title={title} />
          <Paginator data={data} pagesCount={pagesCount} currentPage={currentPage} />
        </View>
        <HeaderButton
          container={styles.ButtonContainer}
          imageSource={arrowRightGrey}
          onPress={onPreviousPage}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    height: windowHeight * 0.1,
    zIndex: 2,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.93,
    alignItems: 'center',
  },
  ButtonContainer: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  MiddleHeaderContainer: {
    flexDirection: 'column',
    gap: 5,
  },
});

export default FormHeader;
