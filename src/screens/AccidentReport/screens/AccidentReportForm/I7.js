import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import { CarDamageInputs } from '../../components/CarDamageInputs';
import ChoiceInput from '../../components/ChoiceInput';
import Title from '../../components/Title';

import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';

const headerTitle = 'נזקים';
const damageTitle = 'האם הרכב שלך ניזוק?';
const damageInfoTitle = 'פרטי הנזק לרכב שלך';
const associativeInfoTitle = 'פרטי הנזק לרכב צד ג\'';
const damageDescriptionPlaceholder = 'תיאור הנזק';
const imagesTitle = 'הוספת תמונות עדים';
const associativeDamageTitle = 'האם הרכב צד ג\' ניזוק?';

const I7 = () => {
    const [carDamage, setCarDamage] = useState(false);
    const [associativeDamage, setAssosiativeDamage] = useState(false);
  return (
          <BodyBaseView style={styles.bodyContainer}>
            <View style={styles.carDamageForm}>
                <Title title={damageTitle}/>
                <ChoiceInput optionF={'הרכב לא ניזוק'} optionT={'כן, הרכב ניזוק'} setChoice={setCarDamage}/>
                {carDamage && (
                    <View>
                    <View style={styles.carDamageInputContainer}>
                    <CarDamageInputs infoTitle={damageInfoTitle} infoPlaceholder={damageDescriptionPlaceholder} imageTitle={imagesTitle}/>
                    </View>
                </View>
                )}
            </View>
            <View style={styles.DecorativeLine} />

            <View style={styles.carDamageForm}>
                <Title title={associativeDamageTitle}/>
                <ChoiceInput optionF={'הרכב לא ניזוק'} optionT={'כן, הרכב ניזוק'} setChoice={setAssosiativeDamage}/>
                {associativeDamage && (
                    <View>
                    <View style={styles.carDamageInputContainer}>
                    <CarDamageInputs infoTitle={associativeInfoTitle} infoPlaceholder={damageDescriptionPlaceholder} imageTitle={imagesTitle}/>
                    </View>
                </View>
                )}
            </View>
          </BodyBaseView>
  );
};

export default I7;

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
    paddingTop: windowHeight * 0.05,
    paddingBottom: windowHeight * 0.2,
    zIndex: 2,
    gap: 15,
  },
  DecorativeLine: {
    height: 1,
    backgroundColor: '#dbdce2', 
    width: windowWidth * 0.9, 
    marginVertical: 10
  },
  carDamageForm: {
    gap: 20,
    paddingLeft: windowWidth * 0.08,
},
carDamageInputContainer: {
    position: 'relative',
    top: windowHeight * 0.1,
    height: windowHeight * 0.6,
  },
});