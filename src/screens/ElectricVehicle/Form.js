import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';

export default function Form() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    requestExternalStoragePermission();
  }, []);

  const requestExternalStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "Access to Pictures",
            message: "This app needs access to your pictures",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the pictures");
        } else {
          console.log("Permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleImagePress = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (result) {
        setImages([...images, result[0].uri]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Canceled");
      } else {
        throw err;
      }
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

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
          data={images}
          renderItem={({ item, index }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item }}
                style={styles.flatListImage}
              />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteImage(index)}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <LinearGradient
          colors={["#E60C73", "#FF7E5F"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <TouchableOpacity onPress={handleImagePress} style={styles.button}>
            <Text style={styles.buttonText}>הוסף תמונה</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    marginTop: 10, 
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
    color: "#000", 
  },
  flatList: {
    marginBottom: 10,
    width: "100%",
    height: 150,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 10,
  },
  flatListImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  deleteButton: {
    position: 'absolute',
    top: 5, 
    right: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 15,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  gradient: {
    width: "100%",
    borderRadius: 30,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
