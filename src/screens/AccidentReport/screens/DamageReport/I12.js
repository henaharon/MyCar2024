import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import FinalConfirm from '../../components/FinalConfirm';

const headerTitle = 'אישור פרטי הדוח';
const titlePage = 'שליחת דוח';
const mailPlaceholder = 'כתובת המייל שלי';
const signTitle = 'חתימה';
const signParagraph = 'אני מאשר שכל המידע שמסרתי הוא מדויק';
const signPlaceholder = 'החתימה שלך';
const informationTitle = 'המלצה';
const paragraphs = [ 'לאחר קבלת המסמך במייל אנחנו ממליצים להעביר אותו כפי שהוא לחברת הביטוח.'];

const I12 = () => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          <EventHeader>
            <FormHeader title={headerTitle} />
          </EventHeader>
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
    justifyContent: 'flex-start',
  },
  contentWrapper: {
    flex: 9,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -windowHeight * 0.1,
    paddingTop: windowHeight * 0.05,
    marginBottom: windowHeight * 0.1,
    zIndex: 2,
    gap: 15,
  },
});
