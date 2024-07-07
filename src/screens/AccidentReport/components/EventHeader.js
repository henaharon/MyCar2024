import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const EventHeader = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: windowHeight * 0.2,
    zIndex: 2,
    width: '100%',
    backgroundColor: 'black',
    alignContent: 'center',
  },
});

export default EventHeader;
