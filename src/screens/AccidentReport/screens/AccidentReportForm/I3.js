import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import GeneralForm from '../../components/GeneralForm';

import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import Title from '../../components/Title';
import ChoiceInput from '../../components/ChoiceInput';
import {Input} from '../../components/Input';

const headerTitle = 'פרטי האירוע';
const policeInvolvementTitle = 'האם היתה מוערבות משטרה באירוע?';
const policeInfoTitle = 'פרטי המשטרה';
const policeNamePlaceholder = 'שם השוטר';
const policeStationPlaceholder = 'תחנת משטרה';

const I3 = () => {
    const [policeInvolvement, setPoliceInvolvement] = useState(false);
  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          <EventHeader>
            <FormHeader title={headerTitle}/>
          </EventHeader>
          <BodyBaseView style={styles.bodyContainer}>
            <GeneralForm />
            <View style={styles.policeInvolvementContainer}>
            <Title title={policeInvolvementTitle} />
            <ChoiceInput optionF={"לא היתה"} optionT={"כן, היתה"} setChoice={setPoliceInvolvement}/>
            {policeInvolvement && (
                <View style={styles.policeInfoContainer}>
                <Title title={policeInfoTitle} />
                <View style={styles.policeInfoForm}>
                    <Input
                    placeholder={policeStationPlaceholder}
                    required={false}
                    width={0.9}
                    type={''}
                    />
                    <Input
                    placeholder={policeNamePlaceholder}
                    required={false}
                    width={0.9}
                    type={''}
                    />
                </View>
            </View>
            )}
            </View>
          </BodyBaseView>
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default I3;

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
    paddingTop: windowHeight * 0.15,
    paddingBottom: windowHeight * 0.2,
    zIndex: 2,
    gap: 15,
  },
  policeInfoForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
  },
  policeInfoContainer: {
    marginTop: windowHeight * 0.03,
  },
  policeInvolvementContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: windowHeight * 0.12,
    marginLeft: windowWidth * 0.1,
  }
});