// src/screens/OpenCarTicket/OpenCarTicket.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import verticalThreeDotsIcon from '../../assets/icons/verticalThreeDots.png';
import XButtonIcon from '../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png';

const OpenCarTicket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.leftIcon}>
          <Image source={verticalThreeDotsIcon} style={styles.icon} />
        </Pressable>
        <Text style={styles.headerText}>קריאה פתוחה</Text>
        <Pressable style={styles.rightIcon}>
          <Image source={XButtonIcon} style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.ticketInfo}>
        <Image source={routineServiceIcon} style={styles.ticketIcon} />
        <Text style={styles.ticketType}>טיפול בתקלה ברכב</Text>
        <Text style={styles.ticketNumber}>82225</Text>
        <Pressable style={styles.moreDetailsButton}>
          <Text style={styles.moreDetailsButtonText}>פרטים נוספים</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.statusList}>
        <View style={styles.statusItem}>
          <Text style={styles.statusDate}>04.11.2022 - 15:32</Text>
          <Text style={styles.statusType}>משוב</Text>
          <Text style={styles.statusDescription}>נשמח לשמוע ממך על חווית השירות שלך</Text>
          <Pressable style={styles.responseButton}>
            <Text style={styles.responseButtonText}>שליחת משוב</Text>
          </Pressable>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusDate}>04.11.2022 - 15:32</Text>
          <Text style={styles.statusType}>קריאה הושלמה</Text>
          <Text style={styles.statusDescription}>קריאה טופלה בהצלחה</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusDate}>04.11.2022 - 15:32</Text>
          <Text style={styles.statusType}>פניה נקלטה</Text>
          <Text style={styles.statusDescription}>קריאה התקבלה במרכז השירות</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusDate}>04.11.2022 - 15:32</Text>
          <Text style={styles.statusType}>קריאה נוצרה</Text>
          <Text style={styles.statusDescription}>קריאה חדשה נוצרה</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',
  },
  leftIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketInfo: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  ticketIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  ticketType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketNumber: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  moreDetailsButton: {
    backgroundColor: '#DFF6FC',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  moreDetailsButtonText: {
    color: '#3651F1',
    fontWeight: 'bold',
  },
  statusList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  statusItem: {
    marginBottom: 20,
  },
  statusDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  statusType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusDescription: {
    fontSize: 14,
    color: '#555',
  },
  responseButton: {
    backgroundColor: '#FFC107',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  responseButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default OpenCarTicket;
