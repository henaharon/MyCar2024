import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import messagesData from '../helpers/messages.json';
import ContentMessage from '../commponents/ContentMessage';
import images from '../helpers/images';
import FeedBack from '../commponents/FeedBack';

const ScreenMessage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { messageId } = route.params;
  const message = messagesData[messageId];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images[message.img]} style={styles.headerImage} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
          <Image source={require('../../../assets/icons/arrowRight.png')} style={styles.backButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <ContentMessage content={message} />
          {message.type === "fb" && (<FeedBack />)}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  backButton: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: -20,
    flex: 1,
    padding: 16,
  },
});

export default ScreenMessage;
