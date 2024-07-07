import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import DriverList from './components/DriverList';
import InfoBox from './components/InfoBox';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';

const MyCar = () => {
  const [expanded, setExpanded] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docModalVisible, setDocModalVisible] = useState(false);

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedDoc(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const shareDocument = async () => {
    if (selectedDoc) {
      await Share.open({ url: selectedDoc.uri });
    }
  };

  const closeScreen = () => {
    // Implement the logic to close the screen, e.g., navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.closeButton} onPress={closeScreen}>
          <Image source={require('../../assets/icons/NavBUtton.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <Image source={require('../../assets/icons/car.png')} style={styles.carImage} />
        <Text style={styles.carModel}>יונדאי איוניק 2022</Text>
        <View style={styles.carDetails}>
          <View style={styles.carDetail}>
            <Image source={require('../../assets/icons/packat.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>צבע רכב</Text>
            <Text style={styles.detailText}>לבן פנינה</Text>
          </View>
          <View style={styles.carDetail}>
            <Image source={require('../../assets/icons/hastag.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>מספר רכב</Text>
            <Text style={styles.detailText}>682 24 301</Text>
          </View>
        </View>
      </View>

      {/* Expandable Driver List and Document Button */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>נהגים מורשים</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDocModalVisible(true)} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>מסמכים</Text>
        </TouchableOpacity>
      </View>
      {expanded && <DriverList />}

      {/* Static Information Boxes */}
      <View style={styles.infoBoxes}>
        <TouchableOpacity style={styles.infoBox}>
          <Image source={require('../../assets/icons/Repair.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>מרווח טיפולים</Text>
          <Text style={styles.infoTextLarge}>15,000 ק'מ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox}>
          <Image source={require('../../assets/icons/Calendar.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>עליה לכביש</Text>
          <Text style={styles.infoTextLarge}>אוגוסט 2022</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox}>
          <Image source={require('../../assets/icons/upwheel.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>לחץ אוויר אחורי</Text>
          <Text style={styles.infoTextLarge}>32-34</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox} onPress={() => setPopupVisible(true)}>
          <Image source={require('../../assets/icons/downwheel.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>לחץ אוויר קדמי</Text>
          <Text style={styles.infoTextLarge}>32-34</Text>
        </TouchableOpacity>
      </View>

      {/* Document Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={docModalVisible}
        onRequestClose={() => {
          setDocModalVisible(!docModalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>בחר מסמך לשיתוף</Text>
          <TouchableOpacity style={styles.pickButton} onPress={selectDocument}>
            <Text style={styles.pickButtonText}>בחר מסמכים</Text>
          </TouchableOpacity>
          {selectedDoc && (
            <TouchableOpacity style={styles.shareButton} onPress={shareDocument}>
              <Text style={styles.shareButtonText}>שיתוף מסמכים</Text>
            </TouchableOpacity>
          )}
          <Button title="סגור" onPress={() => setDocModalVisible(!docModalVisible)} />
        </View>
      </Modal>

      {/* Popup Dialog */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={popupVisible}
        onRequestClose={() => {
          setPopupVisible(!popupVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>מידע על לחץ אוויר...</Text>
          <Button title="הבנתי" onPress={() => setPopupVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ff4081',
  },
  topSection: {
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  carImage: {
    width: 150,
    height: 150,
  },
  carModel: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
  },
  carDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  carDetail: {
    alignItems: 'center',
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  actionButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  infoBox: {
    width: '45%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
  },
  infoImage: {
    width: 40,
    height: 40,
    marginVertical: 5,
  },
  infoTextSmall: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  infoTextLarge: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '45%',
    alignSelf: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  pickButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  pickButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MyCar;
