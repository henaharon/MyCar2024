//import React from 'react';
//import {SafeAreaView, StyleSheet, View} from 'react-native';
//
//export const BaseView = ({children, style}) => {
//  return (
//    <SafeAreaView style={[styles.safeAreaViewBase, style]}>
//      {children}
//    </SafeAreaView>
//  );
//};
//
//export const BodyBaseView = ({children, style}) => {
//  return <View style={[styles.bodyView, style]}>{children}</View>;
//};
//
//const styles = StyleSheet.create({
//  safeAreaViewBase: {
//    flex: 1,
//    backgroundColor: 'green',
//  },
//  bodyView: {
//    paddingHorizontal: 50,
//    flex: 9,
//    backgroundColor: 'yellow',
//    // justifyContent: 'center',
//    // alignItems: 'center',
//  },
//});
import React from 'react';
import { View, StyleSheet } from 'react-native';

const BaseView = ({ children }) => {
  return <View style={styles.baseView}>{children}</View>;
};

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
    //    padding: 16,
    backgroundColor: '#fff',
  },
});

export default BaseView;
