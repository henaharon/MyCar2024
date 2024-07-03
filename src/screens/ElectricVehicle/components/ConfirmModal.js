import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ConfirmModal = ({ modalVisible, toggleModal }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>תודה</Text>
            <Text style={styles.modalText}>קריאה נשלחה בהצלחה!</Text>
            <LinearGradient
              colors={['#E60C73', '#FF7E5F']}
              style={[styles.gradient, styles.modalButton]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>צפייה בסטטוס הקריאה</Text>
              </Pressable>
            </LinearGradient>
            <Pressable onPress={toggleModal}>
              <Text style={styles.buttonTextConfirm}>אישור</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 20,
    width: '85%',
  },
  gradient: {
    borderRadius: 25,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextConfirm: {
    color: '#137DFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ConfirmModal;
