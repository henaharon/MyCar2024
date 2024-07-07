import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const addIcon = require("../../../assets/f1_icons/message_icon.png");
const elementsService = require("../../../assets/f1_icons/elementsService_icon.png");

const texts = {
  butten1: "הזמנת טיפול צאת אם נציג",
  butten2: "איתור וניוויט לפנצריות",
};

const Button = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image source={icon} style={styles.iconButton} />
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const Buttons = ({ contactChat }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button text={texts.butten1} icon={addIcon} onPress={contactChat} />
      <Button text={texts.butten2} icon={elementsService} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.6)",
    alignSelf: "center",
    width: "90%",
    marginBottom: 8,
  },
  iconButton: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  textButton: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
  },
  buttonsContainer: {
    justifyContent: "space-between",
    top: -50,
    height: "40%",
  },
});

export default Buttons;
