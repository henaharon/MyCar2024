import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TitleHeader } from './TitleHeader';
import { HeaderButton } from './HeaderButton';

const headerImage = require('../../../assets/images/elementsPageCoversAccidentReport3x.png');
const phoneIcon = require('../../../assets/icons/elements24PxIconsCall3x.png');
const xIcon = require('../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha3x.png');
const headerTitle = 'דיווח תאונה';

export const Header = ({navigation}) => {

  const handleHelpPress = () => {
    navigation.navigate('CallDialog');
  };

  const handleXPress = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.headerImgContainter}>
      <Image
        style={styles.headerImg}
        source={headerImage}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Pressable onPress={handleHelpPress}>
            <LinearGradient
              colors={['#E50075', '#F05C62']}
              style={styles.helpButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text style={styles.helpText}>עזרה</Text>
              <Image
                style={styles.iconPhone}
                source={phoneIcon}
              />
            </LinearGradient>
          </Pressable>
          <TitleHeader title={headerTitle} />
          <HeaderButton 
            container={styles.xButtonContainer}
            imageSource={xIcon}
            onPress={handleXPress}
          />
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerImgContainter: {
    width: '100%',
    height: windowHeight * 0.1,
    flexDirection: 'column',
  },
  headerImg: {
    width: '100%',
    height: windowHeight * 0.3,
    position: 'relative',
    zIndex: 1,
  },
  headerContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  headerContent: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.93,
  },
  iconX: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  iconPhone: {
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
  },
  helpButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: windowWidth * 0.17,
    height: windowHeight * 0.04,
    gap: windowWidth * 0.01,
  },
  xButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: windowWidth * 0.1,
    height: windowHeight * 0.04,
    gap: windowWidth * 0.01,
  },
  helpText: {
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
  },
});

export default Header;
