import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import images from '../helpers/images';


export const MessageBox = ({ img, title, firstLine, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);


  return (
    <TouchableOpacity onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={styles.button}>
      <View style={styles.container}>
        {img && (
          <Image
            source={images[img]}
            style={styles.img}
          />
        )}
        <View style={styles.containtext}>

          <Text style={[styles.text, isPressed && styles.textPressed]}>{title}</Text>
          <Text style={styles.firstLine}>{firstLine}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    padding: 16,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000'
  },
  img: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  containtext: {
    marginTop: 10,
    marginRight: 10
  },
  firstLine: {
    fontSize: 16
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  textPressed: {
    color: '#4D66EA',
  }
});

