import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
      </Pressable>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerContainerText}>דיווח תאונה</Text>
      </View>
      <Pressable></Pressable>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  headerTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
  },
  leftContainer: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
  },
  headerContainerText: {
    color: 'black',
    fontSize: 35,
    fontWeight: '900',
  },
});
