import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const MenuItem = ({ icon, text }) => {
  return (
    <View style={styles.container}>
        <View style={styles.menuItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden', // Clip the rounded corners
        marginBottom: 0.03 * windowWidth,
      },
  menuItem: {
    alignItems: 'center',
    margin:0.07 * windowWidth,
  },
  icon: {
    width: 0.15 * windowWidth,
    height: 0.15 * windowWidth,
    marginBottom: 0.05 * windowWidth, // Adjust spacing between icon and text
  },
  text: {
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
    color: 'white',
  },
});

export default MenuItem;
