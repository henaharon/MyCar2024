import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Dimensions, Modal } from 'react-native';

const rightButtonImage = require('../../assets/images/greyRightArrow.png');
const batteryImage = require('../../assets/images/Battery.png'); 
const uploadImage1 = require('../../assets/images/cable.png');
const carIcon = require('../../assets/icons/car.png');
const locationIcon = require('../../assets/icons/location.png');
const infoIcon = require('../../assets/icons/info.png');

const SummaryScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>סיכום קריאה</Text>
        <Pressable onPress={() => navigation.goBack()} style={[styles.headerButton, styles.nextButton]}>
          <Image source={rightButtonImage} style={styles.headerButtonImage} />
        </Pressable>
      </View>
      <View style={styles.sectionUnderHeader}>
        <Text style={styles.sectionTitle}>שירותי דרך</Text>
        <Text style={styles.sectionDescription}>לפניכם פרטי הקריאה אנא בדקו שכל הפרטים נכונים לפני שליחה.</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.inlineContainer}>
          <Image source={batteryImage} style={styles.inlineImage} />
          <Text style={styles.subsectionTitle}>מצבר</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>תיאור / הערות</Text>
          <Text style={styles.detailsText}>הרכב לא מניע לי. זקוק לסיוע בבקשה!</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>תמונות</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.imageScrollContainer}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.imageBox}>
              <Image source={uploadImage1} style={styles.uploadImage} />
            </View>
            <View style={styles.imageBox}>
              <Image source={uploadImage1} style={styles.uploadImage} />
            </View>
            <View style={styles.imageBox}>
              <Image source={uploadImage1} style={styles.uploadImage} />
            </View>
            <View style={styles.imageBox}>
              <Image source={uploadImage1} style={styles.uploadImage} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.line}></Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>פרטים כללים</Text>
          <View style={styles.generalDetails}>
            <Image source={carIcon} style={styles.icon} />
            <View>
              <Text style={styles.generalDetailsText}>Hyundai IONIQ</Text>
              <Text style={styles.generalDetailsSubText}>23 441 32</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>מיקום</Text>
          <View style={styles.locationDetails}>
            <Image source={locationIcon} style={styles.icon} />
            <Text style={styles.locationDetailsText}>צומת יקום לכיוון צפון</Text>
          </View>
        </View>
        <View style={styles.notificationBox}>
          <View style={styles.notificationHeader}>
            <Image source={infoIcon} style={styles.infoIcon} />
            <Text style={styles.notificationTitle}>לידיעתך</Text>
          </View>
          <Text style={styles.notificationText}>ניתן להתעדכן בכל רגע נתון בסטטוס הבקשה שלך ישירות מהאפליקציה דרך מסך סטטוס הקריאות שלי.</Text>
        </View>
      </View>
      <Pressable style={styles.confirmButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.confirmButtonText}>אישור ושליחה</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>תודה</Text>
            <Text style={styles.modalDescription}>קריאה נשלחה בהצלחה!</Text>
            <Pressable style={styles.modalButton}>
              <Text style={styles.modalButtonText}>צפיה בסטטוס הקריאה</Text>
            </Pressable>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>אישור</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerButton: {
    padding: 8,
  },
  headerButtonImage: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  headerTitle: {
    marginLeft: '36%',
    fontSize: 18,
    color: 'white',
  },
  sectionUnderHeader: {
    marginTop: 53,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingRight: 15,
    marginLeft: -17,
    marginRight: -17,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  },
  section: {
    marginTop: 36,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
    color: 'black',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  inlineContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 16,
  },
  inlineImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  line: {
    width: windowWidth - 50,
    height: 2,
    backgroundColor: '#D3D3D3',
    marginLeft: 5,
    marginBottom: 20,
    marginTop: 20,
  },

  detailsContainer: {
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 8,
    color: 'black',
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
  },
  imageScrollContainer: {
    flexDirection: 'row',
  },
  imageBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  uploadImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  generalDetails: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  generalDetailsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  generalDetailsSubText: {
    fontSize: 14,
    color: '#666',
  },
  locationDetails: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  locationDetailsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationBox: {
    backgroundColor: '#fff3cd',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  notificationHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginRight: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#856404',
  },
  confirmButton: {
    backgroundColor: '#ff007f',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: windowWidth * 0.8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#ff007f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 16,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#1a73e8',
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10, 
    backgroundColor: '#F6E8E8',
    borderRadius: 25, // Half of the width/height to make it a circle
    justifyContent: 'center',
    alignItems: 'center', // To center the image inside the circle
  },  
  infoIcon: {
    width: 50,
    height: 50,
    marginRight: -10,
  },
});

export default SummaryScreen;
