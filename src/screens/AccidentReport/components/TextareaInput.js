import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Input} from './Input';

export const TextareaInput = ({title, placeholder}) => {
  return (
    <View style={styles.TextareaContainer}>
      <View style={styles.TextBoxLabel}>
        <Text style={styles.TextboxBackground}>{title}</Text>
      </View>
      <Input
        placeholder={placeholder}
        required={false}
        width={0.90}
        type={'textarea'}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  TextareaContainer: {
    position: 'relative',
    top: windowHeight * 0.05,
  },
  TextBoxLabel: {
    position: 'relative',
    bottom: windowHeight * 0.039,
    left: windowWidth * 0.59,
    zIndex: 1,
    width: windowWidth * 0.27,
    alignItems: 'center',
  },
  TextboxBackground: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
});
