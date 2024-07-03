import React, { useState, useCallback } from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';

import EventHeader from '../../components/EventHeader';
import { FormHeader } from '../../components/FormHeader';

import { BaseView, BodyBaseView } from '../../../../uiKit/BaseView';
import I10 from './I10';
import I11 from './I11';
import I12 from './I12';
import SuccessScreen from '../Success/SuccessScreen';

const pages = [
  { pageTitle: 'I10', pageComponent: I10, headerTitle: 'פרטי האירוע' },
  { pageTitle: 'I11', pageComponent: I11, headerTitle: 'נזקים' },
  { pageTitle: 'I12', pageComponent: I12, headerTitle: 'אישור פרטי הדוח' },
  {
    pageTitle: 'SuccessScreen',
    pageComponent: SuccessScreen,
    headerTitle: '',
  },
];

const DamageReport = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  const setProgressCallback = useCallback(
    value => {
      setProgress(value);
    },
    [setProgress],
  );

  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          {/* <EventHeader>
            {progress === 0 && <FormHeader title={pages[0].headerTitle} />}
            {progress === 1 && <FormHeader title={pages[1].headerTitle} />}
            {progress === 2 && <FormHeader title={pages[2].headerTitle} />}
          </EventHeader> */}
          {progress === 0 && <I10 setProgress={setProgressCallback} />}
          {progress === 1 && <I11 setProgress={setProgressCallback} />}
          {progress === 2 && <I12 setProgress={setProgressCallback} />}
          {progress === 3 && (
            <SuccessScreen
              setProgress={setProgressCallback}
              navigation={navigation}
            />
          )}
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default DamageReport;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1, 
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
