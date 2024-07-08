import React, { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { BaseView, BodyBaseView } from "../../uiKit/BaseView.js";
import { Header } from "../../uiKit/Header";
import { Buttons } from "./components/Buttons";

const TimerScreen = ({ navigation }) => {
  // remove navigation for class
  const [isOn, setIsOn] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOn) setCounter((preState) => preState + 1);
    }, 1000);

    return () => clearTimeout(timer); // read about
  }, [counter, isOn]);

  return (
    <BaseView>
      <Button
        onPress={() => navigation.navigate("HomeStack")} // HomeStack
        title="Go to Home"
      />
      <Header />
      <BodyBaseView style={{ alignItems: "center" }}>
        <View style={styles.timerContainer}>
          <View style={styles.timerDisplay}>
            <Text style={styles.timerText}>{counter}</Text>
          </View>
        </View>
        <Buttons isOn={isOn} setIsOn={setIsOn} onReset={() => setCounter(0)} />
      </BodyBaseView>
    </BaseView>
  );
};

export default TimerScreen;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  timerContainer: {
    flex: 6,
    justifyContent: "center",
    backgroundColor: "black",
  },
  timerText: {
    fontSize: 80,
  },
  timerDisplay: {
    alignSelf: "center",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    height: windowWidth * 0.8,
    width: windowWidth * 0.8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
  },
});
