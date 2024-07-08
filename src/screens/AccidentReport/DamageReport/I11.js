import React from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";

import EventHeader from "../components/EventHeader";
import { FormHeader } from "../components/FormHeader";
import { CarDamageInputs } from "../components/CarDamageInputs";

import { BaseView, BodyBaseView } from "../../../uiKit/BaseView";

const headerTitle = "נזקים";
const damageInfoTitle = "פרטי הנזק לרכב שלי";
const textareaPlaceholder = "תיאור הנזק";
const imagesTitle = "הוספת תמונות מהאירוע";

const I11 = () => {
  return (
    <BodyBaseView style={styles.bodyContainer}>
      <CarDamageInputs
        infoTitle={damageInfoTitle}
        infoPlaceholder={textareaPlaceholder}
        imageTitle={imagesTitle}
      />
    </BodyBaseView>
  );
};

export default I11;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 9,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: windowHeight * 0.15,
    paddingBottom: windowHeight * 0.2,
    gap: 15,
  },
});
