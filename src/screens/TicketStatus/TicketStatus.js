// TicketStatus.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TicketCard from './components/TicketCard';
import XButtonIcon from '../../assets/icons/Xbutton.png';

const tickets = [
  {
    id: 1,
    type: 'טיפול תקופתי',
    date: '18.09.2022',
    number: '82221',
    contact: 'תמיר דב',
    phone: '054 7725112',
    vehicle: 'יונדאי איוניק 2022',
    vehicleNumber: '682 24 301',
    status: 'פתוח'
  },
  {
    id: 2,
    type: 'שירותי מכון רישוי (טסט)',
    date: '18.09.2022',
    number: '82221',
    contact: 'אביב שרון',
    phone: '050 3921941',
    vehicle: 'קאיה פיקנטו',
    vehicleNumber: '931 21 024',
    status: 'פתוח'
  },
  {
    id: 3,
    type: 'החלפת מגבים',
    date: '18.09.2022',
    number: '82221',
    contact: 'אלון דוד',
    phone: '',
    vehicle: 'יונדאי אי 20',
    vehicleNumber: '',
    status: 'פתוח'
  }
];

const TicketStatus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff0084', '#ff563c']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>הקריאות שלי</Text>
          <Pressable style={styles.closeButton}>
            <Image source={XButtonIcon} style={styles.closeButtonImage} />
          </Pressable>
        </View>
        <Text style={styles.ticketCount}>24</Text>
        <Text style={styles.subHeaderText}>קריאות פתוחות</Text>
      </LinearGradient>
      <View style={styles.wrapper}>
        <View style={styles.tabs}>
          <Pressable style={styles.inactiveTabButton}>
            <Text style={styles.inactiveTabButtonText}>סגורות</Text>
          </Pressable>
          <Pressable style={styles.activeTabButton}>
            <Text style={styles.tabButtonText}>פתוחות</Text>
          </Pressable>
        </View>
        <Text style={styles.sectionHeaderText}>קריאות פתוחות</Text>
        <ScrollView contentContainerStyle={styles.ticketList}>
          {tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              navigation={navigation} // Pass navigation prop
              type={ticket.type}
              date={ticket.date}
              number={ticket.number}
              contact={ticket.contact}
              phone={ticket.phone}
              vehicle={ticket.vehicle}
              vehicleNumber={ticket.vehicleNumber}
              status={ticket.status}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    position: 'relative',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 100,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#fff',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: -20,  // To overlap the header
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeTabButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#3952F1',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  inactiveTabButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#DFF6FC',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  tabButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveTabButtonText: {
    color: '#3651F1',
    fontWeight: 'bold',
  },
  ticketList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    marginVertical: 10,
    marginRight: 10,
  },
});

export default TicketStatus;
