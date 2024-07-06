import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoBox = ({ title, imageSource }) => {
  return (
    <View style={styles.infoBox}>
      <Text>{title}</Text>
      <Image source={imageSource} style={styles.infoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  infoImage: {
    width: 100,
    height: 100,
  },
});

export default InfoBox;
