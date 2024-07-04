// YesNoSelect.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const YesNoSelect = ({ selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'no' && styles.selected]}
        onPress={() => onSelect('no')}
      >
        <Text style={[styles.text, selectedOption === 'no' && styles.textselect]}>לא</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'yes' && styles.selected]}
        onPress={() => onSelect('yes')}
      >
        <Text style={[styles.text, selectedOption === 'yes' && styles.textselect]}>כן</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ABABB9',
    borderRadius: 30,
    width: 160,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'rgb(240,92,98)',
    borderColor: '#fff',
    color: '#fff',
  },
  text: {
    fontSize: 16,
  },
  textselect: {
    color: '#fff',
  },
});

export default YesNoSelect;
