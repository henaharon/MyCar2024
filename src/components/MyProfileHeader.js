import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomButton from "./customButton";
import exitButton from "../assets/icons/exiticon.png"
import LightboxModal from "./LightboxModal";

const Header = ({ onSave, onExit, isDirty }) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleExit = () => {
      onExit();
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={onSave}>
        <Text style={styles.saveButtonText}>שמירה</Text>
      </TouchableOpacity>
      <Text style={styles.title}>פרופיל שלי</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleExit} style={[styles.button, styles.exitButton]}>
          <Image
            source={exitButton}
            style={styles.exitIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  buttonContainer: {
    width:120,
    alignItems: "flex-end",
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  button: {
    zIndex: 1,
  },
  saveButton: {
    backgroundColor: '#4c54f4',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exitButton: {
    backgroundColor: 'transparent',
  },
  exitIcon: {
    width: 32,
    height: 32,
  },
});

export default Header;

