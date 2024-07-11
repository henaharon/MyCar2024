import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const backgroundImage = require('../../assets/images/Backgroundimage.png');

const ConnectChatLoader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChatRoom');
    }, 2000); // סימולציה של טעינה של 2 שניות
  }, [navigation]);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>מתחבר לצ'אט...</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  text: {
    marginTop: 20,
    fontSize: 0.05 * windowWidth,
    textAlign: 'center',
  },
});

export default ConnectChatLoader;
