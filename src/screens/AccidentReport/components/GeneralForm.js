import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
// import {BaseView, BodyBaseView} from '../../../uiKit/BaseView';
// import {GradientButton} from '../../components/GradientButton';
import {Input} from './Input';
import DateTimeInput from './DateTimeInput';
import Title from './Title';
// import ChoiceInput from './ChoiceInput';
import ImageInput from './ImageInput';

const GeneralForm = () => {
  return (
    <View style={styles.GeneralFormContainer}>
      <Title title={'פרטים כלליים'} />
      <View style={styles.rowInputsContainer}>
        <DateTimeInput text={'שעה'} width={0.4} type={'time'} required={true} />
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
        <Input placeholder={'כתובת'} required={false} width={0.6} type={''} />
      </View>
      {/* <View style={styles.TextareaContainer}>
                <Input placeholder={"תיאור האירוע"} required={false} width={0.92} type={"textarea"}/>
                </View> */}
      <View style={styles.EvidenceContainer}>
        <Title title={'הוספת תמונות האירוע'} />
        <ImageInput />
        {/* <Title title={"האם הייתה מעורבות משטרה באירוע?"}/>
                <ChoiceInput option1={"לא היתה"} option2={"כן, היתה"}/> */}
      </View>
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
  TextareaContainer: {
    position: 'relative',
    top: windowHeight * 0.01,
  },
  GeneralFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
    width: windowWidth * 0.9,
    marginTop: -windowHeight * 0.1,
  },
  EvidenceContainer: {
    position: 'relative',
  },
});

export default GeneralForm;
