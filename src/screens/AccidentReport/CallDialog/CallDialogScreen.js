import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { BaseView, BodyBaseView } from '../../../uiKit/BaseView.js';
import { GradientButton } from '../components/GradientButton.js'

const callIcon = require('../../../assets/icons/calldialogicon.png');

const pageTitle = 'סיוע טלפוני';
const fastCall = 'התקשרות מהירה';
const police = 'משטרה';
const ambulance = 'מד"א';
const serviceCenter = 'מוקד שירות';
const close = 'סגירה';

const CallDialogScreen = ({ navigation }) => {

  const handleClose = () => {
    navigation.navigate('AccidentReportIntro');
  };

  return (
    <BaseView>
      <BodyBaseView style={{ alignItems: 'center' }}>
        <View style={styles.iconContainer}>
          <Image style={styles.iconDisplay} source={callIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>{pageTitle}</Text>
          <Text style={styles.infoText}>{fastCall}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <GradientButton title={police} phoneNumber={100} />
          <GradientButton title={ambulance} phoneNumber={101} />
          <GradientButton title={serviceCenter} phoneNumber={1230} />
        </View>
        <Pressable
          style={styles.backLink}
          onPress={handleClose}
        >
          <Text style={styles.linkText}>{close}</Text>
        </Pressable>
      </BodyBaseView>
    </BaseView>
  );
};

export default CallDialogScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: windowHeight * 0.07,
  },
  iconDisplay: {
    height: windowHeight * 0.18,
    width: windowWidth * 0.35,
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonsContainer: {
    width: windowWidth,
    position: 'relative',
    bottom: windowHeight * 0.23,
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  infoText: {
    fontSize: 16,
    color: 'black',
  },
  textContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    top: windowHeight * 0.3,
    gap: 10,
  },
  backLink: {
    width: windowWidth,
    position: 'relative',
    bottom: windowHeight * 0.18,
  },
  linkText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});
