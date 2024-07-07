import React from "react";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import { BaseView, BodyBaseView } from "../../../../uiKit/BaseView";
import { GradientButton } from "../../components/GradientButton";
import { Input } from "../../components/Input";
import DateTimeInput from "../../components/DateTimeInput";

const pageTitle = "המסמך נשלח";
const paragraphs = ["דוח תאונת הדרכים נשלח בהצלחה", "OirS@gmail.com למייל"];
const buttonTitle = "אישור";

const SuccessScreen = ({navigation}) => {
  const handleSuccess = () => {
    navigation.navigate("AccidentReportIntro");
  }

  return (
      <BodyBaseView style={styles.pageContailer}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{pageTitle}</Text>
          <View style={styles.centerText}>
            <Text style={styles.confirmationText}>{paragraphs[0]}</Text>
            <Text style={styles.confirmationText}>{paragraphs[1]}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton title={buttonTitle} onPress={handleSuccess}/>
        </View>
      </BodyBaseView>
  );
};

export default SuccessScreen;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pageContailer:{
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: windowHeight * 0.11,
    zIndex: 2,
    gap: windowHeight * 0.05,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "900",
    color: "black",
  },
  confirmationText: {
    fontSize: 16,
    color: "black",
  },
  textContainer: {
    alignItems: "center",
    position: "relative",
    gap: windowHeight * 0.02,
  },
  buttonContainer: {
    position: "relative",
    alignItems: "center",
  },
  centerText: {
    alignItems: "center",
  },
});
