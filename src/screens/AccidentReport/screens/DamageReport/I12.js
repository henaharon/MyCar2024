import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import {CarDamageInputs} from '../../components/CarDamageInputs';
import Signature from '../../components/Signature';

const headerTitle = 'אישור פרטי הדוח';
const titlePage = 'שליחת דוח';
const mailPlaceholder = 'כתובת המייל שלי';
const signTitle = 'חתימה';
const signParagraph = 'אני מאשר שכל המידע שמסרתי הוא מדויק';
const signPlaceholder = 'החתימה שלך';
const imagesTitle = 'הוספת תמונות מהאירוע';

const I12 = () => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          <EventHeader>
            <FormHeader title={headerTitle} />
          </EventHeader>
          <BodyBaseView style={styles.bodyContainer}>
            <Signature />
          </BodyBaseView>
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default I12;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 9,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -windowHeight * 0.1,
    paddingTop: windowHeight * 0.15,
    paddingBottom: windowHeight * 0.2,
    zIndex: 2,
    gap: 15,
  },
});
