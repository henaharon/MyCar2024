import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ text, onPress, buttonStyle, textStyle }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the isPressed state
    onPress(); // Call the onPress function passed as prop
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, isPressed && styles.buttonPressed, buttonStyle]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  buttonPressed: {
    backgroundColor: 'blue', // Change background color when pressed
  },
  text: {
    fontSize: 18,
    color: 'w',
    fontWeight: 'bold',
  },
});

export default Button;
