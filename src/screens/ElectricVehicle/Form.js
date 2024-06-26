import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Form() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/icons/elementsServiceIconsCharger.png")}
          style={styles.image}
        />
        <Text style={styles.bigText}>פרטים</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="תיאור / הערות"
          placeholderTextColor="#aaa"
          multiline={true}
          numberOfLines={5}
          style={styles.inputText}
        />
        <Text style={styles.mediumText}>הוספת תמונות</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => (
            <Image
              source={require("../../assets/icons/elements24PxIconsPlaceHolderImage2.png")}
              style={styles.flatListImage}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="מיקום נוכחי / הוראות הגעה"
          placeholderTextColor="#aaa"
          multiline={true}
          numberOfLines={5}
          style={styles.inputText}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    marginTop: 10, // Add some margin to the top
  },
  image: {
    width: 120,
    height: 120,
  },
  bigText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    alignContent: "flex-start",
    width: "100%",
    color: "#000",
  },
  mediumText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "flex-start",
    width: "100%",
    color: "#000",
  },
  inputText: {
    marginTop: 10,
    width: "100%",
    height: 150,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    color: "#000", // Ensure text color is black
  },
  flatList: {
    marginBottom: 10,
    width: "100%",
    height: 150,
  },
  flatListImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: "#000",
  },
});
