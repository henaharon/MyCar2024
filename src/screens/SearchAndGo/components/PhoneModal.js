import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function PhoneModal(props) {
  const { phone, name, modalVisible, setModalVisible } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={[styles.modalText, { fontSize: 20, fontWeight: "bold" }]}>
            התקשר
          </Text>
          <Text style={styles.modalText}>האם להתקשר ל{name}</Text>
          <Text style={styles.modalText}>{phone}</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <LinearGradient
              colors={["#F05963", "#E50474"]}
              style={styles.linearGradient}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}>
              <Text style={styles.buttonText}>התקשר</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>סגירה</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  linearGradient: {
    padding: 15,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 20,
    width: 200,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
