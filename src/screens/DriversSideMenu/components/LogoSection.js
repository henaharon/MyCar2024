import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const LogoSection = () => {
  return (
    <View style={styles.logoSection}>
      <Image source={require('../../../assets/k1_icons/amdocs.png')} style={[styles.logo]} />
      <Image source={require('../../../assets/k1_icons/mobile_app.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 0.5 * windowWidth,
    height: 0.07 * windowWidth,
    marginBottom: 0.1 * windowWidth,
  },
});

export default LogoSection;
