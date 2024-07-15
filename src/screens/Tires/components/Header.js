import React from "react";

import {
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

const closeIcon = require("../../../assets/f1_icons/close_icon.png");
const backgroundImage = require("../../../assets/f1_icons/tires.png");

const texts = {
  headerTitle: "שירותי צמיגים",
};

const Header = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <Text style={styles.headerTitle}>{texts.headerTitle}</Text>
      <TouchableOpacity
        style={styles.goBackButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={closeIcon} style={styles.goBackButtonIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    color: "white",
  },
  goBackButtonContainer: { position: "absolute", top: 25, right: 20 },
  goBackButtonIcon: { width: 35, height: 35 },
});

export default Header;
