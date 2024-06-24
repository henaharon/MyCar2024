// ContactSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const ContactSection = () => {
  return (
    <View style={styles.contactSection}>
      <Text style={styles.header}>Contact us</Text>
      <MenuItem icon={require('../../../assets/k1_icons/chat.png')} text="Chat" />
      <MenuItem icon={require('../../../assets/k1_icons/call.png')} text="Call" />
      <MenuItem icon={require('../../../assets/k1_icons/contact_us.png')} text="Contact us" />
    </View>
  );
};

const styles = StyleSheet.create({
  contactSection: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContactSection;