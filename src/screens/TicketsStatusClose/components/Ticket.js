import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';

const Ticket = ({
  id,
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

  return (
    <Pressable onPress={onPress} style={[styles.card]}>
      <View style={styles.header}>
        <View style={styles.ticketTitle}>
          <Image source={icon} style={styles.icon} />
          <View>
            <Text style={styles.ticketName}>{ticketName}</Text>
            <Text style={styles.date}>
              {date} | מספר קריאה {seqNum}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.status,
            ticketStatus === 'פתוח' ? styles.green : styles.gray,
          ]}
        >
          <Text>{ticketStatus}</Text>
        </View>
      </View>

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
    padding: 3,
    marginBottom: 10,
    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  ticketTitle: {
    flexDirection: 'row',
    padding: 5,
    flexDirection: 'row-reverse',
  },
  ticketName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 12,
  },
  status: {
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  date: {
    color: '#888',
    marginVertical: 5,
  },
  details: {
    marginTop: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
  },
  detailRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  phoneNum: {
    fontSize: 16,
    color: '#888',
  },
  line: {
    backgroundColor: '#dfe3eb',
    height: 4,
  },
  green: {
    backgroundColor: '#bccfa3',
    color: '#8ac240',
  },
  gray: {
    backgroundColor: '#bbbdb5',
  },
});

export default Ticket;
