import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const texts = {
  stopModal: "ביטול",
};

const ModalButton = ({ setIsVisible, setCancelNavigation }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        setIsVisible(false);
        setCancelNavigation(true);
      }}
    >
      <Text style={styles.stop}>{texts.stopModal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "red",
    height: 50,
    width: 200,
    alignSelf: "center",
    marginTop: 68,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  stop: {
    fontSize: 17,
    color: "white",
  },
});

export default ModalButton;
