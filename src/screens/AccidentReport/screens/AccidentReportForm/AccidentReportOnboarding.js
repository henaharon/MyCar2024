import React, {useState, useRef, useCallback} from 'react';
import {Dimensions, StyleSheet, View, Animated, ScrollView} from 'react-native';
import EventHeader from '../../components/EventHeader';
import FormHeader from '../../components/FormHeader';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import I3 from './I3';
import I4 from './I4';
import I5 from './I5';
import I6 from './I6';
import I7 from './I7';

import SuccessScreen from '../Success/SuccessScreen';

const pages = [
  {id: '0', pageComponent: I3, headerTitle: 'פרטי האירוע'},
  {id: '1', pageComponent: I4, headerTitle: 'פרטי הנהג/ת'},
  {id: '2', pageComponent: I5, headerTitle: "צד ג'"},
  {id: '3', pageComponent: I6, headerTitle: 'נפגעים ועדים'},
  {id: '4', pageComponent: I7, headerTitle: 'נזקים'},
  {id: '3', pageComponent: SuccessScreen, headerTitle: ''},
];

const AccidentReportOnboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const setProgressCallback = useCallback(
    value => {
      setProgress(value);
    },
    [setProgress],
  );

  const goToNextPage = useCallback(() => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const goToPreviousPage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  return (
    <BaseView>
      <View style={styles.contentWrapper}>
        {currentIndex !== 5 && (
          <EventHeader>
            <FormHeader
              title={pages[currentIndex].headerTitle}
              data={pages}
              pagesCount={pages.length}
              currentPage={currentIndex}
              onNextPage={goToNextPage}
              onPreviousPage={goToPreviousPage}
            />
          </EventHeader>
        )}
        <ScrollView>
          {currentIndex === 0 && <I3 setProgress={setProgressCallback} />}
          {currentIndex === 1 && <I4 setProgress={setProgressCallback} />}
          {currentIndex === 2 && <I5 setProgress={setProgressCallback} />}
          {currentIndex === 3 && <I6 setProgress={setProgressCallback} />}
          {currentIndex === 4 && <I7 setProgress={setProgressCallback} />}
          {currentIndex === 5 && (
            <SuccessScreen
              setProgress={setProgressCallback}
              navigation={navigation}
            />
          )}
        </ScrollView>
      </View>
    </BaseView>
  );
};

export default AccidentReportOnboarding;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
  },
});
