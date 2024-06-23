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

export const Header = () => {
  return (
    <View style={styles.headerImgContainter}>
      <Image
        style={styles.headerImg}
        source={require('../../../assets/i1-assets/elementsPageCoversAccidentReport3x.png')}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerContent} >
          <Pressable>
            <LinearGradient
              colors={['#E50075', '#F05C62']}
              style={styles.helpButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text style={styles.helpText}>עזרה</Text>
              <Image
                style={styles.iconPhone}
                source={require('../../../assets/i1-assets/elements24PxIconsCall3x.png')}
              />
            </LinearGradient>
          </Pressable>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerContainerText}>דיווח תאונה</Text>
          </View>
          <Pressable style={styles.xButtonContainer}>
            <Image
              style={styles.iconX}
              source={require('../../../assets/i1-assets/componentsNavBarXButtonsRoundedWhiteAlpha3x.png')}
            />
          </Pressable>
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
  headerTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconX: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
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
  }
});

export default Header;
