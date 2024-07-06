import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import DriverList from './components/DriverList';
import InfoBox from './components/InfoBox';
import Dialog from 'react-native-popup-dialog';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';

const MyCar = () => {
  const [expanded, setExpanded] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

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

  return (
    <View style={styles.container}>
      {/* Static Top Section */}
      <View style={styles.topSection}>
        <Image source={require('C:\Users\linoy\MyCar2024\src\screens\assets\icons\car.png')} style={styles.carImage} />
        <Text style={styles.carInfo}>יונדאי איוניק 2022</Text>
        <Text style={styles.carInfo}>מספר רכב: 682 24 301</Text>
      </View>

      {/* Expandable Driver List */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.driverSection}>נהגים מורשים</Text>
      </TouchableOpacity>
      {expanded && <DriverList />}

      {/* Static Information Boxes */}
      <View style={styles.infoBoxes}>
        <InfoBox title="אוגוסט 2022" imageSource={require('../../../assets/info1.jpg')} />
        <InfoBox title="15,000 ק'מ" imageSource={require('../../../assets/info2.jpg')} />
        <TouchableOpacity style={styles.infoBox} onPress={() => setPopupVisible(true)}>
          <Text>לחץ אוויר קדמי</Text>
          <Image source={require('../../../assets/info3.jpg')} style={styles.infoImage} />
        </TouchableOpacity>
        <InfoBox title="לחץ אוויר אחורי" imageSource={require('../../../assets/info4.jpg')} />
      </View>

      {/* Document Sharing Button */}
      <TouchableOpacity style={styles.shareButton} onPress={selectDocument}>
        <Text>מסמכים</Text>
      </TouchableOpacity>
      {selectedDoc && (
        <TouchableOpacity style={styles.shareButton} onPress={shareDocument}>
          <Text>שיתוף מסמכים</Text>
        </TouchableOpacity>
      )}

      {/* Popup Dialog */}
      <Dialog
        visible={popupVisible}
        onTouchOutside={() => setPopupVisible(false)}
        dialogTitle={<Text>מידע סטטי</Text>}
      >
        <View>
          <Text>מידע על לחץ אוויר...</Text>
          <Button title="הבנתי" onPress={() => setPopupVisible(false)} />
        </View>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  topSection: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff4081',
    borderRadius: 10,
  },
  carImage: {
    width: 200,
    height: 200,
  },
  carInfo: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  driverSection: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  infoBox: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  infoImage: {
    width: 100,
    height: 100,
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default MyCar;
