import React from 'react';
import {Dimensions, Text, View, StyleSheet, ScrollView} from 'react-native';
import {BaseView, BodyBaseView} from '../../../uiKit/BaseView';
// import {Button} from '../../components/Button'
import {Input} from './Input';
import DateTimeInput from './DateTimeInput';
import Title from './Title';
// import ChoiceInput from './ChoiceInput'
import ImageInput from './ImageInput';

const GeneralForm = () => {
  return (
    <BaseView>
      <BodyBaseView style={{alignItems: 'center'}}>
        <View style={styles.GeneralFormContainer}>
          <Title title={'פרטים כלליים'} />
          <View style={styles.rowInputsContainer}>
            <DateTimeInput
              text={'שעה'}
              width={0.4}
              type={'time'}
              required={true}
            />
            <DateTimeInput
              text={'תאריך'}
              width={0.5}
              type={'date'}
              required={true}
            />
          </View>
          <Input
            placeholder={'עיר / כביש מרכזי'}
            required={false}
            width={0.92}
            type={''}
          />
          <View style={styles.rowInputsContainer}>
            <Input
              placeholder={'מ.בית'}
              required={false}
              width={0.3}
              type={'number'}
            />
            <Input
              placeholder={'כתובת'}
              required={false}
              width={0.6}
              type={''}
            />
          </View>
          <View style={styles.TextareaContainer}>
            <View style={styles.TextBoxLabel}>
            <Text style={styles.TextboxBackground}>תיאור האירוע</Text>
            </View>
            <Input
              placeholder={'תיאור התרחשות האירוע (סיפור מקרה אירוע)'}
              required={false}
              width={0.92}
              type={'textarea'}
            />
          </View>
          <View style={styles.EvidenceContainer}>
            <Title title={'הוספת תמונות האירוע'} />
            <ImageInput />
          </View>
        </View>
      </BodyBaseView>
    </BaseView>
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
  TextareaContainer: {
    position: 'relative',
    top: windowHeight * 0.05,
  },
  GeneralFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    position: 'relative',
    top: windowHeight * 0.05,
    width: windowWidth * 0.9,
  },
  EvidenceContainer: {
    position: 'relative',
    top: windowHeight * 0.1,
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
