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
import verticalThreeDotsIcon from "../../../assets/icons/verticalThreeDots.png";
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
        </View>
        <View style={styles.line} />

        <View style={styles.infoSection}>
        <Text style={styles.additionalInfoTitle}>תיאור/הערות</Text>
        <Text style={styles.additionalInfoText}>החלון הקדמי ימני תקועה</Text>
        <Text style={styles.additionalInfoTitle}>תמונות</Text>
        <View style={styles.imagesContainer}>
          <Image source={require('../../../assets/images/react1.jpeg')} style={styles.image} />
          <Image source={require('../../../assets/images/react2.jpeg')} style={styles.image} />
          <Image source={require('../../../assets/images/react3.jpeg')} style={styles.image} />
          <Image source={require('../../../assets/images/react4.jpeg')} style={styles.image} />
        </View>
      </View>
      <View style={styles.line} />
      <Text style={styles.additionalInfoTitle}>דרישות נוספות</Text>
                
      <View style={styles.container3}>
      <Text style={styles.text}>נורות</Text>
      <Image source={require('../../../assets/icons/lamp.jpeg')} style={styles.icon} />
    </View>         

    <View style={styles.container3}>
      <Text style={styles.text}>בדיקת מזגן</Text>
      
      <Image source={require('../../../assets/icons/ac.webp')} style={styles.icon} />
    </View> 



    <View style={styles.container3}>
      <Text style={styles.text}>אחר</Text>
      <Image source={require('../../../assets/icons/dots.png')} style={styles.icon} />
      
    </View> 

    <Text style={styles.subText}>אנא בדקו גם את הצמיגים הקדמיים ברכב</Text>
    
    <Text style={styles.additionalInfoTitle}>תמונות</Text>


    <View style={styles.container3}>
          <Image source={require('../../../assets/images/react4.jpeg')} style={styles.image} />
          <Image source={require('../../../assets/images/react5.jpeg')} style={styles.image} />
        </View>

    <View style={styles.line} />

    <Text style={styles.additionalInfoTitle}>פרטים כללים</Text>
      

    <View style={styles.container3}>
      <View style={styles.textContainer3}>
        <Text style={styles.text1}>Hyundai IONIQ</Text>
         <Text style={styles.subText}>23 441 32</Text>
      </View>
      <Image source={require('../../../assets/icons/my_car.png')} style={styles.icon} />
    </View>


    <View style={styles.container3}>
      <View style={styles.textContainer3}>
        <Text style={styles.text1}>נקודת איסוף והחזרה</Text>
         <Text style={styles.subText}>אמדוקס נצרת</Text>
      </View>
      <Image source={require('../../../assets/icons/elements24PxIconsPin.png')} style={styles.icon} />
    </View>



    <View style={styles.container3}>
      <View style={styles.textContainer3}>
        <Text style={styles.text1}>מועד טיפול</Text>
         <Text style={styles.subText}>יום רביעי 21.06.2022</Text>
      </View>
      <Image source={require('../../../assets/icons/elementsServiceIconsRoutineService.png')} style={styles.icon} />
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



  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 10,

  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  additionalInfoSection: {
    padding: 16,
  },
  additionalInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin:15
  },
  additionalInfoText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
    margin:15
  },
  generalDetailsSection: {
    padding: 16,
  },
  generalDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  generalDetailsText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  statusSection: {
    padding: 16,
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  line: {
    height: 2,
    backgroundColor: '#BDBDBD', // Adjust the color as needed
    shadowColor: '#34a853', // Same color as the line for shadow effect
    shadowOffset: { width: 0, height: 3 },
    width:'80%',
    margin:"auto",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
    display:"flex",
    justifyContent:"center"
  },
  textContainer: {
    flexDirection: 'column',
  },
  container2: {
    display:"flex",
    justifyContent:"center",
    alignContent:"center"
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 8,
    backgroundColor: '#34A853',
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
  },
});

export default O3bTicketInfo;
