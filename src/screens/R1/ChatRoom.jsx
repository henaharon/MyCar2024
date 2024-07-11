import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, ImageBackground, Image, Dimensions } from 'react-native';
import { routeNames } from '../../config/routes';

const windowWidth = Dimensions.get('window').width;
const backgroundImage = require('../../assets/images/Backgroundimage.png');
const userIcon = require('../../assets/images/user-icon.png');  // replace with actual user icon path
const operatorIcon = require('../../assets/images/operator-icon.png');  // replace with actual operator icon path

function ChatRoom({ navigation }) {

    const messages = [
        {
            id: 0,
            sender: `user`,
            text: `
                היי, שמי דן רונן ואני צריך שירות עבור הרכב שלי. אני ברחוב הראשי 123, תל אביב, 92109. אני זמין ב - 052-4341191
            `,
            time: `10:01`,
            icon: userIcon,
        },
        {
            id: 1,
            sender: `operator`,
            text: `
                היי דן. אין בעיה. בטיפול.
            `,
            time: `10:22`,
            icon: operatorIcon
        },
        {
            id: 2,
            sender: `user`,
            text: `
                תודה רבה!
            `,
            time: `10:22`,
            icon: userIcon
        },
        {
            id: 3,
            sender: `operator`,
            text: `
                היי דן זו תזכורת אוטומטית עבור הפגישה הקרובה שלך. מתי: יום שלישי 5 במאי 16:30 טק: ג'ן. אם יש לך עדכונים אנא פנה אלינו ב-800-555-555 או השב להודעה זו.
            `,
            time: `11:30`,
            icon: operatorIcon
        },
    ];

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>צ'אט</Text>
                    <Pressable style={styles.exitButton} onPress={() => navigation.navigate('CloseChatDialog')}>
                        <MaterialIcons name='close' color='#fff' size={24}></MaterialIcons>
                    </Pressable>
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.dateTitle}>חמישי 21 אוקטובר</Text>
                    <FlatList
                        data={messages}
                        keyExtractor={message => message.id.toString()}
                        renderItem={({ item }) => (
                            <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.operatorMessage]}>
                                <View style={[styles.textContainer, item.sender === 'user' ? styles.userTextContainer : styles.operatorTextContainer]}>
                                    <Text style={styles.textMessage}>{item.text}</Text>
                                </View>
                                <Image source={item.icon} style={styles.senderIcon} />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.messageInputContainer}>
                    <Feather name='image' size={24} color='black' style={styles.imageIcon} />
                    <View style={styles.messageInput}>
                        <TextInput style={styles.textInput} placeholder='כתוב הודעה...' />
                        <MaterialCommunityIcons name='send-circle' size={24} color="black" style={styles.sendIcon} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'grey'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  exitButton: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  dateTitle: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'grey',
  },
  message: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: 32,
    gap: 8
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  operatorMessage: {
    flexDirection: 'row'
  },
  textContainer: {
    maxWidth: '70%',
    padding: 8
  },
  userTextContainer: {
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  operatorTextContainer: {
    backgroundColor: 'pink',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  textMessage: {
    textAlign: 'right',
    color: '#fff',
  },
  senderIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 10,
  },
  messageInputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'lightgrey',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  sendIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  messageInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '75%'
  },
  textInput: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  imageIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1
  }
});

export default ChatRoom;
