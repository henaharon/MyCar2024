import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DriverList from './components/DriverList';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';

const MyCar = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [email, setEmail] = useState('');

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
    <ScrollView style={styles.container}>
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

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.driverButton}>
          <Text style={styles.driverButtonText}>נהג מורשה: <Text style={styles.driverName}>אביב שחר</Text></Text>
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.driverListContainer}>
          <DriverList />
        </View>
      )}

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
        <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('AirPressureInfo')}>
          <Image source={require('../../assets/icons/downwheel.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>לחץ אוויר קדמי</Text>
          <Text style={styles.infoTextLarge}>32-34</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.documentSection}>
        <Text style={styles.sectionTitle}>מסמכים</Text>
        <TouchableOpacity style={styles.addButton} onPress={selectDocument}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.emailInput}
          placeholder="כתובת מייל לשיתוף המסמכים"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.shareButton} onPress={shareDocument}>
          <Text style={styles.shareButtonText}>שיתוף המסמכים</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.usefulInfoSection}>
        <Text style={styles.infoTitle}>מידע שימושי</Text>
        <Text style={styles.infoSubtitle}>נווטיך באמצעות מספר מדריכים לתפעול הרכב</Text>
        <View style={styles.infoBoxes}>
          <TouchableOpacity style={styles.infoBox}>
            <Image source={require('../../assets/icons/wheel.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>מדריך החלפת גלגל</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('GuideLights')}>
            <Image source={require('../../assets/icons/important.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>מדריך נורית חיווי</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  driverButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  driverButtonText: {
    color: '#000',
    fontSize: 16,
  },
  driverName: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  driverListContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
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
  documentSection: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
    alignSelf: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  usefulInfoSection: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default MyCar;
