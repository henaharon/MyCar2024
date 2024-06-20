import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.headerImg}
        source={require('../../../assets/i1-assets/elementsPageCoversAccidentReport3x.png')}
      />
      <View style={styles.headerContent}>
        <Pressable>
        </Pressable>
        <View>
          <Text style={styles.headerContainerText}>דיווח תאונה</Text>
        </View>
        <Pressable>
          <Image
            style={styles.xButton}
            source={require('../../../assets/i1-assets/componentsNavBarXButtonsRoundedWhiteAlpha3x.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
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
  headerContent: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 2,
  },
  headerTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xButton: {
    width: 30,
    height: 30,
  },
  helpButton: {
    width: 60,
    height: 30,
    background: linear-gradient(#E50075, #F05C62);
  }
});

export default Header;
