import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const CloseChatDialog = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>התנתקות</Text>
      <Text style={styles.message}>האם ברצונך לסגור את השיחה?</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('ChatSelectRoom')}>
        <Text style={styles.closeButtonText}>סגירת שיחה</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>חזרה</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  closeButton: {
    width: windowWidth * 0.8,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cancelText: {
    color: '#007BFF',
    fontSize: 18,
  },
});

export default CloseChatDialog;
