import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MenuItem from "./MenuItem";

const windowWidth = Dimensions.get("window").width;

const ContactSection = ({ navigation }) => {
  return (
    <View style={styles.contactSection}>
      <Text style={[styles.header, styles.headerRight]}>צרו קשר איתנו</Text>
      <MenuItem
        onPress={() => navigation.navigate("AppNavigator")}
        icon={require("../../../assets/k1_icons/chat.png")}
        text="צ'אט עם נציג שירות"
      />
      <MenuItem
        icon={require("../../../assets/k1_icons/call.png")}
        text="שיחה עם נציג שירות"
      />
      <MenuItem
        icon={require("../../../assets/k1_icons/contact_us.png")}
        text="כתבו לנו"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactSection: {
    marginBottom: 0.05 * windowWidth,
    paddingRight: 0.025 * windowWidth,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0.05 * windowWidth,
  },
  headerRight: {
    textAlign: "right",
    color: "white",
  },
});

export default ContactSection;
