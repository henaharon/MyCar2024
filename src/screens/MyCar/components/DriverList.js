import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DriverList = () => {
  return (
    <View style={styles.driverList}>
      <Text style={styles.driverName}>אביב שחר</Text>
      <Text style={styles.driverName}>רוני נבו</Text>
      <Text style={styles.driverName}>נועה שחר</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  driverList: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  driverName: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 5,
  },
});

export default DriverList;
