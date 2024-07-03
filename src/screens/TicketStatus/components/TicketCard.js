// src/components/TicketCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import routineServiceIcon from '../../../assets/icons/elementsServiceIconsRoutineService.png';

const TicketCard = ({ navigation, type, date, number, contact, phone, vehicle, vehicleNumber, status }) => {
  return (
    <Pressable style={styles.ticketCard} onPress={() => navigation.navigate('OpenCarTicket')}>
      <View style={styles.header}>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{type}</Text>
          <Text style={styles.subtitle}>{date} | מספר קריאה {number}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={routineServiceIcon} style={styles.icon} />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.contactName}>{contact}</Text>
          <Text style={styles.contactPhone}>{phone}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.vehicleName}>{vehicle}</Text>
          <Text style={styles.vehicleNumber}>{vehicleNumber}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  statusContainer: {
    backgroundColor: '#DDEBD8',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  status: {
    color: '#3EC566',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'right',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 2,
  },
  column: {
    flexDirection: 'column',
  },
  contactName: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 25,
  },
  contactPhone: {
    fontSize: 14,
    color: '#757575',
  },
  vehicleName: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'right',
  },
  vehicleNumber: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'right',
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  line: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
});

export default TicketCard;
