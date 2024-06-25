import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Alert } from 'react-native';
import Button from './components/Buttons'; // Adjust the import path as per your project structure
import Ticket from './components/Ticket';

const openTicketsData = [
  {
    id: '1',
    title: 'Item 1',
    subtitle: 'Details about item 1',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Item 2',
    subtitle: 'Details about item 2',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Item 3',
    subtitle: 'Details about item 3',
    status: 'completed',
  },
];
const closeTicketsData = [
  {
    id: '1',
    title: 'Item',
    subtitle: 'Details about item 1',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Item',
    subtitle: 'Details about item 2',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Item',
    subtitle: 'Details about item 3',
    status: 'completed',
  },
];

const CloseCarTicket = () => {
  const [selectedButton, setSelectedButton] = useState('open'); // State to track selected button
  const [showTickets, setShowTickets] = useState('open'); // State to track showing open tickets

  const handleOpenTicketsPress = () => {
    setShowOpenTickets(true); // Show open tickets when button is pressed
  };

  const handleAllTicketsPress = () => {
    setShowOpenTickets(false); // Show all tickets when button is pressed
  };
  const handlePress = (buttonId) => {
    setSelectedButton(buttonId); // Set the currently pressed button
  };
  const showTicketsData = () => {
    if (selectedButton === 'open') {
      return openTicketsData.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image
            source={
              item.status === 'completed'
                ? require('../../assets/O1-assets/car_wash_icon.png')
                : require('../../assets/O1-assets/car_wash_icon.png')
            }
            style={styles.itemIcon}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
      ));
    } else if (selectedButton === 'close') {
      return closeTicketsData.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image
            source={
              item.status === 'completed'
                ? require('../../assets/O1-assets/car_wash_icon.png')
                : require('../../assets/O1-assets/car_wash_icon.png')
            }
            style={styles.itemIcon}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/O1-assets/componentsNavBarXButtonsRoundedWhiteAlpha.png')}
          style={styles.exit}
        />
        <Text style={styles.cardText}>הקריאות שלי</Text>
        <Text style={styles.cardNumber}>24</Text>
        <Text style={styles.cardText}>קריאות פתוחים</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Button
            text="פתוחות"
            onPress={() => handlePress('open')}
            buttonStyle={[
              styles.button,
              selectedButton === 'open' ? styles.buttonPressed : styles.button,
            ]}
            textStyle={
              selectedButton === 'open'
                ? styles.buttonPressedText
                : styles.buttonText
            }
          />
          <Button
            text="סגורות"
            onPress={() => handlePress('close')}
            buttonStyle={[
              styles.button,
              selectedButton === 'close' ? styles.buttonPressed : styles.button,
            ]}
            textStyle={
              (styles.button,
              selectedButton === 'close'
                ? styles.buttonPressedText
                : styles.buttonText)
            }
          />
        </View>
        <View style={styles.ticketsContainer}>
          <Ticket
            ticketName="ticketName"
            icon = {require('../../assets/O1-assets/componentsNavBarXButtonsRoundedBlack.png')}
            ticketStatus="closed"
            date="dd/mm/yyyy"
            seqNum="1234555"
            carName="car name"
            name="name"
            carNum="123456"
            phoneNum="045754"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#ff6767',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    padding: 16,
    alignItems: 'center',
  },
  exit: {
    alignSelf: 'flex-end',
  },
  cardNumber: {
    fontSize: 48,
    color: '#fff',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  bottomContainer: {
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,

    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C3E4F9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
  buttonPressed: {
    backgroundColor: '#0056b3', // Change color when pressed
  },
  buttonPressedText: {
    color: 'white',
  },
  list: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  ticketsContainer: {
    paddingHorizontal: 10,
  },
});

export default CloseCarTicket;
