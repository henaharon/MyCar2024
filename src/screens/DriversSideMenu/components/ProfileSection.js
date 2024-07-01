import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ProfileSection = () => {
  return (
    <View style={styles.profileSection}>
      <View style={styles.textContainer}>
        <Text style={styles.smallText}>שלום,</Text>
        <Text style={styles.text}>עומר פורטנוי</Text>
      </View>
      <Image source={require('../../../assets/k1_icons/my_profile.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0.1 * windowWidth,
    justifyContent: 'flex-end', 
    paddingRight: 0.025 * windowWidth,
    marginTop:0.05 * windowWidth
  },
  
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end', 
    marginRight: 0.05 * windowWidth,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 0.01 * windowWidth,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  smallText: {
    fontSize: 16, 
    color: 'white',
  },
});

export default ProfileSection;
