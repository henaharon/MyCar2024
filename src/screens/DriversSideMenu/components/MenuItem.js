import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const MenuItem = ({ icon, text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.menuItem}>
      <Text style={styles.text}>{text}</Text>
      <Image source={icon} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 0.03 * windowWidth,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 0.03 * windowWidth,
  },
  text: {
    fontSize: 16,
    textAlign: "right",
    color: "white",
  },
});

export default MenuItem;
