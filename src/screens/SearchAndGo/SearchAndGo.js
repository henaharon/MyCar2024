import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import MyCarLocation from "./MyCarLocation";
import SearchCity from "./SearchCity";
import { useState } from "react";

export default function SearchAndGo() {
  const [showSearchCity, setShowSearchCity] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {showSearchCity ? (
        <SearchCity setShowSearchCity={setShowSearchCity} />
      ) : (
        <MyCarLocation setShowSearchCity={setShowSearchCity} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
