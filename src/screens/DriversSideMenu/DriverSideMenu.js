// DriverSideMenu.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfileSection from "./components/ProfileSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
import LogoSection from "./components/LogoSection";

const SideMenu = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileSection navigation={navigation} />
      <MenuSection navigation={navigation} />
      <ContactSection navigation={navigation} />
      <LogoSection navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ee4666",
    padding: 10,
  },
});

export default SideMenu;
