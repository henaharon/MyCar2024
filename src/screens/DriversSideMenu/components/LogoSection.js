// LogoSection.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LogoSection = () => {
  return (
    <View style={styles.logoSection}>
      <Image source={require('../../../assets/k1_icons/amdocs.png')} style={styles.logo} />
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
    width: 100,
    height: 50,
    marginBottom: 10,
  },
});

export default LogoSection;