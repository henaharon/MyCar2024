// MenuSection.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const MenuSection = () => {
  return (
    <View style={styles.menuSection}>
      <MenuItem icon={require('../../../assets/k1_icons/my_messages.png')} text="My Messages" />
      <MenuItem icon={require('../../../assets/k1_icons/tickets_status.png')} text="Tickets Status" />
      <MenuItem icon={require('../../../assets/k1_icons/my_car.png')} text="My Car" />
      <MenuItem icon={require('../../../assets/k1_icons/search_n_go.png')} text="Search & Go" />
      <MenuItem icon={require('../../../assets/k1_icons/guides.png')} text="Guides" />
      <MenuItem icon={require('../../../assets/k1_icons/faq.png')} text="FAQ" />
    </View>
  );
};

const styles = StyleSheet.create({
  menuSection: {
    marginBottom: 20,
  },
});

export default MenuSection;