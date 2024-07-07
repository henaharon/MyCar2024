import React from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";

import EventHeader from "../../components/EventHeader";
import { FormHeader } from "../../components/FormHeader";
import GeneralForm from "../../components/GeneralForm";

import { BaseView, BodyBaseView } from "../../../../uiKit/BaseView";

const headerTitle = "פרטי האירוע";

const I10 = () => {
  return (
    <BodyBaseView style={styles.bodyContainer}>
      <GeneralForm />
    </BodyBaseView>
  );
};

export default I10;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  contentWrapper: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: -windowHeight * 0.1,
    paddingTop: windowHeight * 0.15,
    paddingBottom: windowHeight * 0.2,
    zIndex: 2,
    gap: 15,
  },
});
