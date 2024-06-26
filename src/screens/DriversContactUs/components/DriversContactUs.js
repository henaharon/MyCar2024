import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

const DriversContactUs = ({navigation}) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    console.log("Close button pressed");
    navigation.goBack();
  };


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>תודה</Text>
              <Text style={styles.modalText}>הודעה נשלחה בהצלחה</Text>
              <LinearGradient
                colors={["#E60C73", "#FF7E5F"]}
                style={[styles.gradient, styles.modalButton]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                  <Text style={styles.buttonText}>אישור</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>צור קשר</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../../assets/images/Car.png")}
              />
            </View>
            <Text style={styles.mainText}>אנחנו כאן בשבילך!</Text>
            <Text style={styles.subText}>
              אנחנו מקפידים תמיד להעניק לך את השירות המקצועי והיעיל ביותר.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="נושא הפניה"
              value={subject}
              onChangeText={setSubject}
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="תוכן הפניה"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <LinearGradient
              colors={["#E60C73", "#FF7E5F"]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>שליחה</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    flex: 1,
    padding: 10,
  },
  closeButton: {
    padding: 10,
    position: "absolute",
    right: 10,
    top: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoContainer: {
    marginBottom: 0,
    borderColor: "#ccc",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  messageInput: {
    height: 200,
    textAlignVertical: "top",
  },
  button: {
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  gradient: {
    borderRadius: 25,
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
  modalButton: {
    marginTop: 20,
    width: 200,
  },
});

export default DriversContactUs;
