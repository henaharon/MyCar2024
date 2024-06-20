import {Dimensions, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import {Button} from '../../components/Button'

const CallDialogScreen = () => {
  return (
    <BaseView>
      <BodyBaseView style={{alignItems: 'center'}}>
        <View style={styles.iconContainer}>
        <Image style={styles.iconDisplay} source={require('../../../../assets/i1-assets/calldialogicon.png')} />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>סיוע טלפוני</Text>
        <Text style={styles.infoText}>התקשרות מהירה</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <Button title='משטרה' phoneNumber={100}/>
        <Button title='מד"א' phoneNumber={101}/>
        <Button title='מוקד שירות' phoneNumber={1230}/>
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

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: '10%',
  },
  iconDisplay: {
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonsContainer: {
    width: '100%',
    position: 'relative',
    bottom: '22%',
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
    top: '32%',
    gap: 10,
  },
  backLink: {
    width: '100%',
    position: 'relative',
    bottom: '19%',
  },
  linkText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});
