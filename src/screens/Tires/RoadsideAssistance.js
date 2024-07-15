import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const closeIcon = require("../../assets/f1_icons/close_icon.png");
const useIcon = require("../../assets/f1_icons/user_icon.png");
const headphoneIcon = require("../../assets/f1_icons/headphone_icon.png");
const image = require("../../assets/f1_icons/image.png");
const sendIcon = require("../../assets/f1_icons/send_icon.png");
const imageIcon = require("../../assets/f1_icons/image_icon.png");

const texts = {
  headerTitle: "צ'אט",
  bodyDate: "חמישי 21 אוקטובר",
  message1:
    "היי, שמי דן רונן ואני צריך שירות עבור הרכב שלי. אני ברחוב הראשי 123, תל אביב, 92109. אני זמין ב0524341191",
  message1time: "10:01",
  message2: "היי דן,\nאין בעיה בטיפול.",
  message2time: "10:22",
  message3: "😃 תודה רבה !",
  message3time: "10:22",
  message4:
    "היי דן זה תזכורת אוטומטית  עבור הפגישה הקרובה שלך\nמתי: יום שלישי 5 במאי 16:30\nטק: ג'ו אם יש לך עדכונים אנא\nפנה אלינו ב 800-555-5555 או השב להודעה זו",
  message4time: "11:30",
  message: "תוכן הודעה",
};

const RoadsideAssistance = ({ navigation }) => {
  return (
    <View style={{ flex: 2, backgroundColor: "black" }}>
      <Text style={styles.headerTitle}>{texts.headerTitle}</Text>
      <TouchableOpacity
        style={styles.goBackButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={closeIcon} style={styles.goBackButtonIcon} />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyDate}>{texts.bodyDate}</Text>
        <View>
          <Image source={useIcon} style={styles.useIcon1} />
          <Text style={styles.message1}>{texts.message1}</Text>
          <Text style={styles.message1time}>{texts.message1time}</Text>
        </View>
        <View>
          <Image source={headphoneIcon} style={styles.headphoneIcon1} />
          <Text style={styles.message2}>{texts.message2}</Text>
          <Text style={styles.message2time}>{texts.message2time}</Text>
        </View>
        <View>
          <Image source={useIcon} style={styles.useIcon2} />
          <Text style={styles.message3}>{texts.message3}</Text>
          <Text style={styles.message3time}>{texts.message3time}</Text>
        </View>
        <View>
          <Image source={headphoneIcon} style={styles.headphoneIcon2} />
          <Text style={styles.message4}>{texts.message4}</Text>
          <Text style={styles.message4time}>{texts.message4time}</Text>
        </View>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.writeContainer}>
          <View style={styles.write}>
            <Image source={imageIcon} style={styles.imageIcon} />
            <Text style={styles.message}>{texts.message}</Text>
          </View>
          <Image source={sendIcon} style={styles.sendIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    color: "white",
    backgroundColor: "black",
    top: 5,
  },
  goBackButtonContainer: { position: "absolute", top: 30, right: 20 },
  goBackButtonIcon: { width: 35, height: 35 },
  bodyContainer: {
    flex: 2,
    backgroundColor: "white",
    top: 30,
    borderRadius: 25,
  },
  bodyDate: {
    textAlign: "center",
    top: 20,
    color: "rgba(169, 169, 169, 0.6)",
  },
  useIcon1: {
    width: 30,
    height: 30,
    top: 120,
    left: 330,
  },
  message1: {
    fontSize: 16,
    marginBottom: 25,
    color: "white",
    backgroundColor: "#FF7777",
    width: "60%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    padding: 12,
    left: 90,
    top: 10,
  },
  message1time: {
    left: 290,
    top: -12,
    color: "rgba(169, 169, 169, 0.6)",
  },
  headphoneIcon1: {
    width: 30,
    height: 30,
    top: 35,
    left: 30,
  },
  message2: {
    fontSize: 16,
    marginBottom: 25,
    color: "black",
    backgroundColor: "#FFEEEE",
    width: "35%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    padding: 12,
    left: 65,
    top: -30,
  },
  message2time: {
    left: 65,
    top: -52,
    color: "rgba(169, 169, 169, 0.6)",
  },
  useIcon2: {
    width: 30,
    height: 30,
    top: -23,
    left: 330,
  },
  message3: {
    fontSize: 16,
    marginBottom: 25,
    color: "white",
    backgroundColor: "#FF7777",
    width: "40%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    padding: 12,
    left: 169,
    top: -70,
  },
  message3time: {
    left: 290,
    top: -92,
    color: "rgba(169, 169, 169, 0.6)",
  },
  headphoneIcon2: {
    width: 30,
    height: 30,
    top: 53,
    left: 30,
  },
  message4: {
    fontSize: 16,
    marginBottom: 25,
    color: "black",
    backgroundColor: "#FFEEEE",
    width: "60%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    padding: 12,
    left: 65,
    top: -100,
  },
  message4time: {
    left: 65,
    top: -120,
    color: "rgba(169, 169, 169, 0.6)",
  },
  image: {
    width: 250,
    height: 150,
    left: 80,
    top: -100,
    borderRadius: 25,
  },
  writeContainer: {
    width: 400,
    height: 400,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    top: -240,
    borderWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.6)",
    alignItems: "center",
  },
  write: {
    backgroundColor: "white",
    width: 300,
    height: 45,
    left: 20,
    top: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.6)",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageIcon: {
    width: 35,
    height: 35,
    top: 5,
    left: -120,
  },
  sendIcon: {
    top: -40,
    width: 45,
    height: 45,
    left: -165,
  },
  message: {
    top: -25,
    left: 100,
  },
});

export default RoadsideAssistance;
