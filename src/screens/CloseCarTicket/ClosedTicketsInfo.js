import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import GeneralDetail from './components/GeneralDetail';
import FeedbackWindow from './components/FeedbackWindow';
import ConfirmMessage from './components/ConfirmMessage';

const ClosedTicketsInfo = ({ navigation }) => {
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
              source={require('../../assets/O1-assets/three-points.png')}
              style={styles.threeDots}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>קריאה סגורה</Text>
          <TouchableOpacity style={styles.iconRight}>
            <Image
              source={require('../../assets/O1-assets/componentsNavBarXButtonsRoundedWhiteAlpha@.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Vehicle Info */}
        <View style={styles.vehicleInfo}>
          <Image
            source={require('../../assets/O1-assets/elementsServiceIconsCar.png')}
            style={styles.vehicleIcon}
          />
          <Text style={styles.vehicleText}>שטיפת רכב</Text>
          <Text style={styles.vehicleNumber}>82225</Text>
        </View>

        {/* More Info Button */}
        <View>
          {!showDetails && (
            <TouchableOpacity
              style={styles.moreInfoButton}
              onPress={handleToggleDetails}
            >
              <Text style={styles.moreInfoText}>הצג פרטים נוספים</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {showDetails && (
        <View style={styles.additionalDetails}>
          <View style={styles.CommentsImagesSection}>
            <Text style={styles.sectionTitle}>הערות</Text>
            <Text style={styles.notesText}>אנא נקו גם את המושבים.</Text>

            <Text style={styles.sectionTitle}>תמונות</Text>
            <View style={styles.imagesContainer}>
              <Image
                source={require('../../assets/O1-assets/car1Im.jpg')}
                style={styles.detailImage}
              />
              <Image
                source={require('../../assets/O1-assets/car2Im.jpg')}
                style={styles.detailImage}
              />
            </View>
          </View>

          <View style={styles.generalDetails}>
            <Text style={styles.sectionTitle}>פרטים כללים</Text>

            <GeneralDetail
              iconSource={require('../../assets/O1-assets/locationIcon.png')}
              status="אתר שטיפה"
              description="אמדוקס נצרת"
            />
            <GeneralDetail
              iconSource={require('../../assets/O1-assets/parkingIcon.png')}
              status="פרטי חניון"
              description=" חניון בניין אורן, קומה -1 "
            />
            <GeneralDetail
              iconSource={require('../../assets/O1-assets/keyIcon.png')}
              status="מיקום המפתח"
              description="אצל מחלקת הרכב"
            />
            <GeneralDetail
              iconSource={require('../../assets/O1-assets/-lock-.png')}
              status="קוד הנעה"
              description="#1314"
            />
            <GeneralDetail
              iconSource={require('../../assets/O1-assets/stopwatch.png')}
              status="מועד החזרת רכב"
              description="17:00"
            />
          </View>

          <View style={styles.importantToKnowSection}></View>
          <Text style={styles.sectionTitle}>חשוב לדעת</Text>

          <GeneralDetail
            iconSource={require('../../assets/O1-assets/yellow-shekel.png')}
            status="Status 3"
            description="Description 3"
          />
          <GeneralDetail
            iconSource={require('../../assets/O1-assets/info-icon.png')}
            status="Status 3"
            description="Description 3"
          />
          <View>
            {showDetails && (
              <TouchableOpacity
                style={styles.moreInfoButton}
                onPress={handleToggleDetails}
              >
                <Text style={styles.moreInfoText}>הצג פחות פרטים</Text>
              </TouchableOpacity>
            )}
          </View>
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
            <TouchableOpacity
              style={styles.timelineStatusButton}
              onPress={handleSendFeedback}
            >
              <Text style={styles.timelineStatusButtonText}>שליחת משוב</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timelineDot}>
            <View style={styles.timelineDotActive} />
          </View>
        </View>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>קריאה הושלמה</Text>
            <Text style={styles.timelineDescription}>קריאה טופלה בהצלחה</Text>
          </View>
          <View style={styles.timelineDot}>
            <View style={styles.timelineDotNotActive} />
          </View>
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

          <View style={styles.timelineDot}>
            <View style={styles.timelineDotNotActive} />
          </View>
          <View style={styles.timelineLine} />
        </View>

        {/* Timeline Item */}
        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineDate}>04.11.2022 - 15:32</Text>
            <Text style={styles.timelineStatus}>קריאה נוצרה</Text>
            <Text style={styles.timelineDescription}>קריאה חדשה נוצרה</Text>
          </View>
          <View style={styles.timelineDot}>
            <View style={styles.timelineDotNotActive} />
          </View>
        </View>
      </View>

      {showFeedback && <FeedbackWindow onSubmit={handleFeedbackSubmit} />}

      {showConfirmMessage && (
        <ConfirmMessage onClose={handleCloseConfirmMessage} />
      )}
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
    height: '20%',
    width: '10%',
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.04,
    marginTop: 5,
  },
  threeDots: {
    width: windowWidth * 0.026,
    height: windowHeight * 0.045,
  },
  vehicleInfo: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1, // Adjust the width as needed
    borderBottomColor: 'gray',
    marginBottom: 15,
    marginHorizontal: 20, // Adjust to make the line shorter on both sides
  },
  vehicleIcon: {
    width: windowWidth * 0.12,
    height: windowHeight * 0.07,
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vehicleNumber: {
    fontSize: 16,
    color: '#666',
  },
  moreInfoButton: {
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  CommentsImagesSection: {
    borderBottomWidth: 0.3, // Adjust the width as needed
    borderBottomColor: 'gray',
    marginBottom: 15,
    marginHorizontal: 20, // Adjust to make the line shorter on both sides
  },
  moreInfoText: {
    fontSize: 16,
    color: '#333',
  },
  additionalDetails: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notesText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row-reverse',
    width: '60%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  detailImage: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.2,
    borderRadius: 10,
  },
  generalDetails: {
    marginBottom: 20,
    borderBottomWidth: 0.3, // Adjust the width as needed
    borderBottomColor: 'gray',
    marginBottom: 15,
    marginHorizontal: 20, // Adjust to make the line shorter on both sides
  },
  detailItem: {
    flexDirection: 'row',
    textAlign: 'right', // Align text to the right
    alignItems: 'right',
    alignSelf: 'right',
    alignContent: 'right',
    marginBottom: 40,
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right', // Align text to the right
    alignItems: 'right',
    alignSelf: 'right',
    alignContent: 'right',
  },
  detailItemStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right', // Align text to the right
    marginRight: 10, // Adjust as needed for spacing
  },
  detailItemDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right', // Align text to the right
  },

  detailItemContent: {
    textAlign: 'right', // Align text to the right
    alignItems: 'right',
    alignSelf: 'right',
    alignContent: 'right',
  },
  timelineContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    height: '100%',
  },
  timelineTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    font: '#000000',
    fontSize: 30,
    marginBottom: 40,
  },
  timelineDot: {
    marginTop: 30,
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,

    borderRadius: 50,
    borderWidth: 15,
    borderColor: '#ccc',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineDotActive: {
    width: '80%',
    height: '80%',
    borderRadius: 40,
    backgroundColor: 'blue',
  },
  timelineDotNotActive: {
    width: '80%',
    height: '80%',
    borderRadius: 40,
    backgroundColor: '#ccc',
  },

  timelineLine: {
    position: 'absolute',
    width: 1,
    top: 96, // Adjust this value to position the line vertically
    bottom: -80, // Adjust this value to extend the line to the bottom
    right: 35, // Adjust this value to position the line correctly
    zIndex: 0, // Ensure the line is below the dots
    borderWidth: 5,
    borderColor: '#ccc',
  },

  timelineContent: {
    flex: 1,
  },
  timelineDate: {
    fontSize: 18,
    color: '#999',
    marginBottom: 5,
    textAlign: 'left', // Adjust text alignment to right
  },
  timelineStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right', // Adjust text alignment to right
  },
  timelineDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right', // Adjust text alignment to right
  },

  timelineStatusButton: {
    backgroundColor: '#ffcc00',
    borderRadius: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',

    font: '#000000',
    width: '80%',
  },
  timelineStatusButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ClosedTicketsInfo;
