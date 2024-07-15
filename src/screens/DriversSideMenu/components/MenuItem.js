import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const MenuItem = ({ icon, text }) => {
  return (
    <View style={styles.menuItem}>
        <Text style={styles.text}>{text}</Text>
      <Image source={icon} style={styles.icon} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    marginBottom: 0.03 * windowWidth,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft:0.03 * windowWidth,
  },
  text: {
    fontSize: 16,
    textAlign: 'right', 
    color: 'white',
  },
});

export default MenuItem;
