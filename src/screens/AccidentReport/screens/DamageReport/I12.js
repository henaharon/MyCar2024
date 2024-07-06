import React from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";

import EventHeader from "../../components/EventHeader";
import { FormHeader } from "../../components/FormHeader";
import { BaseView, BodyBaseView } from "../../../../uiKit/BaseView";
import FinalConfirm from "../../components/FinalConfirm";

const headerTitle = "אישור פרטי הדוח";
const titlePage = "שליחת דוח";
const mailPlaceholder = "כתובת המייל שלי";
const signTitle = "חתימה";
const signParagraph = "אני מאשר שכל המידע שמסרתי הוא מדויק";
const signPlaceholder = "החתימה שלך";
const informationTitle = "המלצה";
const paragraphs = [
  "לאחר קבלת המסמך במייל אנחנו ממליצים להעביר אותו כפי שהוא לחברת הביטוח.",
];

const I12 = ({ setProgress }) => {
  return (
    <BodyBaseView style={styles.bodyContainer}>
      <FinalConfirm
        pageTitle={titlePage}
        inputPlaceholder={mailPlaceholder}
        signatureTitle={signTitle}
        signatureParagraph={signParagraph}
        informationTitle={informationTitle}
        paragraphs={paragraphs}
      />
    </BodyBaseView>
  );
};

export default I12;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  contentWrapper: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: -windowHeight * 0.1,
    paddingTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.1,
    zIndex: 2,
    gap: 15,
  },
});
