import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderTitle = ({title}) => {
  return (
    <View style={styles.headerView}>
      <View style={styles.imageContainer} />
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png")}
        />
      </View>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    width: "100%",
    padding: 10,
  },
  imageContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "#fff",
  },
});
