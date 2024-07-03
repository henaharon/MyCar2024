import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Title from './Title';
import ImageInput from './ImageInput';
import {TextareaInput} from './TextareaInput';

export const CarDamageInputs = ({infoTitle, infoPlaceholder, imageTitle}) => {
  return (
    <View style={styles.carDamageContainer}>
      <Title title={infoTitle} />
      <TextareaInput title={infoPlaceholder} placeholder={infoPlaceholder} />
      <ImageInput title={imageTitle} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  carDamageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'relative',
    width: windowWidth * 0.9,
    marginTop: -windowHeight * 0.1,
  },
});

