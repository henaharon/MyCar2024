import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DriversCall = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.logo} source={require('../../assets/images/phone.png')} />
              <Text style={styles.modalTextTitle}>התקשר</Text>
              <Text style={styles.modalText}>מוקד שירות</Text>
              <LinearGradient
                colors={['#E60C73', '#FF7E5F']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ color: 'white' }}>התקשר למוקד</Text>
                </Pressable>
              </LinearGradient>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleButton}>סגירה</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text>Some text here to place holder</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Press</Text>
      </Pressable>
      <Text>Some text here to place holder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyleButton: {
    color: 'blue',
  },
  gradient: {
    borderRadius: 25,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTextTitle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default DriversCall;
