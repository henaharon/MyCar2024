import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderTitle from "../SearchAndGo/components/HeaderTitle";

const MOCK_DATA_CITIES = [
  {
    id: "21",
    city: "תל אביב",
  },
  {
    id: "22",
    city: "באר שבע",
  },
  {
    id: "23",
    city: "חיפה",
  },
  {
    id: "24",
    city: "פתח תקווה",
  },
  {
    id: "25",
    city: "נתניה",
  },
  {
    id: "26",
    city: "ראשון לציון",
  },
  {
    id: "27",
    city: "ירושלים",
  },
  {
    id: "28",
    city: "רחובות",
  },
  {
    id: "29",
    city: "יבנה",
  },
  {
    id: "30",
    city: "חולון",
  },
  {
    id: "31",
    city: "בת ים",
  },
  {
    id: "32",
    city: "הרצליה",
  },
  {
    id: "33",
    city: "כפר סבא",
  },
  {
    id: "34",
    city: "עפולה",
  },
  {
    id: "35",
    city: "טבריה",
  },
];

export default function SearchCity({ setShowSearchCity }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/icons/elements24PxIconsPin.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.itemHeaderText}>
        <Text style={styles.city}>{item.city}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowSearchCity(false)}>
          <Text style={styles.buttonText}>בחירה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderTitle title="חפש לפי עיר" />
      <View style={styles.flatlistContainer}>
        <Text style={styles.title}>בחר עיר</Text>

        <FlatList
          data={MOCK_DATA_CITIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
        />
      </View>
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
  flatlistContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    color: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 5,
    width: "90%",
    justifyContent: "flex-start",
  },
  itemContainer: {
    flexDirection: "row-reverse",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E2",
    borderRadius: 25,
    padding: 15,
  },
  logo: {
    width: 25,
    height: 25,
  },
  itemHeaderText: {
    flex: 1,
    marginHorizontal: 10,
  },
  city: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#F15C62",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
  },
});
