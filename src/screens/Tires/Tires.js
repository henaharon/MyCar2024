import React, { useState } from "react";
import { View, Text, Image, Modal, StyleSheet } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import ModalButton from "./components/modalButton";

const loadingIcon = require("../../assets/f1_icons/loading_icon.png");

const texts = {
  bodyTitele: "זקוקים לשירות צמיגים?",
  bodyDesc:
    "הסבר/נוהל תיקון פנצר וטיפול בצמיגים. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף.",
  howToHelp: "איך אפשר לעזור?",
  howToHelpDec: "אנא בחר שירות",
  modalLoadingTitele: "מתחבר לצ'אט...",
  modalLoadingDec: "מיד תחוברו לשיחת צ'אט עם נציג שירות.",
};

const Tires = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cancelNavigation, setCancelNavigation] = useState(false);

  const contactChat = () => {
    if (cancelNavigation) {
      setCancelNavigation(false);
      return;
    }

    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      navigation.navigate("RoadsideAssistance");
    }, 2000);
  };

  return (
    <View style={styles.tiresContainer}>
      <Header navigation={navigation} />
      <View style={styles.bodyContainer}>
        <View style={styles.allText}>
          <Text style={styles.bodyTiteleText}>{texts.bodyTitele}</Text>
          <Text style={styles.bodyDescText}>{texts.bodyDesc}</Text>
          <View style={styles.stick} />
          <View>
            <Text style={styles.howToHelpText}>{texts.howToHelp}</Text>
            <Text style={styles.howToHelpDecText}>{texts.howToHelpDec}</Text>
          </View>
        </View>
      </View>
      <Buttons
        navigation={navigation}
        setIsVisible={setIsVisible}
        setCancelNavigation={setCancelNavigation}
        contactChat={contactChat}
      />
      <Modal visible={isVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={loadingIcon} style={styles.modalLoadingIcon} />
          <View>
            <Text style={styles.modalLoadingTiteleText}>
              {texts.modalLoadingTitele}
            </Text>
            <Text style={styles.modalLoadingDecText}>
              {texts.modalLoadingDec}
            </Text>
          </View>
        </View>
        <ModalButton
          setIsVisible={setIsVisible}
          setCancelNavigation={setCancelNavigation}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  tiresContainer: { flex: 1, backgroundColor: "white" },
  bodyContainer: {
    flex: 2,
    top: -15,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  allText: {
    alignItems: "flex-end",
    width: "90%",
    top: 22,
  },
  bodyTiteleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  bodyDescText: {
    fontSize: 16,
    marginBottom: 25,
    color: "black",
  },
  stick: {
    width: "90%",
    height: 1,
    backgroundColor: "rgba(169, 169, 169, 0.6)",
  },
  howToHelpText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
    top: 20,
  },
  howToHelpDecText: {
    fontSize: 16,
    marginBottom: 16,
    color: "black",
    top: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    height: 370,
    width: 300,
    alignSelf: "center",
    top: 175,
    borderRadius: 25,
  },
  modalLoadingIcon: {
    width: 100,
    height: 100,
    marginBottom: 8,
    top: 50,
    alignItems: "center",
    alignSelf: "center",
  },
  modalLoadingTiteleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    alignItems: "center",
    alignSelf: "center",
    top: 60,
  },
  modalLoadingDecText: {
    fontSize: 16,
    marginBottom: 25,
    top: 60,
    color: "black",
    alignSelf: "center",
    width: "80%",
    textAlign: "center",
  },
});

export default Tires;
