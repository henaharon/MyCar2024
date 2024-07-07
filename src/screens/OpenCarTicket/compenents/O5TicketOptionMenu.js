import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import CancelTicketModal from "./CancelTicketModal";
import XButtonIcon from "../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png";

const O5TicketOptionMenu = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container1}>
      {/* <View style={styles.headerTopRow}>
        <Text></Text>

        <Pressable style={styles.iconButton} onPress={handleGoBack}>
          <Image source={XButtonIcon} style={styles.rightIcon} />
        </Pressable>
      </View> */}
      <Text style={styles.text1}>אפשריות קריאה</Text>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container4}>
          <Text style={styles.text2}>ביטול קריאה</Text>
          <Image
            source={require("../../../assets/icons/aa.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <CancelTicketModal visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,

    backgroundColor: "#f5f5f5",
    height: "auto",
  },
  option: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
  },
  optionText: {
    fontSize: 18,
    padding: 20,
    color: "red",
    fontWeight: "bold",
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  iconButton: {
    padding: 5,
  },
  rightIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    margin: 15,
  },

  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  img: {
    width: 25,
    height: 25,
  },

  container4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
  },
  image: {
    width: 25,
    height: 25, // Adjust the size as needed
    marginRight: 10, // Space between the image and the text
  },
  text2: {
    fontSize: 18,
    padding: 20,
    color: "red",
    fontWeight: "bold",
    textAlign: "right",
  },
  text1: {
    fontSize: 18,
    padding: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default O5TicketOptionMenu;
