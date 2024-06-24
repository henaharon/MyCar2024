// ProfileSection.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.profileSection}>
      <Image source={require('../../../assets/k1_icons/my_profile.png')} style={styles.icon} />
      <Text style={styles.text}>My Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default ProfileSection;