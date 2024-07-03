import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { BaseView, BodyBaseView } from '../../../../uiKit/BaseView.js';
import { GradientButton } from '../../components/GradientButton'

const callIcon = require('../../../../assets/icons/calldialogicon.png');

const CallDialogScreen = () => {
  return (
    <BaseView>
      <BodyBaseView style={{ alignItems: 'center' }}>
        <View style={styles.iconContainer}>
          <Image style={styles.iconDisplay} source={callIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>סיוע טלפוני</Text>
          <Text style={styles.infoText}>התקשרות מהירה</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <GradientButton title='משטרה' phoneNumber={100} />
          <GradientButton title='מד"א' phoneNumber={101} />
          <GradientButton title='מוקד שירות' phoneNumber={1230} />
        </View>
        <Pressable style={styles.backLink}>
          <Text style={styles.linkText}>סגירה</Text>
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
