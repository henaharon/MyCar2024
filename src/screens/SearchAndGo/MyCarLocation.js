import { StyleSheet, Text, View } from "react-native";
import HeaderTitle from "../SearchAndGo/components/HeaderTitle";
import FlatListZone from "../SearchAndGo/components/FlatListZone";
import MainBody from "../SearchAndGo/components/MainBody";

const MOCK_DATA_ZONES = [
  {
    id: "1",
    title: "כל אזורי הארץ",
  },
  {
    id: "2",
    title: "צפון",
  },
  {
    id: "3",
    title: "מרכז",
  },
  {
    id: "4",
    title: "דרום",
  },
  {
    id: "5",
    title: "ירושלים",
  },
];

export default function MyCarLocation({ setShowSearchCity }) {
  return (
    <View style={styles.container}>
      <HeaderTitle title="חפש ונווט" />
      <FlatListZone data={MOCK_DATA_ZONES} />
      <MainBody setShowSearchCity={setShowSearchCity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    color: "#fff",
  },
});
