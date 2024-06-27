import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleWithFrame = () => {
  return (
    <View style={styles.circleFrame}>
      <View style={styles.circleKernel} />
    </View>
  );
};

const styles = StyleSheet.create({
  circleFrame: {
    width: 120, // Adjust as needed for the frame size
    height: 120, // Adjust as needed for the frame size
    borderRadius: 60, // Half of the width/height for circle shape
    backgroundColor: '#ccc', // Frame color
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleKernel: {
    width: 100, // Adjust as needed for the circle size
    height: 100, // Adjust as needed for the circle size
    borderRadius: 90, // Half of the width/height for circle shape
    backgroundColor: '#f8f8f8', // Circle color
  },
});

export default CircleWithFrame;
