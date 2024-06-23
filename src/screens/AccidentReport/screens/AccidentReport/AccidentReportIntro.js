import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import Requirements from './components/Requirements';

const AccidentReportIntro = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.bodyContainer}>
        <Requirements />
      </View>
    </View>
  );
};

export default AccidentReportIntro;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    height: windowHeight * 0.3,
    zIndex: 1,
  },
  bodyContainer: {
    height: windowHeight * 0.43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -windowHeight * 0.05,
    zIndex: 2,
  },
});
