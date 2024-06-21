import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomButton from "../components/customButton";
import exitIcon from "../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha@3x.png"

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <CustomButton 
        onPress={ () => {}}
        title="שמירה"
        buttonStyle={styles.saveButton}
        textStyle={styles.saveButtonText}/>
      <Text stlye={styles.title}>הפרופיל שלי</Text>
      <TouchableOpacity onPress={() => {}} style={styles.exitButton}>
        <Image 
        source={exitIcon}
        style={styles.exitIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ff7979",
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#4a6cf7',
  },
  saveButtonText: {
    color: '#fff',
  },
  exitButton: {
    backgroundColor: 'transparent',
  },
  exitIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;

