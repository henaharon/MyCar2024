import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Header } from './components/Header';

const AccidentReportIntro = () => {

  return (
    <View>
      <View>
        <Header />
        <Image style={styles.headerImg} source={require('../../assets/i1-assets/elementsPageCoversAccidentReport3x.png')} />
      </View>
      <View>
        <Text>Timer Screen</Text>
      </View>

    </View>
  );
};

export default AccidentReportIntro;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {

  },
  headerImg: {
    width: '100%',
    height: windowHeight * 0.3,
  },
  bodyContainer: {

  },
});
