import React, {useState, useRef} from 'react';
import {Dimensions, StyleSheet, View, FlatList, Animated} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';

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
  {id: '5', pageComponent: SuccessScreen, headerTitle: ''},
];

const AccidentReportOnboarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const pagesRef = useRef(null);

  return (
    <BaseView>
      <View style={styles.bodyContainer}>
        <FlatList
          data={pages}
          renderItem={({item}) => {
            const PageComponent = item.pageComponent;
            return (
              <View style={styles.bodyContainer}>
                <PageComponent />
              </View>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={pagesRef}
        />
      </View>
    </BaseView>
  );
};

export default AccidentReportOnboarding;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
});
