import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import GeneralDetail from "./components/GeneralDetail";
import FeedbackWindow from "./components/FeedbackWindow";
import ConfirmMessage from "./components/ConfirmMessage";

const ClosedTicketsInfo = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSendFeedback = () => {
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = () => {
    setShowFeedback(false);
    setShowConfirmMessage(true);
  };

  const handleCloseConfirmMessage = () => {
    setShowConfirmMessage(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperWrapper}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconLeft}>
            <Image
              source={require("../../assets/O1-assets/three-points.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>קריאה סגורה</Text>
          <TouchableOpacity style={styles.iconRight}>
            <Image
              source={require("../../assets/O1-assets/componentsNavBarXButtonsRoundedWhiteAlpha@.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Vehicle Info */}
        <View style={styles.vehicleInfo}>
          <Image
            source={require("../../assets/O1-assets/elementsServiceIconsCar.png")}
            style={styles.vehicleIcon}
          />
          <Text style={styles.vehicleText}>שטיפת רכב</Text>
          <Text style={styles.vehicleNumber}>82225</Text>
        </View>

        {/* More Info Button */}
        <TouchableOpacity
          style={styles.moreInfoButton}
          onPress={handleToggleDetails}
        >
          <Text style={styles.moreInfoText}>הצג פרטים נוספים</Text>
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View style={styles.additionalDetails}>
          <View style={styles.CommentsImagesSection}>
            <Text style={styles.sectionTitle}>הערות</Text>
            <Text style={styles.notesText}>אנא נקו גם את המושבים.</Text>

            <Text style={styles.sectionTitle}>תמונות</Text>
            <View style={styles.imagesContainer}>
              <Image
                source={{
                  uri: "../../assets/O1-assets/elementsServiceIconsCar.png",
                }}
                style={styles.detailImage}
              />
              <Image
                source={{
                  uri: "../../assets/O1-assets/elementsServiceIconsCar.png",
                }}
                style={styles.detailImage}
              />
            </View>
          </View>

          <View style={styles.generalDetails}>
            <Text style={styles.sectionTitle}>פרטים כללים</Text>

            <GeneralDetail
              iconSource={require("../../assets/O1-assets/locationIcon.png")}
              status="אתר שטיפה"
              description="אמדוקס נצרת"
            />
            <GeneralDetail
              iconSource={require("../../assets/O1-assets/parkingIcon.png")}
              status="פרטי חניון"
              description=" חניון בניין אורן, קומה -1 "
            />
            <GeneralDetail
              iconSource={require("../../assets/O1-assets/keyIcon.png")}
              status="מיקום המפתח"
              description="אצל מחלקת הרכב"
            />
            <GeneralDetail
              iconSource={require("../../assets/O1-assets/-lock-.png")}
              status="קוד הנעה"
              description="#1314"
            />
            <GeneralDetail
              iconSource={require("../../assets/O1-assets/stopwatch.png")}
              status="מועד החזרת רכב"
              description="17:00"
            />
          </View>

          <View style={styles.importantToKnowSection}></View>
          <Text style={styles.sectionTitle}>חשוב לדעת</Text>

          <GeneralDetail
            iconSource={require("../../assets/O1-assets/yellow-shekel.png")}
            status="Status 3"
            description="Description 3"
          />
          <GeneralDetail
            iconSource={require("../../assets/O1-assets/info-icon.png")}
            status="Status 3"
            description="Description 3"
          />
        </View>
      )}

      {/* Status Timeline */}
      <View style={styles.timelineContainer}>
        <Text style={styles.timelineTitle}>סטטוס הקריאה</Text>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineLine} />
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>משוב</Text>
            <Text style={styles.timelineDescription}>
              נשמח לשמוע ממך על חווית השירות שלך
            </Text>
            <TouchableOpacity style={styles.timelineStatusButton} onPress={handleSendFeedback}>
              <Text style={styles.timelineStatusButtonText}>send feed back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timelineDotActive} />
        </View>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>קריאה הושלמה</Text>
            <Text style={styles.timelineDescription}>קריאה טופלה בהצלחה</Text>
          </View>
          <View style={styles.timelineDot} />
          <View style={styles.timelineLine} />
        </View>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>פנייה נקלטה</Text>
            <Text style={styles.timelineDescription}>
              קריאה התקבלה במרכז שירות
            </Text>
          </View>

          <View style={styles.timelineDot} />
          <View style={styles.timelineLine} />
        </View>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>קריאה נוצרה</Text>
            <Text style={styles.timelineDescription}>קריאה חדשה נוצרה</Text>
          </View>
          <View style={styles.timelineDot} />
        </View>
      </View>

      {showFeedback && (
        <FeedbackWindow onSubmit={handleFeedbackSubmit} />
      )}

      {showConfirmMessage && (
        <ConfirmMessage onClose={handleCloseConfirmMessage} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconLeft: {
    position: "absolute",
    left: 10,
    height: "20%",
    width: "10%",
  },
  iconRight: {
    position: "absolute",
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  vehicleInfo: {
    alignItems: "center",
    paddingVertical: 20,
  },
  vehicleIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  vehicleNumber: {
    fontSize: 16,
    color: "#666",
  },
  moreInfoButton: {
    alignSelf: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  moreInfoText: {
    fontSize: 16,
    color: "#333",
  },
  additionalDetails: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notesText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  detailImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  generalDetails: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: "row",
    textAlign: "right", // Align text to the right
    alignItems: "right",
    alignSelf: "right",
    alignContent: "right",
    marginBottom: 40,
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    textAlign: "right", // Align text to the right
    alignItems: "right",
    alignSelf: "right",
    alignContent: "right",
  },
  detailItemStatus: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right", // Align text to the right
    marginRight: 10, // Adjust as needed for spacing
  },
  detailItemDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "right", // Align text to the right
  },

  detailItemContent: {
    textAlign: "right", // Align text to the right
    alignItems: "right",
    alignSelf: "right",
    alignContent: "right",
  },
  timelineContainer: {
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    height: "100%",
  },
  timelineTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
    font: "#000000",
    fontSize: 30,
    marginBottom: 40,
  },
  timelineDot: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#ccc",
    marginLeft: 20,
  },
  timelineDotActive: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#89CFF0",
    marginLeft: 20,
  },

  timelineLine: {
    position: "absolute",
    width: 1,
    top: 96, // Adjust this value to position the line vertically
    bottom: -80, // Adjust this value to extend the line to the bottom
    right: 35, // Adjust this value to position the line correctly
    zIndex: 0, // Ensure the line is below the dots
    borderWidth: 5,
    borderColor: "#ccc",
  },

  timelineContent: {
    flex: 1,
  },
  timelineDate: {
    fontSize: 18,
    color: "#999",
    marginBottom: 5,
    textAlign: "left", // Adjust text alignment to right
  },
  timelineStatus: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right", // Adjust text alignment to right
  },
  timelineDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "right", // Adjust text alignment to right
  },

  timelineStatusButton: {
    backgroundColor: "#ffcc00",
    borderRadius: 20,
    alignSelf: "flex-start",
    alignItems: "center",

    font: "#000000",
    width: "80%",
  },
  timelineStatusButtonText: {
    fontSize: 22,
    fontWeight: "bold",

    color: "#000000",
  },
});

export default ClosedTicketsInfo;
