import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";

const backgroundShape = require("../../assets/images/backgorund3.png");
const backgroundShape1 = require("../../assets/images/backgroundShape1.png");
const carImage = require("../../assets/images/Car.png");
const sunImage = require("../../assets/images/sun.png");
const first = require("../../assets/images/f.png");
const second = require("../../assets/images/s.png");
const third = require("../../assets/images/t.png");
const forth = require("../../assets/images/forth.png");
const fith = require("../../assets/images/fith.png");
const six = require("../../assets/images/six.png");
const seven = require("../../assets/images/seven.png");
const Rental = require("../../assets/images/Rental.png");
const arrow = require("../../assets/images/arrow.png");
const cable = require("../../assets/images/cable.png");
const accedent = require("../../assets/images/accedent.png");
const menuIcon = require("../../assets/images/menu.png");

const texts = {
  serviceTitle: "קבלת שירות",
  serviceSubtitle: "בחרו שירות לרכב שלכם",
  services: [
    { title: "שטיפת רכב", image: first, navigateTo: "TimerScreen" },
    { title: "רכב חשמלי", image: second, navigateTo: "TimerScreen" },
    { title: "צמיגים ופנצריות", image: third, navigateTo: "TimerScreen" },
    { title: "אביזרים", image: forth, navigateTo: "TimerScreen" },
    { title: "זימון שירותי מוסך", image: fith, navigateTo: "TimerScreen" },
    { title: "תקלות בדרך", image: six, navigateTo: "SelectService" },
    { title: "צאט עם נציג", image: seven, navigateTo: "TimerScreen" },
  ],
  updatesTitle: "עדכונים וחדשות",
  campaignTitle: "כותרת הודעה / קמפיין",
  rental: "השאלת רכבים",
  emergency: "תאונות וחירום",
};

const DashedLine = () => {
  return (
    <View style={styles.dashedLineContainer}>
      <View style={styles.dashedLine} />
    </View>
  );
};

const ServiceList = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.horizontalScrollViewContent}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {texts.services.map((service, index) => (
        <Pressable
          onPress={() => navigation.navigate(service.navigateTo)}
          style={styles.box}
          key={index}
        >
          <Image source={service.image} style={styles.Listlogo} />
          <Text style={styles.name}>{service.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const CampainsList = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.horizontalScrollViewContent}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {[...Array(6)].map((_, index) => (
        <View style={styles.Sbox} key={index}>
          <Text style={styles.Secondname}>{texts.campaignTitle}</Text>
          <Image source={cable} style={styles.SecondListlogo} />
        </View>
      ))}
    </ScrollView>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground source={backgroundShape} style={styles.backgroundImage}>
        <Pressable
          onPress={() => navigation.openDrawer()} // open drawer
          style={styles.sideMenuButton}
        >
          <Image source={menuIcon} style={styles.menuIcon} />
        </Pressable>
        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>{texts.serviceTitle}</Text>
            <Text style={styles.text2}>{texts.serviceSubtitle}</Text>
          </View>
          <Image source={carImage} style={styles.carImage} />
          <ImageBackground
            source={backgroundShape1}
            style={styles.backgroundShape1}
          />
          <ServiceList navigation={navigation} />
          <DashedLine />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>{texts.updatesTitle}</Text>
          </View>
          <CampainsList />
          <DashedLine />
          <View style={styles.SbottomContainer}>
            <Image source={arrow} style={styles.logo} />
            <Text style={styles.SbottomText}>{texts.rental}</Text>
            <Image source={Rental} style={styles.Image} />
          </View>
          <DashedLine />
          <View style={styles.SbottomContainer}>
            <Image source={arrow} style={styles.logo} />
            <Text style={styles.SbottomText}>{texts.emergency}</Text>
            <Image source={accedent} style={styles.Image} />
          </View>
          <Image source={sunImage} style={styles.sun} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  horizontalScrollViewContent: {
    flexDirection: "row",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  sideMenuButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    width: "100%",
    top: 370,
    right: 20,
  },
  text1: {
    fontSize: 26,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    fontStyle: "italic",
  },
  backgroundShape1: {
    width: "70%",
    aspectRatio: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 290,
  },
  carImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  SboxContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  boxContainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  box: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: 0.4 * windowWidth,
    height: 0.4 * windowWidth,
    marginRight: 10,
    justifyContent: "center",
  },
  Sbox: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    height: 350,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  Listlogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  SecondListlogo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  Secondname: {
    marginTop: 5,
    fontSize: 16,
    width: "100%",
    fontWeight: "bold",
    color: "black",
    marginRight: 10,
  },
  dashedLineContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  dashedLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderStyle: "dashed",
  },
  bottomContainer: {
    width: "100%",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    marginVertical: 20,
  },
  bottomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginRight: 10,
  },
  SbottomContainer: {
    width: "95%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 20,
    height: 200,
    zIndex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
  },
  SbottomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-end",
    marginTop: -40,
  },
  sun: {
    width: 245,
    height: 245,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  Image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    bottom: 30,
  },
});

export default HomePage;
