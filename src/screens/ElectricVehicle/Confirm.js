import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import ConfirmModal from "./components/ConfirmModal";
import DocumentPicker from 'react-native-document-picker';

export default function Confirm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  
  const toggleModal = () => setIsModalVisible(!isModalVisible);

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
    <ScrollView style={{ backgroundColor: 'black' }}>
      <ConfirmModal modalVisible={isModalVisible} toggleModal={toggleModal} />
      <View style={styles.container}>
        <Text style={styles.bigText}>עמדת טעינה</Text>
        <Text style={styles.smallText}>
          לפניכם פרטי הקריאה אנה בדקו שכל הפרטים נכונים לפני שליחה
        </Text>
        <View style={styles.rowImageAndText}>
          <Text style={styles.rowText}>עמדת טעינה</Text>
          <Image
            source={require("../../assets/icons/elementsServiceIconsCharger.png")}
            style={styles.rowImage}
          />
        </View>
        <Text style={styles.mediumText}>תיאור / הערות</Text>
        <Text style={styles.smallText}>
          יש בעיה עם עמדת טעינה מספר 3, כשמנסים להטעין העמדה לא מתחילה להטעין
          ורושמת שדרוש טיפול
        </Text>
        <Text style={styles.mediumText}>תמונות</Text>
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
          <Pressable style={styles.button} onPress={handleImagePress}>
            <Text style={styles.buttonText}>הוסף תמונה</Text>
          </Pressable>
        </LinearGradient>
        <View style={styles.hr} />
        <Text style={styles.mediumText}>פרטים כללים</Text>
        <View style={styles.rowImageAndText}>
          <View>
            <Text style={styles.rowTextBig}>Tesla</Text>
            <Text style={styles.rowTextSmall}>2244132</Text>
          </View>
          <View style={styles.rowImageCircleContainer}>
            <Image
              source={require("../../assets/icons/elements24PxIconsCar.png")}
              style={styles.rowImageCircle}
            />
          </View>
        </View>
        <View style={styles.rowImageAndText}>
          <View>
            <Text style={styles.rowTextBig}>מיקום</Text>
            <Text style={styles.rowTextSmall}>עמדת טעינה בשער מערבי</Text>
          </View>
          <View style={styles.rowImageCircleContainer}>
            <Image
              source={require("../../assets/icons/elements24PxIconsPin.png")}
              style={styles.rowImageCircle}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textStack}>
            <Text style={styles.rowTextBig}>לידיעתך</Text>
            <Text style={styles.rowTextSmall}>
              ניתן להתעדכן בכל רגע נתון בסטטוס הבקשה שלך ישירות מהאפליקציה דרך
              מסך סטטוס הקריאות שלי.
            </Text>
          </View>
          <View style={styles.rowImageCircleContainerInfo}>
            <Image
              source={require("../../assets/icons/elements24PxIconsCar.png")}
              style={styles.rowImageCircle}
            />
          </View>
        </View>
        <LinearGradient
          colors={["#E60C73", "#FF7E5F"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Pressable style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>אישור ושליחה</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  bigText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    alignContent: "flex-start",
    width: "100%",
  },
  mediumText: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "flex-start",
    width: "100%",
  },
  smallText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    alignContent: "flex-start",
    width: "100%",
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
  rowImageAndText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  rowImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  rowText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  rowImageCircleContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#ECECEE",
  },
  rowImageCircleContainerInfo: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#FFC509",
  },
  rowImageCircle: {
    width: 40,
    height: 40,
  },
  rowTextBig: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  rowTextSmall: {
    fontSize: 15,
    textAlign: "right",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "right",
    backgroundColor: "#FFFAE6",
    padding: 10,
    borderRadius: 10,
  },
  textStack: {
    flexDirection: "column",
    alignItems: "flex-end",
    maxWidth: "80%",
  },
});
