import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MenuItem from "./MenuItem";
import BigItem from "./BigItems";
const windowWidth = Dimensions.get("window").width;

const MenuSection = ({ navigation }) => {
  return (
    <View style={styles.menuSection}>
      <View style={styles.bigItemsContainer}>
        <BigItem
          icon={require("../../../assets/k1_icons/my_messages.png")}
          text="הודעות שלי"
          style={styles.bigItem}
        />
        <BigItem
          icon={require("../../../assets/k1_icons/tickets_status.png")}
          text="הקריאות שלי"
          style={styles.bigItem}
        />
      </View>
      <MenuItem
        onPress={() => navigation.navigate("MyCarStack")}
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
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    paddingBottom: 0.1 * windowWidth,
    paddingRight: 0.025 * windowWidth,
  },
  bigItemsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 0.05 * windowWidth,
    width: 0.7 * windowWidth,
    justifyContent: "space-between",
  },
  bigItem: {
    flex: 1,
    marginHorizontal: 0.02 * windowWidth,
  },
});

export default MenuSection;
