import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const Buttons = ({isOn, setIsOn, onReset}) => {
  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={() => setIsOn(!isOn)}>
        <Text
          style={[styles.buttonStyle, buttonTextsStyles({isOn}).buttonStyle]}>
          {isOn ? 'Pause' : 'Resume'}
        </Text>
      </Pressable>
      <Pressable onPress={() => onReset()}>
        <Text style={styles.buttonStyle}>{'Reset'}</Text>
      </Pressable>
    </View>
  );
};

const buttonTextsStyles = props =>
  StyleSheet.create({
    buttonStyle: {
      color: props?.isOn ? 'black' : 'red',
    },
  });

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  buttonStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});
