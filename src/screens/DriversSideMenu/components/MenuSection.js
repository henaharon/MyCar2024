// MenuSection.js
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MenuItem from "./MenuItem";
import BigItem from "./BigItems";
const windowWidth = Dimensions.get("window").width;

const MenuSection = () => {
  return (
    <View style={styles.menuSection}>
      <View style={styles.bigItemsContainer}>
        <BigItem
          icon={require("../../../assets/k1_icons/my_messages.png")}
          text="הודעות שלי"
        />
        <BigItem
          icon={require("../../../assets/k1_icons/tickets_status.png")}
          text="הקריאות שלי"
        />
      </View>
      <MenuItem
        icon={require("../../../assets/k1_icons/my_car.png")}
        text="הרכבים שלי"
      />
      <MenuItem
        icon={require("../../../assets/k1_icons/search_n_go.png")}
        text="חפש נווט"
      />
      <MenuItem
        icon={require("../../../assets/k1_icons/guides.png")}
        text="מדריכים וטיפים"
      />
      <MenuItem
        icon={require("../../../assets/k1_icons/faq.png")}
        text="שאלות ותשובות"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuSection: {
    marginBottom: 0.1 * windowWidth,
  },
  bigItemsContainer: {
    flexDirection: "row", // Display items horizontally
    justifyContent: "space-around", // Distribute items evenly along the row
    marginBottom: 0.1 * windowWidth, // Adjust as needed
  },
});

export default MenuSection;
