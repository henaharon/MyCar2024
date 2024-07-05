import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import verticalThreeDotsIcon from "../../assets/icons/dots_vertical_icon_152854.webp";
import XButtonIcon from "../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png";
import carWashIcon from "../../assets/icons/elementsServiceIconsCar.png";
import OpenCarTicketItem from "./compenents/OpenCarTicketItem";

const OpenCarTicket = () => {
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
    <View style={styles.container}>
      <LinearGradient colors={["#05AC2F", "#05AC2F"]} style={styles.header}>
        <View style={styles.headerTopRow}>
          <Pressable style={styles.iconButton} onPress={() => navigation.navigate('o5TicketCancel')}>
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
          <Pressable style={styles.moreDetailsButton} onPress={() => navigation.navigate('TicketInfo')}>
            <Text style={styles.moreDetailsButtonText}>פרטים נוספים</Text>
          </Pressable>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: "bold",
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
    marginBottom: 15,
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
});

export default OpenCarTicket;
