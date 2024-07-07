import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Calendar } from "react-native-calendars";
import ServiceHeader from "../components/ServiceHeader";
import LocationOption from "../components/LocationOption";
import ServiceButton from "../components/ServiceButton";
import GradientButton from "./GradientButton";
import ServiceCenterModal from "../components/ServiceCenterModal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ServiceCenterWizard = ({ modalVisible, setModalVisible, startStep }) => {
  const [step, setStep] = useState(startStep);
  const [details, setDetails] = useState("");
  const [moreDetails, setMoreDetails] = useState("");
  const [mileage, setMileage] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [demands, setDemands] = useState([]);
  const [images, setImages] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setModalVisible(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleAddImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImages([...images, source]);
      }
    });
  };

  const handleCameraImage = () => {
    launchCamera({}, (response) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.error) {
        console.log("Camera Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImages([...images, source]);
      }
    });
  };

  const handleAdditionalDemandSelection = (demand) => {
    setDemands((prevDemands) => {
      if (prevDemands.includes(demand)) {
        return prevDemands.filter((item) => item !== demand);
      } else {
        return [...prevDemands, demand];
      }
    });
  };

  const demandButtons = [
    {
      icon: require("../D1-2-assets/icons/Lights.png"),
      text: "נורות",
      demand: "lights",
    },
    {
      icon: require("../D1-2-assets/icons/Wipers.png"),
      text: "מגבים",
      demand: "wipers",
    },
    {
      icon: require("../D1-2-assets/icons/Ac.png"),
      text: "מזגן",
      demand: "ac",
    },
    {
      icon: require("../D1-2-assets/icons/Brakes.png"),
      text: "בלמים",
      demand: "brakes",
    },
    {
      icon: require("../D1-2-assets/icons/Tires.png"),
      text: "צמיגים",
      demand: "tires",
    },
  ];

  const handleDayPress = (day) => {
    if (selectedDate === day.dateString) {
      handleNext();
    } else {
      setSelectedDate(day.dateString);
    }
  };

  const steps = [
    {
      title: "תקלה ברכב",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <Image
            source={require("../D1-2-assets/icons/Car.png")}
            style={styles.coverCar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>פרטים</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.floatingLabel}>תיאור/הערות</Text>
              <TextInput
                style={styles.inputLeb}
                placeholder="הכנס תיאור או הערות"
                value={details}
                onChangeText={setDetails}
                multiline
                placeholderTextColor="#68677E"
              />
            </View>

            {/* <Text style={styles.labelInput}>אחר</Text>
            <TextInput
              style={styles.inputLeb}
              placeholder="האם יש עוד משהו שתרצו שנבדוק שלא מצויין ברשימה למעלה?"
              value={details}
              onChangeText={setDetails}
              multiline
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              isFocused={isFocused}
              placeholderTextColor={styles.placeholderTextColor.color}
            /> */}
          </View>
          <View style={styles.addImagesContainer}>
            <Text style={styles.titleStep}>הוספת תמונות</Text>
            <ScrollView horizontal>
              {images.length < 3 && (
                <>
                  <TouchableOpacity onPress={handleAddImage}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require("../D1-2-assets/icons/img.png")}
                        style={styles.iconGallery}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCameraImage}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require("../D1-2-assets/icons/Camera.png")}
                        style={styles.iconCamera}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={image} style={styles.thumbnail} />
                </View>
              ))}
            </ScrollView>
            <Text style={styles.subtitleStep}>עד 3 תמונות</Text>
          </View>
        </ScrollView>
      ),
    },
    {
      title: "קילומטראז'",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>מספר הקילומטרים ברכב</Text>
            <Text style={styles.subtitleStep}>
              אנא הזן את מספר הקילומטרים הנוכחי ברכבך
            </Text>
          </View>
          <Image
            source={require("../D1-2-assets/icons/elementsPageCover.png")}
            style={styles.iconCover}
          />
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder='ק"מ'
            value={mileage}
            onChangeText={setMileage}
            keyboardType="numeric"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
            placeholderTextColor={styles.placeholderTextColor.color}
          />
        </ScrollView>
      ),
    },
    {
      title: "מיקום",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>נקודות איסוף והחזרה</Text>
            <Text style={styles.subtitleStep}>
              אנא בחר נקודת איסוף והחזרת הרכב
            </Text>
          </View>
          {["אמדוקס רעננה", "אמדוקס צנרת", "אמדוקס שדרות"].map((location) => (
            <LocationOption
              key={location}
              locationName={location}
              isSelected={selectedLocation === location}
              onPress={() => setSelectedLocation(location)}
            />
          ))}
        </ScrollView>
      ),
    },
    {
      title: "מועד הטיפול",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>בחירת מועד לטיפול</Text>
            <Text style={styles.subtitleStep}>אנא בחר תאריך לטיפול</Text>
          </View>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: "red",
              },
            }}
          />
        </ScrollView>
      ),
    },
    {
      title: "דרישות נוספות",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>תרצה שנבדוק עוד משהו?</Text>
            <Text style={styles.subtitleStep}>(ניתן לבחור מספר אפשרויות)</Text>
          </View>
          <View style={styles.buttonContainer}>
            {demandButtons.map((button) => (
              <ServiceButton
                key={button.text}
                icon={button.icon}
                text={button.text}
                style={styles.serviceButton}
                onPress={() => handleAdditionalDemandSelection(button.demand)}
              />
            ))}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.labelInput}>אחר</Text>
            <TextInput
              style={styles.inputLeb}
              placeholder="האם יש עוד משהו שתרצו שנבדוק שלא מצויין ברשימה למעלה?"
              value={moreDetails}
              onChangeText={setMoreDetails}
              multiline
              onBlur={() => setIsFocused(false)}
              isFocused={isFocused}
              placeholderTextColor={styles.placeholderTextColor.color}
            />
          </View>
          <View style={styles.addImagesContainer}>
            <Text style={styles.titleStep}>הוספת תמונות</Text>
            <ScrollView horizontal>
              {images.length < 3 && (
                <>
                  <TouchableOpacity onPress={handleAddImage}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require("../D1-2-assets/icons/img.png")}
                        style={styles.iconGallery}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCameraImage}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require("../D1-2-assets/icons/Camera.png")}
                        style={styles.iconCamera}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={image} style={styles.thumbnail} />
                </View>
              ))}
            </ScrollView>
            <Text style={styles.subtitleStep}>עד 3 תמונות</Text>
          </View>
        </ScrollView>
      ),
    },
    {
      title: "סיכום קריאה",
      content: (
        <ScrollView contentContainerStyle={styles.stepContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>זימון שירותי מוסך</Text>
            <Text style={styles.subtitleStep}>
              לפניך פרטי הקריאה אנא בדוק שכל הפרטים נכונים לפני שליחה.
            </Text>
            <View style={styles.imgAndTextRow}>
              <Image
                source={require("../D1-2-assets/icons/Car.png")}
                style={styles.iconRow}
              />
              <Text style={styles.defaultText}>{details}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>תיאור / הערות</Text>
            <Text style={styles.subtitleStep}>{details}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>תמונות</Text>
            <ScrollView horizontal>
              {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={image} style={styles.thumbnail} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>דרישות נוספות</Text>
            <View style={styles.imgAndTextRow}>
              <Image
                source={require("../D1-2-assets/icons/Car.png")}
                style={styles.iconRow}
              />
              <Text style={styles.defaultText}>טיפול בתקלה ברכב</Text>
            </View>
            <View style={styles.imgAndTextRow}>
              <Image
                source={require("../D1-2-assets/icons/Car.png")}
                style={styles.iconRow}
              />
              <Text style={styles.defaultText}>טיפול בתקלה ברכב</Text>
            </View>
            <View style={styles.imgAndTextRow}>
              <Image
                source={require("../D1-2-assets/icons/Other.png")}
                style={styles.iconRow}
              />
              <Text style={styles.defaultText}>אחר</Text>
              <Text style={styles.defaultText}>{moreDetails}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>תמונות</Text>
            <ScrollView horizontal>
              {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={image} style={styles.thumbnail} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleStep}>פרטים כללים</Text>
            <View style={styles.imgAndTextRow}>
              <View style={styles.imgCircle}>
                <Image
                  source={require("../D1-2-assets/icons/CarB.png")}
                  style={styles.iconDemand}
                />
              </View>
              <Text style={styles.defaultText}>{}</Text>
              <Text style={styles.defaultText}>{}</Text>
            </View>
            <View style={styles.imgAndTextRow}>
              <View style={styles.imgCircle}>
                <Image
                  source={require("../D1-2-assets/icons/locationB.png")}
                  style={styles.iconDemand}
                />
              </View>
              <Text style={styles.defaultText}>נקודות איסוף והחזרה</Text>
              <Text style={styles.defaultText}>{selectedLocation}</Text>
            </View>
            <View style={styles.imgAndTextRow}>
              <View style={styles.imgCircle}>
                <Image
                  source={require("../D1-2-assets/icons/CalendarB.png")}
                  style={styles.iconDemand}
                />
              </View>
              <Text style={styles.defaultText}>מועד טיפול</Text>
              <Text style={styles.defaultText}>{selectedDate}</Text>
            </View>
          </View>
          <View style={styles.warning}>
            <View style={styles.awrningCircle}>
              <Image
                source={require("../D1-2-assets/icons/warningB.png")}
                style={styles.awrningIcon}
              />
            </View>
            <View style={styles.warningMessage}>
              <Text style={styles.titleStep}>לידיעתך</Text>
              <Text style={styles.defaultText}>
                יום לפני המועד המבוקש תשלח הודעת תזכורת למכשירך.
              </Text>
            </View>
          </View>
          <GradientButton
            onPress={() => setModalVisible(true)}
            text="אישור ושליחה"
          />
        </ScrollView>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <ServiceHeader
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
        handleClose={handleClose}
        title={steps[step].title}
      />
      {steps[step].content}
      <ServiceCenterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  submitButton: {
    backgroundColor: "#E8585E",
    paddingVertical: Dimensions.get("window").width * 0.02,
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    borderRadius: Dimensions.get("window").width * 0.05,
    marginTop: Dimensions.get("window").width * 0.02,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: Dimensions.get("window").width * 0.04,
  },
  stepContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: windowWidth * 0.05,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: windowWidth * 0.08,
    borderTopRightRadius: windowWidth * 0.08,
  },
  textContainer: {
    alignItems: "flex-end",
    width: "90%",
    margin: windowHeight * 0.01,
  },
  titleStep: {
    color: "#000",
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  subtitleStep: {
    color: "#68677E",
    fontSize: windowWidth * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  defaultText: {
    color: "#000",
  },
  iconCover: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.5,
    marginBottom: windowHeight * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E2",
    textAlign: "center",
    borderRadius: windowWidth * 0.02,
    padding: windowWidth * 0.03,
    width: "70%",
    margin: windowHeight * 0.02,
    color: "#000",
    backgroundColor: "#fff",
  },
  inputFocused: {
    borderColor: "#5064EB",
  },
  placeholderTextColor: {
    color: "#68677E",
  },
  button: {
    backgroundColor: "#E8585E",
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    borderRadius: windowWidth * 0.05,
    marginTop: windowWidth * 0.02,
  },
  buttonText: {
    color: "#fff",
    fontSize: windowWidth * 0.04,
  },
  coverCar: {
    margin: windowWidth * 0.1,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
  addImagesContainer: {
    alignItems: "flex-end",
    width: "90%",
    margin: windowHeight * 0.01,
  },
  iconGallery: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  iconCamera: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  imageContainer: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.35,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#E0E0E2",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  iconRow: {
    width: windowHeight * 0.06,
    height: windowHeight * 0.06,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  serviceButton: {
    flex: 1,
    minWidth: "40%",
    marginBottom: windowHeight * 0.01,
  },
  imgAndTextRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "55%",
  },
  imgCircle: {
    marginVertical: windowWidth * 0.01,
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    backgroundColor: "#DDDCE1",
    borderRadius: windowWidth * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconDemand: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  warning: {
    margin: windowHeight * 0.04,
    padding: windowHeight * 0.02,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "95%",
    backgroundColor: "#F5EFDD",
    borderRadius: windowWidth * 0.05,
  },
  warningMessage: {
    width: "80%",
  },
  awrningCircle: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    backgroundColor: "#F4BC00",
    borderRadius: windowWidth * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  awrningIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },
  dateButton: {
    backgroundColor: "#5064EB",
    padding: windowHeight * 0.02,
    borderRadius: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
  },
  dateButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: windowWidth * 0.04,
  },
  selectedDateText: {
    marginTop: windowHeight * 0.02,
    color: "#000",
    fontSize: windowWidth * 0.04,
  },
  inputContainer: {
    width: "100%",
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.02,
    position: "relative",
  },
  floatingLabel: {
    position: "absolute",
    top: -windowHeight * 0.015,
    right: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    fontSize: windowWidth * 0.035,
    color: "#68677E",
    zIndex: 1,
  },
  inputLeb: {
    borderWidth: 1,
    borderColor: "#E0E0E2",
    textAlign: "right",
    borderRadius: windowWidth * 0.02,
    padding: windowWidth * 0.03,
    width: "100%",
    backgroundColor: "#fff",
    minHeight: windowHeight * 0.08,
    paddingTop: windowHeight * 0.02,
    color: "#000",
  },
});

export default ServiceCenterWizard;
