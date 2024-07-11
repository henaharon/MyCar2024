import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { routeNames } from '../../config/routes';

const windowWidth = Dimensions.get('window').width;

const backgroundImage = require('../../assets/images/Backgroundimage.png');
const closeIcon = require('../../assets/images/x.png');
const chatIcon = require('../../assets/images/chaticon.png');

const ChatSelectRoom = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
      <Image source={closeIcon} style={styles.topRightIcon} />
        <View style={styles.redContainer}>
         
          <Text style={styles.header}>צ'אט עם נציג</Text>
          <Text style={styles.subHeader}>איך אפשר לעזור לך?</Text>
          <Text style={styles.subHeaderSmall}>אנא בחרו את המוקד הרלוונטי</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routeNames.ConnectChatLoader)}>
            <View style={styles.innerButton}>
              <Text style={styles.connectButtonText}>התחברות</Text>
              <Text style={styles.buttonText}>רעננה - מוקד חיל</Text>
              <Image source={chatIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routeNames.ConnectChatLoader)}>
            <View style={styles.innerButton}>
              <Text style={styles.connectButtonText}>התחברות</Text>
              <Text style={styles.buttonText}>שדרות - מוקד חיל</Text>
              <Image source={chatIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routeNames.ConnectChatLoader)}>
            <View style={styles.innerButton}>
              <Text style={styles.connectButtonText}>התחברות</Text>
              <Text style={styles.buttonText}>מוקד חום חיל</Text>
              <Image source={chatIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0.05 * windowWidth,
  },
  redContainer: {
    position: 'absolute',
    bottom: 0,
    width: '113%',
    height: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 0.13 * windowWidth,
    
    borderTopLeftRadius: 0.2 * windowWidth,
    borderTopRightRadius: 0.2 * windowWidth,
  },
  topRightIcon: {
    position: 'absolute',
    top: 0.05 * windowWidth, 
    right: 0.05 * windowWidth, 
    width: 0.1 * windowWidth,
    height: 0.1 * windowWidth,
  },
  header: {
    fontSize: 0.06 * windowWidth,
    fontWeight: 'bold',
    marginBottom: 0.02 * windowWidth,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 0.045 * windowWidth,
    marginBottom: 0.05 * windowWidth,
    textAlign: 'center',
  },
  subHeaderSmall: {
    fontSize: 0.04 * windowWidth,
    marginBottom: 0.05 * windowWidth,
    textAlign: 'center',
  },
  button: {
    width: 0.8 * windowWidth,
    backgroundColor: 'gray',
    borderRadius: 0.025 * windowWidth,
    marginBottom: 0.03 * windowWidth,
  },
  innerButton: {
    flexDirection: 'row',
    padding: 0.04 * windowWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 0.05 * windowWidth,
    height: 0.05 * windowWidth,
    marginLeft: 0.02 * windowWidth,
  },
  buttonText: {
    color: '#fff',
    fontSize: 0.04 * windowWidth,
    flex: 1,
    textAlign: 'right',
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 0.035 * windowWidth,
    backgroundColor: '#e74c3c',
    padding: 0.02 * windowWidth,
    borderRadius: 0.0125 * windowWidth,
    marginLeft: 0.02 * windowWidth,
  },
});

export default ChatSelectRoom;
