import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import Title from '../../components/Title';
import ChoiceInput from '../../components/ChoiceInput';
import {Input} from '../../components/Input';
import { TextareaInput } from '../../components/TextareaInput';
import ImageInput from '../../components/ImageInput';

import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';

const headerTitle = 'נפגעים ועדים';
const affectedTitle = 'האם היו נפגעים באירוע?';
const witnessTitle = 'האם היו עדים באירוע?';
const witnessInfoTitle = 'פרטי עד הראייה';
const witnessNamePlaceholder = 'שם עד';
const IDNumberPlaceholder = 'מספר ת.ז';
const addressPlaceholder = 'כתובת';
const additionalWitnessesTitle = 'עדים נוספים';
const additionalWitnessesPlaceholder = 'במידה ויש עדים נוספים אנא עדכן כאן, יש להקפיד למלא את שמם המלא, ת.ז, כתובת וטלפון של כל העדים הנוספים.';
const witnessPhotosTitle = 'הוספת תמונות עדים';
const injuredTitle = 'פרטי נפגע';
const injuredNamePlaceholder = 'שם הנפגע';
const additionalInjuredTitle = 'נפגעים נוספים';
const additionalInjuredPlaceholder = 'במידה ויש נפגעים נוספים אנא עדכן כאן, יש להקפיד למלא את שמם המלא, ת.ז, כתובת וטלפון של כל הנפגעים הנוספים.';
const injuredPhotosTitle = 'הוספת תמונות נפגעים';

const I6 = () => {
    const [witnesses, setWitnesses] = useState(false);
    const [injured, setInjured] = useState(false);
  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          <EventHeader>
            <FormHeader title={headerTitle}/>
          </EventHeader>
          <BodyBaseView style={styles.bodyContainer}>
            <Title title={affectedTitle} />
            <View style={{marginLeft: windowWidth * 0.08}}>
                <ChoiceInput optionF={'לא היו נפגעים'} optionT={'כן, היו נפגעים'}/>
            </View>
            { injured && (<View>
                <Title title={injuredTitle} />
                <View style={styles.witnessForm}>
                    <Input
                        placeholder={injuredNamePlaceholder}
                        required={false}
                        width={0.9}
                        type={''}
                    />
                     <Input
                        placeholder={IDNumberPlaceholder}
                        required={false}
                        width={0.9}
                        type={'number'}
                    />
                    <Input
                        placeholder={addressPlaceholder}
                        required={false}
                        width={0.9}
                        type={''}
                    />
                    <TextareaInput title={additionalInjuredTitle} placeholder={additionalInjuredPlaceholder} />
                </View>
                <View style={styles.witnessPhotos}>
                <Title title={injuredPhotosTitle} />
                <View style={styles.photosInput}>
                <ImageInput/>
                </View>
                </View>
            </View>
            )}

            <View style={styles.DecorativeLine} />
            <Title title={witnessTitle} />
            <View style={{marginLeft: windowWidth * 0.08}}>
            <ChoiceInput optionF={'לא היו עדים'} optionT={'כן, היו עדים'} setChoice={setWitnesses}/>
            </View>
            {witnesses && (
                <View>
                <Title title={witnessInfoTitle} />
                <View style={styles.witnessForm}>
                    <Input
                        placeholder={witnessNamePlaceholder}
                        required={false}
                        width={0.9}
                        type={''}
                    />
                    <Input
                        placeholder={IDNumberPlaceholder}
                        required={false}
                        width={0.9}
                        type={'number'}
                    />
                    <Input
                        placeholder={addressPlaceholder}
                        required={false}
                        width={0.9}
                        type={''}
                    />
                </View>
                <TextareaInput title={additionalWitnessesTitle} placeholder={additionalWitnessesPlaceholder} />
                <View style={styles.witnessPhotos}>
                <Title title={witnessPhotosTitle} />
                <View style={styles.photosInput}>
                <ImageInput/>
                </View>
                </View>
            </View>
            )}
          </BodyBaseView>
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default I6;

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
    gap: 20,
  },
  DecorativeLine: {
    height: 1,
    backgroundColor: '#dbdce2', 
    width: windowWidth * 0.9, 
    marginVertical: 10
  },
  witnessPhotos: {
    display: 'flex',
    position: 'relative',
    top: windowHeight * 0.13,
  },
  photosInput: {
    position: 'relative',
    bottom: windowHeight * 0.15,
  },
  witnessForm: {
    gap: 25,
  }
});