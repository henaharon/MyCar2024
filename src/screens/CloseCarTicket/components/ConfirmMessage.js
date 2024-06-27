import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const ConfirmMessage = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={true}
        onRequestClose={onClose}
      >
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={10}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>תודה</Text>
              <Text style={styles.subtitle}>משוב נשלח בהצלחה</Text>
              <TouchableOpacity style={styles.sendButton} onPress={onClose}>
                <Text style={styles.sendButtonText}>אישור</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    backgroundColor: '#B3D1B0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%'
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000000'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000000'
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#FC4472',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ConfirmMessage;
