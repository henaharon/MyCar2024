import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GeneralDetail = ({ iconSource, status, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={iconSource} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
    backgroundColor: '#E5E4E2',
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  icon: {
    width: 36,
    height: 36,
    marginLeft: 7,
    marginTop: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end', // Align text to the right
    marginRight: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right', // Align text to the right
  },
});

export default GeneralDetail;
