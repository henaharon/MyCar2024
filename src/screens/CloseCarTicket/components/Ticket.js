import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';

const Ticket = ({
  ticketName,
  icon,
  ticketStatus,
  date,
  seqNum,
  carName,
  name,
  carNum,
  phoneNum,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {};

  return (
    <Pressable onPress={handlePress} style={[styles.card]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.ticketName}>{ticketName}</Text>
          <Image source={icon} style={styles.icon} />
        </View>
        <View>
          <Text>{ticketStatus}</Text>
        </View>
      </View>
      <Text style={styles.date}>
        {date} | {seqNum}
      </Text>
      <View style={styles.line}></View>
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.carName}>{carName}</Text>
          <Text style={styles.carNum}>{carNum}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phoneNum}>{phoneNum}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f3f5',
    padding: 10,

    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  date: {
    color: '#888',
    marginVertical: 5,
  },
  details: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carNum: {
    fontSize: 16,
  },
  name: {
    fontSize: 16,
  },
  phoneNum: {
    fontSize: 16,
    color: '#007BFF',
  },
  line: {
    backgroundColor: '#dfe3eb',
    height: 4,
  },
});

export default Ticket;
