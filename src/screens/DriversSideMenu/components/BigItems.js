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
        // overflow: 'hidden', 
        marginBottom: 0.03 * windowWidth,
        // width: 0.40 * windowWidth,
        // justifyContent: 'space-between',

      },
  menuItem: {
    alignItems: 'center',
    margin:0.07 * windowWidth,
    // width: 0.2 * windowWidth
    justifyContent: 'space-between',
    marginHorizontal: 0.065 * windowWidth,
    
  },
  icon: {
    width: 0.15 * windowWidth,
    height: 0.15 * windowWidth,
    marginBottom: 0.05 * windowWidth, 
  },
  text: {
    fontSize: 16,
    textAlign: 'center', 
    color: 'white',
  },
});

export default MenuItem;
