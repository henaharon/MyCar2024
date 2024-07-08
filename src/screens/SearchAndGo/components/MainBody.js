import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from "react-native";
import FlatListZone from "./FlatListZone";
import SearchBar from "./SearchBar";
import PhoneModal from "./PhoneModal";

const MOCK_DATA_OPTIONS = [
  {
    id: "11",
    title: "תחנת דלק עם פזומט",
  },
  {
    id: "12",
    title: "דלק עם פז שטיפה",
  },
  {
    id: "13",
    title: "עם חנות נוחות",
  },
  {
    id: "14",
    title: "עם מסעדה",
  },
];

const MOCK_DATA_RESULTS = [
  {
    name: "וולקן מוטורס",
    address: "מרידור 42, חיפה, הקריות",
    phone: "04 6176555",
    hours: {
      regular: "08:00 - 17:00",
      friday: "08:00 - 12:00",
      saturday: "סגור",
    },
    id: "101",
  },
  {
    name: "אוטומוטיב",
    address: "הגלבוע 9 א, הרצליה",
    phone: "04 6247678",
    id: "102",
  },
  {
    name: "מרכז שירות פתח תקווה",
    address: "המרכבה 52, אזור תעשייה סגולה, פתח תקווה",
    phone: "03 9249191",
    hours: {
      regular: "08:00 - 17:00",
      friday: "08:00 - 12:00",
      saturday: "סגור",
    },
    id: "103",
  },
  {
    name: "א.צ אוטומוטיב",
    address: "בית הטקסטיל 18, באר שבע",
    id: "104",
  },
];

const MainBody = ({ setShowSearchCity }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openMaps = (item) => {
    const encodedAddress = encodeURIComponent(item?.address);
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const url = `${scheme}${encodedAddress}`;
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/icons/elements24PxIconsPin.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.itemHeaderText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openMaps(item);
            }}>
            <Text style={styles.buttonText}>נווט</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hrView} />

      {item.phone && (
        <View style={styles.contactView}>
          <Text style={styles.contactTitle}>פרטי התקשרות</Text>
          <View style={styles.contactInfo}>
            <Text>טלפון</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
              }}>
              <Text style={styles.phone}>{item.phone}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {item.hours && (
        <View style={styles.contactView}>
          <Text style={styles.contactTitle}>שעות פעילות</Text>
          <View style={styles.contactInfo}>
            <Text>רגיל</Text>
            <Text>{item.hours.regular}</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text>שישי</Text>
            <Text>{item.hours.friday}</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text>שבת</Text>
            <Text>{item.hours.saturday}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <PhoneModal
        phone={selectedItem?.phone}
        name={selectedItem?.name}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SearchBar setShowSearchCity={setShowSearchCity} />
      <FlatListZone data={MOCK_DATA_OPTIONS} />
      <Text style={styles.textStyle}>נמצאו 36 תוצאות</Text>
      <FlatList
        data={MOCK_DATA_RESULTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.resultsContainer}
      />
    </View>
  );
};

export default MainBody;

const styles = StyleSheet.create({
  container: {
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
  textStyle: {
    fontSize: 18,
    color: "#A4A5A8",
    marginVertical: 10,
  },
  resultsContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "column",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  itemHeader: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#D3D3D3",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  itemHeaderText: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
    flexDirection: "column",
    width: "70%",
    marginRight: 10,
  },
  button: {
    backgroundColor: "#F15C62",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
  },
  hrView: {
    width: "100%",
    height: 1,
    backgroundColor: "#D3D3D3",
    marginVertical: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  address: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  phone: {
    fontSize: 14,
    color: "#007BFF",
  },
  hours: {
    fontSize: 12,
    color: "#A4A5A8",
  },
  contactView: {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  contactTitle: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  contactInfo: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
  },
});
