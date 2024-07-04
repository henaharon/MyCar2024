import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationModal = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    onClose();
    navigation.navigate('AllMessages');
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>המשוב נשלח בהצלחה!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleConfirm}
          >
            <Text style={styles.buttonText}>אישור</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'rgb(240,92,98)',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
});

export default ConfirmationModal;
