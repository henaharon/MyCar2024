import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import searchIcon from '../../../assets/icons/search.png';

export default function SearchBar({ setShowSearchCity }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="חפש לפי עיר"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#000"
        onFocus={() => setShowSearchCity(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "85%",
    alignSelf: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
    textAlign: "right",
  },
});
