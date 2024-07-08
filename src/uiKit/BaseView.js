import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export const BaseView = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.safeAreaViewBase, style]}>
      {children}
    </SafeAreaView>
  );
};

export const BodyBaseView = ({ children, style }) => {
  return <View style={[styles.bodyView, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  safeAreaViewBase: {
    flex: 1,
    backgroundColor: "#ee4666",
  },
  bodyView: {
    paddingHorizontal: 50,
    flex: 9,
    backgroundColor: "yellow",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

BaseView.defaultProps = {
  style: {},
};
