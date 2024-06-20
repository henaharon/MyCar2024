import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Header } from './components/Header';

const AccidentReportIntro = () => {

  return (
    <View>
      <View>
        <Header />
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

  bodyContainer: {
    width: windowWidth * 0.9,
  },
});
