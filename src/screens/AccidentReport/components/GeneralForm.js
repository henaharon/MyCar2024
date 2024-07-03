import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import {Input} from './Input';
import {TextareaInput} from './TextareaInput';
import DateTimeInput from './DateTimeInput';
import Title from './Title';
import ImageInput from './ImageInput';
// import {BaseView, BodyBaseView} from '../../../uiKit/BaseView';
// import {GradientButton} from '../../components/GradientButton';
// import ChoiceInput from './ChoiceInput';

const generalInputTitle = 'פרטים כלליים';
const hourPlaceholder = 'שעה';
const datePlaceholder = 'תאריך';
const cityPlaceholder = 'עיר / כביש מרכזי';
const houseNumberPlaceholder = 'מ.בית';
const addressPlaceholder = 'כתובת';
const descriptionTitle = 'תיאור האירוע';
const descriptionPlaceholder = 'תיאור התרחשות האירוע';
const imageTitle = 'הוספת תמונות האירוע';

const GeneralForm = () => {
  return (
    <View style={styles.GeneralFormContainer}>
      <Title title={generalInputTitle} />
      <View style={styles.rowInputsContainer}>
        <DateTimeInput
          text={hourPlaceholder}
          width={0.4}
          type={'time'}
          required={true}
        />
        <DateTimeInput
          text={datePlaceholder}
          width={0.5}
          type={'date'}
          required={true}
        />
      </View>
      <Input
        placeholder={cityPlaceholder}
        required={false}
        width={0.92}
        type={''}
      />
      <View style={styles.rowInputsContainer}>
        <Input
          placeholder={houseNumberPlaceholder}
          required={false}
          width={0.3}
          type={'number'}
        />
        <Input
          placeholder={addressPlaceholder}
          required={false}
          width={0.6}
          type={''}
        />
      </View>
      <TextareaInput
        title={descriptionTitle}
        placeholder={descriptionPlaceholder}
      />
      <ImageInput title={imageTitle} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rowInputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GeneralFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
    width: windowWidth * 0.9,
    marginTop: -windowHeight * 0.1,
  },
  TextBoxLabel: {
    position: 'relative',
    bottom: windowHeight * 0.039,
    left: windowWidth * 0.59,
    zIndex: 1,
    width: windowWidth * 0.27,
    alignItems: 'center',
  },
  TextboxBackground: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
});

export default GeneralForm;
