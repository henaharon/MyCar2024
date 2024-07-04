import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { MessageBox } from './MessageBox';
import { useNavigation } from '@react-navigation/native';
import messagesData from '../helpers/messages.json';


const ScrollMessages = ({ direction = 'vertical' }) => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesArray = Object.keys(messagesData).map(key => ({
      id: key,
      ...messagesData[key]
    }));

    setMessages(messagesArray);
  }, []);

  if (!messages.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={direction === 'horizontal' ? [styles.scrollViewContent, styles.horizontalContent] : styles.scrollViewContent}
      horizontal={direction === 'horizontal'}
    >
      {messages.map((message) => (
        <MessageBox
          key={message.id}
          img={message.img}
          title={message.title}
          firstLine={message.p1[0]}
          onPress={() => navigation.navigate('MessageDetails', { messageId: message.id })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 20,
    marginTop: -30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScrollMessages;