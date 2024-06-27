import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Alert } from 'react-native';
import Button from './components/Buttons'; // Adjust the import path as per your project structure
import Ticket from './components/Ticket';

const openTicketsData = [
  {
    id: '1',
    ticketName: 'טיפול תקופתי',
    icon: require('../../assets/O1-assets/calendar.png'),
    ticketStatus: 'פתוח',
    date: '18.09.2022',
    seqNum: '82221',
    carName: 'יונדאי איוניק 2022',
    name: 'תמיר דב',
    carNum: '682 24 301',
    phoneNum: '054 7725112',
  },
  {
    id: '2',
    ticketName: 'שירותי מכון רישוי (טסט)',
    icon: require('../../assets/O1-assets/clipboard.png'),
    ticketStatus: 'פתוח',
    date: '18.09.2022',
    seqNum: '82221',
    carName: 'קאיה פיקנטו',
    name: 'אביב שרון',
    carNum: '931 23124',
    phoneNum: '050 3921941',
  },
  {
    id: '3',
    ticketName: 'החלפת מגבים',
    icon: require('../../assets/O1-assets/carBlade.png'),
    ticketStatus: 'פתוח',
    date: '18.09.2022',
    seqNum: '82221',
    carName: 'וינדאי איי 20',
    name: 'אלון דוד',
    carNum: '932 14 923',
    phoneNum: '054 7725112',
  },
];
const closeTicketsData = [
   {
     id: '1',
     ticketName: 'טיפול תקופתי',
     icon: require('../../assets/O1-assets/calendar.png'),
     ticketStatus: 'סגור',
     date: '18.09.2022',
     seqNum: '82221',
     carName: 'יונדאי איוניק 2022',
     name: 'תמיר דב',
     carNum: '682 24 301',
     phoneNum: '054 7725112',
   },
   {
     id: '2',
     ticketName: 'שירותי מכון רישוי (טסט)',
     icon: require('../../assets/O1-assets/clipboard.png'),
     ticketStatus: 'סגור',
     date: '18.09.2022',
     seqNum: '82221',
     carName: 'קאיה פיקנטו',
     name: 'אביב שרון',
     carNum: '931 23124',
     phoneNum: '050 3921941',
   },
   {
     id: '3',
     ticketName: 'החלפת מגבים',
     icon: require('../../assets/O1-assets/carBlade.png'),
     ticketStatus: 'סגור',
     date: '18.09.2022',
     seqNum: '82221',
     carName: 'וינדאי איי 20',
     name: 'אלון דוד',
     carNum: '932 14 923',
     phoneNum: '054 7725112',
   },
];

const CloseCarTicket = () => {
  const [selectedButton, setSelectedButton] = useState('open'); // State to track selected button
  const [showTickets, setShowTickets] = useState('open'); // State to track showing open tickets


  const handlePress = (buttonId) => {
    setSelectedButton(buttonId); // Set the currently pressed button
  };
  const showTicketsData = () => {
    if (selectedButton === 'open') {
      return (
                <>
                  <Text style={styles.subtitle}>קריאות פתוחות</Text>
                  {openTicketsData.map((item) => (
                    <Ticket
                      key={item.id}
                      ticketName={item.ticketName}
                      icon={item.icon}
                      ticketStatus={item.ticketStatus}
                      date={item.date}
                      seqNum={item.seqNum}
                      carName={item.carName}
                      name={item.name}
                      carNum={item.carNum}
                      phoneNum={item.phoneNum}
                    />
                  ))}
                </>
              );
    } else if (selectedButton === 'close') {
       return (
           <>
             <Text style={styles.subtitle}>קריאות סגורות</Text>
             {closeTicketsData.map((item) => (
               <Ticket
                 key={item.id}
                 ticketName={item.ticketName}
                 icon={item.icon}
                 ticketStatus={item.ticketStatus}
                 date={item.date}
                 seqNum={item.seqNum}
                 carName={item.carName}
                 name={item.name}
                 carNum={item.carNum}
                 phoneNum={item.phoneNum}
               />
             ))}
           </>
         );
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
        <Text style={styles.cardText}>קריאות פתוחות</Text>
      </View>
      <View style={[styles.bottomContainer, selectedButton === 'open' ? styles.openBottomContainer : styles.closeBottomContainer]}>
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

        <View style={styles.ticketsContainer}>{showTicketsData()}</View>
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
    fontSize: 54,
    color: '#fff',
    fontWeight:'bold',

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
    flexDirection: 'row-reverse',
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

    height:'100%'

  },
  openBottomContainer:{},
  closeBottomContainer:{
    marginTop:'-30%',
  },
  subtitle:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:15}
});

export default CloseCarTicket;
