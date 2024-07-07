import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AirPressureInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/tire_pressure.jpg')} style={styles.image} />
      <Text style={styles.title}>לחץ אוויר</Text>
      <Text style={styles.description}>
        לחץ אוויר נקבע בהתאם למספר פרמטרים כגון סוג הצמיג, כמות אנשים שנמצאים ברכב, האם הרכב גורר משא, תנאי מזג האוויר, רובן ועוד.
        {'\n\n'}
        באפליקציה תוכלו לראות את טווח לחץ האוויר המומלץ.
        {'\n\n'}
        לקבלת ייעוץ פרטי בהתאם לצרכים יחודיים יש לפנות למחלקת הרכב.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>הבנתי</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff4081',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AirPressureInfo;
