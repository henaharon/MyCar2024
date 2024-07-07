import React, { useState, useRef, useCallback } from "react";
import { Dimensions, StyleSheet, View, Animated } from "react-native";
import EventHeader from "../../components/EventHeader";
import FormHeader from "../../components/FormHeader";
import { BaseView, BodyBaseView } from "../../../../uiKit/BaseView";
import I10 from "./I10";
import I11 from "./I11";
import I12 from "./I12";
import SuccessScreen from "../Success/SuccessScreen";

const pages = [
  { id: "0", pageComponent: I10, headerTitle: "פרטי האירוע" },
  { id: "1", pageComponent: I11, headerTitle: "נזקים" },
  { id: "2", pageComponent: I12, headerTitle: "אישור פרטי הדוח" },
  { id: "3", pageComponent: SuccessScreen, headerTitle: "" },
];

const DamageReport = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextPage = useCallback(() => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const goToPreviousPage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else if (currentIndex === 0) {
      navigation.navigate("AccidentReportIntro");
    }
  }, [currentIndex]);


  return (
    <BaseView>
      <View style={styles.contentWrapper}>
        <EventHeader>
          <FormHeader
            title={pages[currentIndex].headerTitle}
            data={pages}
            pagesCount={pages.length}
            currentPage={currentIndex}
            onNextPage={goToNextPage}
            onPreviousPage={goToPreviousPage}
            navigation={navigation}
          />
        </EventHeader>
        {currentIndex === 0 && <I10 />}
        {currentIndex === 1 && <I11 />}
        {currentIndex === 2 && <I12 />}
        {currentIndex === 3 && <SuccessScreen navigation={navigation} />}
      </View>
    </BaseView>
  );
};

export default DamageReport;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
  },
});
