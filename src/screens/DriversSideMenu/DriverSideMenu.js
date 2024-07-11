// DriverSideMenu.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfileSection from "./components/ProfileSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
import LogoSection from "./components/LogoSection";

const SideMenu = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileSection />
      <MenuSection />
      <ContactSection />
      <LogoSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
});

export default SideMenu;
