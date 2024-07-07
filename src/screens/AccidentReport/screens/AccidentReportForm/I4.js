import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import EventHeader from '../../components/EventHeader';
import { FormHeader } from '../../components/FormHeader';

import { BaseView, BodyBaseView } from '../../../../uiKit/BaseView';
import Title from '../../components/Title';
import ChoiceInput from '../../components/ChoiceInput';
import { Input } from '../../components/Input';

const headerTitle = 'פרטי הנהג/ת';
const driverInvolvementTitle = 'מי נהג ברכב בזמן הארוע?';
const driverInfoTitle = 'פרטי הנהג/ת';
const driverNamePlaceholder = 'שם הנהג';
const IDNumberPlaceholder = 'מספר ת.ז';
const licenseNumberPlaceholder = 'מספר רשיון נהיגה';
const phonePlaceholder = 'טלפון';

const I4 = ({ setProgress }) => {
  return (
    // <BaseView>
    //     <View style={styles.contentWrapper}>
          /* <EventHeader>
            <FormHeader title={headerTitle} />
          </EventHeader> */
          <BodyBaseView style={styles.bodyContainer}>
            <View style={styles.driverInvolvementContainer}>
              <Title title={driverInvolvementTitle} />
              <ChoiceInput optionF={'נהג אחר/ת'} optionT={'אני נהגתי'} />
              <View style={styles.driverInfoContainer}>
                <Title title={driverInfoTitle} />
                <View style={styles.driverInfoForm}>
                  <Input
                    placeholder={driverNamePlaceholder}
                    required={true}
                    width={0.9}
                    type={''}
                  />
                  <Input
                    placeholder={IDNumberPlaceholder}
                    required={true}
                    width={0.9}
                    type={'number'}
                  />
                  <Input
                    placeholder={licenseNumberPlaceholder}
                    required={true}
                    width={0.9}
                    type={'number'}
                  />
                  <Input
                    placeholder={phonePlaceholder}
                    required={true}
                    width={0.9}
                    type={'number'}
                  />
                </View>
              </View>
            </View>
          </BodyBaseView>
    //     </View>
    // </BaseView>
  );
};

export default I4;

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
  driverInfoForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
  },
  driverInfoContainer: {
    marginTop: windowHeight * 0.03,
  },
  driverInvolvementContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    bottom: windowHeight * 0.12,
    marginLeft: windowWidth * 0.1,
  },
});
