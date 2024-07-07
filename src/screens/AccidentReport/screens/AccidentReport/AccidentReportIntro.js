import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Header} from '../../components/Header';
import Requirements from './components/Requirements';
import Information from '../../components/Information';
import {GradientButton} from '../../components/GradientButton';
import CallDialogScreen from '../CallDialog/CallDialogScreen';
import HomePage from '../../../homepage/HomePage';

const informationTitle = 'לפני מילוי הדוח חשוב לדעת:';
const accidentTitle = 'תאונת דרכים עם צד ג';
const damageTitle = 'דיווח נזק לרכב';
const paragraphs = [
  'דוח תאונת הדרכים נשלח למספר גורמים בקבוצת אמדוקס ולגורמים חיצויים כמו חברת ביטוח.',
  'נא להקפיד על מילוי מדוייק ונכון של דוח התאונה.',
  'ניתן לקבל עזרה טלפונית בלחיצה על כפתור ה"עזרה" בראש המסך.',
];


const AccidentReportIntro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.bodyContainer}>
          <Requirements />
          <Information title={informationTitle} paragraph={paragraphs} />
          <View style={styles.eventContainer}>
            <Text style={styles.eventType}>אנא בחרו את סוג האירוע</Text>
            <GradientButton
              title={accidentTitle}
            />
            <GradientButton
              title={damageTitle}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccidentReportIntro;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    height: windowHeight * 0.3,
    zIndex: 1,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -windowHeight * 0.05,
    paddingTop: windowHeight * 0.03,
    paddingBottom: windowHeight * 0.05,
    zIndex: 2,
    gap: 15,
  },
  eventContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.9,
  },
  eventType: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
