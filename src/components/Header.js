import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomButton from "./customButton";
import exitButton from "../assets/icons/exiticon.png"
import LightboxModal from "./LightboxModal";

const Header = ({ title }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <CustomButton
        onPress={() => { }}
        title="שמירה"
        buttonStyle={styles.saveButton}
        textStyle={styles.saveButtonText} />
      <Text style={styles.title}>פרופיל שלי</Text>
      <TouchableOpacity onPress={toggleModal} style={styles.exitButton}>
        <Image
          source={exitButton}
          style={styles.exitIcon} />
      </TouchableOpacity>

      <LightboxModal
        visible={isModalVisible}
        onClose={toggleModal}
        title="שמירה"
        text="האם ברצונך לשמור את השינויים שנעשו בפרופיל האישי?"
        buttons={[
          {
            name: "שמור שינויים",
            onPress: () => {
              // add save logic
              toggleModal();
            },
            gradient: true,
          },
          {
            name: "חזרה, ללא שמירה",
            backgroundColor: "#fff",
            onPress: toggleModal,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
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
    width: 32,
    height: 32,
  },
});

export default Header;

