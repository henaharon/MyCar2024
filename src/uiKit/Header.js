import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/icons/logo.png")}
        />
      </View>
      <Pressable
        // onPress={() => isAuthorized && setIsAuthorized(false)}
        style={styles.headerTextContainer}
      >
        <Text style={styles.logoText}>{"My Timer"}</Text>
      </Pressable>
      <View style={styles.rightContainer} />
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: windowHeight * 0.1,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
  },
  headerTextContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    borderColor: "green",
    borderWidth: 1,
  },
  logoText: {
    color: "black",
    fontSize: 35,
    fontWeight: "900",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    borderColor: "green",
    borderWidth: 1,
    flex: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
