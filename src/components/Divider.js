import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ color = 'lightgray', height = 1, style }) => {
  return <View style={[styles.divider, { backgroundColor: color, height }, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical:24,
  },
});

export default Divider;
