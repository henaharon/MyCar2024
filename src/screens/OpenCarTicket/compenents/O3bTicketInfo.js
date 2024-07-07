import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import verticalThreeDotsIcon from "../../../assets/icons/dots_vertical_icon_152854.webp";
import XButtonIcon from "../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png";
import carWashIcon from "../../../assets/icons/elementsServiceIconsCar.png";
import OpenCarTicketItem from "./OpenCarTicketItem";

const O3bTicketInfo = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const ticketItems = [
    {
      date: "04.11.2022 - 15:32",
      type: "משוב",
      description: "נשמח לשמוע ממך על חווית השירות שלך",
      showFeedbackButton: true,
      isActive: true,
    },
    {
      date: "04.11.2022 - 15:32",
      type: "קריאה הושלמה",
      description: "קריאה טופלה בהצלחה",
      showFeedbackButton: false,
      isActive: false,
    },
    {
      date: "04.11.2022 - 15:32",
      type: "פנייה נקלטה",
      description: "קריאה התקבלה במרכז השירות",
      showFeedbackButton: false,
      isActive: false,
    },
    {
      date: "04.11.2022 - 15:32",
      type: "קריאה נוצרה",
      description: "קריאה חדשה נוצרה",
      showFeedbackButton: false,
      isActive: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <LinearGradient colors={["#05AC2F", "#05AC2F"]} style={styles.header}>
          <View style={styles.headerTopRow}>
            <Pressable
              style={styles.iconButton}
              onPress={() => navigation.navigate("o5TicketCancel")}
            >
              <Image source={verticalThreeDotsIcon} style={styles.leftIcon} />
            </Pressable>
            <Text style={styles.headerText}>קריאה פתוחה</Text>
            <Pressable style={styles.iconButton} onPress={handleGoBack}>
              <Image source={XButtonIcon} style={styles.rightIcon} />
            </Pressable>
          </View>

          <View style={styles.ticketInfo}>
            <Image source={carWashIcon} style={styles.ticketIcon} />
            <Text style={styles.ticketType}>טיפול בתקלה ברכב</Text>
            <Text style={styles.ticketNumber}>82225</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.infoSection}>
            <Text style={styles.additionalInfoTitle}>תיאור/הערות</Text>
            <Text style={styles.additionalInfoText}>
              החלון הקדמי ימני תקועה
            </Text>
            <Text style={styles.additionalInfoTitle}>תמונות</Text>
            <View style={styles.imagesContainer}>
              <Image
                source={require("../../../assets/images/car4.png")}
                style={styles.image}
                alt="car"
              />
              <Image
                source={require("../../../assets/images/car3.png")}
                style={styles.image}
                alt="car"
              />
              <Image
                source={require("../../../assets/images/car2.png")}
                style={styles.image}
                alt="car"
              />
              <Image
                source={require("../../../assets/images/car1.png")}
                alt="car"
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.line} />
          <Text style={styles.additionalInfoTitle2}>דרישות נוספות</Text>

          <View style={styles.container3}>
            <Text style={styles.text}>נורות</Text>
            <Image
              source={require("../../../assets/icons/lamp.png")}
              style={styles.lamp}
            />
          </View>

          <View style={styles.container3}>
            <Text style={styles.text}>בדיקת מזגן</Text>

            <Image
              source={require("../../../assets/icons/snow.png")}
              style={styles.snow}
            />
          </View>

          <View style={styles.container3}>
            <View>
              <Text style={styles.text}>אחר</Text>
              <Text style={styles.text}>
                אנא בדקו גם את הצמיגים הקדמיים ברכב
              </Text>
            </View>
            <Image
              source={require("../../../assets/icons/3dots.png")}
              style={styles.snow}
            />
          </View>

          <Text style={styles.additionalInfoTitle3}>תמונות</Text>

          <View style={styles.container4}>
            <Image
              source={require("../../../assets/images/car2.png")}
              style={styles.image2}
            />
            <Image
              source={require("../../../assets/images/car1.png")}
              style={styles.image2}
            />
          </View>

          <View style={styles.line} />

          <Text style={styles.additionalInfoTitle}>פרטים כללים</Text>

          <View style={styles.container3}>
            <View style={styles.textContainer3}>
              <Text style={styles.text1}>Hyundai IONIQ</Text>
              <Text style={styles.subText}>23 441 32</Text>
            </View>
            <Image
              source={require("../../../assets/icons/my_car.png")}
              style={styles.lamp}
            />
          </View>

          <View style={styles.container3}>
            <View style={styles.textContainer3}>
              <Text style={styles.text1}>נקודת איסוף והחזרה</Text>
              <Text style={styles.subText}>אמדוקס נצרת</Text>
            </View>
            <Image
              source={require("../../../assets/icons/elements24PxIconsPin.png")}
              style={styles.lamp}
            />
          </View>

          <View style={styles.container3}>
            <View style={styles.textContainer3}>
              <Text style={styles.text1}>מועד טיפול</Text>
              <Text style={styles.subText}>יום רביעי 21.06.2022</Text>
            </View>
            <Image
              source={require("../../../assets/icons/elementsServiceIconsRoutineService.png")}
              style={styles.lamp}
            />
          </View>
        </LinearGradient>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>סטטוס הקריאה</Text>
          <ScrollView contentContainerStyle={styles.statusList}>
            {ticketItems.map((item, index) => (
              <OpenCarTicketItem
                key={index}
                date={item.date}
                type={item.type}
                description={item.description}
                showFeedbackButton={item.showFeedbackButton}
                isActive={item.isActive}
                isFirst={index === 0}
                isLast={index === ticketItems.length - 1}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  iconButton: {
    padding: 5,
  },
  rightIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  ticketInfo: {
    alignItems: "center",
  },
  ticketIcon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  ticketType: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  ticketNumber: {
    fontSize: 18,
    color: "#65CD81",
    marginBottom: 20,
  },
  moreDetailsButton: {
    backgroundColor: "#7FD598",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  moreDetailsButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "right",
  },
  statusList: {
    paddingBottom: 20,
  },
  statusItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timelineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    marginRight: 10,
    marginTop: 5,
  },
  statusContent: {
    flex: 1,
  },
  statusDate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
    textAlign: "right",
  },
  statusType: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right",
  },
  statusDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "right",
  },
  responseButton: {
    backgroundColor: "#FFC107",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  responseButtonText: {
    color: "#000",
    fontWeight: "bold",
  },

  imagesContainer: {
    flexDirection: "row",
    marginBottom: 25,
    marginTop: 10,
    width: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",

    overflow: "hidden",
  },
  image: {
    width: 92,
    overflow: "hidden",
    height: 150,
    borderRadius: 5,
  },
  image2: {
    width: 100,
    overflow: "hidden",
    height: 140,
    marginRight: 5,
    marginBottom: 25,
    borderRadius: 5,
  },

  additionalInfoSection: {
    padding: 16,
  },
  additionalInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 28,
    marginBottom: 10,
  },
  additionalInfoTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 28,
    marginBottom: 10,
    marginTop: 15,
  },
  additionalInfoTitle3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 28,
    marginBottom: 10,
    marginTop: 20,
  },

  additionalInfoText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4,
    marginRight: 28,
    marginBottom: 20,
  },
  generalDetailsSection: {
    padding: 16,
  },
  generalDetailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  generalDetailsText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  statusSection: {
    padding: 16,
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statusText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  line: {
    height: 1.4,
    backgroundColor: "#726E6D",
    color: "#000", // Adjust the color as needed
    width: "85%",
    margin: "auto",
    fontWeight: "bold",
    marginVertical: 5,
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "column",
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#05AC2F",
    padding: 10,
    borderRadius: 5,
  },
  container4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#05AC2F",
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  lamp: {
    width: 40,
    height: 69,
    marginLeft: 20,
    marginRight: 30,
    backgroundColor: "#34A853",
  },
  snow: {
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 30,
    backgroundColor: "#34A853",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
  },
});

export default O3bTicketInfo;
