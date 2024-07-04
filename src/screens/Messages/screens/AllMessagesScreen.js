import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScrollMessages from '../commponents/ScrollMessages';

const AllMessagesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ההודעות שלי</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image source={require('../../../assets/icons/back-icon.png')} style={styles.backButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.whitePart}>
        <Text style={styles.text}>הודעות</Text>
        <ScrollMessages direction='vertical' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    marginTop: 20,
    color: '#000',
    alignSelf: 'flex-end',

  },
  backButton: {
    borderRadius: 15,
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  whitePart: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 60,
    zIndex: 2,
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default AllMessagesScreen;