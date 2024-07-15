// DriverSideMenu.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfileSection from "./components/ProfileSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
import LogoSection from "./components/LogoSection";
import LinearGradient from "react-native-linear-gradient";

const SideMenu = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["#DD0370", "#E22D66", "#E7525F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <ProfileSection />
        <MenuSection navigation={navigation} />
        <ContactSection />
        <LogoSection />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
});

export default SideMenu;
