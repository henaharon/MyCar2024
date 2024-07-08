import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const HeaderTitle = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png")}
        />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.imageContainer} />
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
