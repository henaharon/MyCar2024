// MenuItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MenuItem = ({ icon, text }) => {
  return (
    <View style={styles.menuItem}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default MenuItem;