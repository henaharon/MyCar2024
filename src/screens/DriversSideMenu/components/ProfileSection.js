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

const ProfileSection = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("MyProfile")}
      style={styles.profileSection}
    >
      <View style={styles.textContainer}>
        <Text style={styles.smallText}>שלום,</Text>
        <Text style={styles.text}>עומר פורטנוי</Text>
      </View>
      <Image
        source={require("../../../assets/k1_icons/my_profile.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0.2 * windowWidth,
    justifyContent: "flex-end", // Align items to the end of container (right side)
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-end", // Align items to the end of container (right side)
    marginRight: 0.05 * windowWidth,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 0.01 * windowWidth,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  smallText: {
    fontSize: 16, // Set the size for the additional text
    color: "white",
  },
});

export default ProfileSection;
