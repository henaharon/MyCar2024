import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DriverList from './components/DriverList';
import InfoBox from './components/InfoBox';

const MyCar = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

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
        <TouchableOpacity onPress={() => navigation.navigate('DocumentSharing')} style={styles.actionButton}>
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
        <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('AirPressureInfo')}>
          <Image source={require('../../assets/icons/downwheel.png')} style={styles.infoImage} />
          <Text style={styles.infoTextSmall}>לחץ אוויר קדמי</Text>
          <Text style={styles.infoTextLarge}>32-34</Text>
        </TouchableOpacity>
      </View>
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
});

export default MyCar;
