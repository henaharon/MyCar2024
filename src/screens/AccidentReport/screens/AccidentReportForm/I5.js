import React, {useState , useCallback} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import EventHeader from '../../components/EventHeader';
import {FormHeader} from '../../components/FormHeader';
import Title from '../../components/Title';
import {Input} from '../../components/Input';
import FileInput from '../../components/FileInput';

import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';

const headerTitle = `צד ג'`;
const driverInfoTitle = `פרטי נהג צד ג'`;
const carOwerPlaceholder = 'שם בעל הרכב';
const IDNumberPlaceholder = 'מספר ת.ז';
const emailPlaceholder = 'כתובת מייל';
const addressPlaceholder = 'כתובת מגורים';
const phonePlaceholder = 'טלפון';
const carInfoTitle = `פרטי רכב צד ג'`;
const carModelPlaceholder = 'דגם רכב';
const carNumberPlaceholder = 'מספר רכב';
const insurenceTitle = 'פרטי ביטוח צד ג\'';
const insurenceCompanyPlaceholder = 'שם חברת הביטוח';
const policyNumberPlaceholder = 'מספר פוליסת ביטוח';
const documentTitle = `מסמכים - נהג צד ג'`;
const documentPlaceholder = 'הוספת מסמך';

const I5 = () => {
    const [selectedFile, setSelectedFile] = useState([]);
    const handleSetFiles = useCallback((newFiles) => {
        setSelectedFile(newFiles);
    }, []);
  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentWrapper}>
          <EventHeader>
            <FormHeader title={headerTitle}/>
          </EventHeader>
          <BodyBaseView style={styles.bodyContainer}>
            <Title title={driverInfoTitle} />
            <Input
              placeholder={carOwerPlaceholder}
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
              placeholder={emailPlaceholder}
              required={false}
              width={0.9}
              type={'email'}
            />
            <Input
              placeholder={addressPlaceholder}
              required={false}
              width={0.9}
              type={''}
            />
            <Input
              placeholder={phonePlaceholder}
              required={true}
              width={0.9}
              type={'number'}
            />

            <View style={styles.DecorativeLine} />

            <Title title={carInfoTitle} />
            <Input
              placeholder={carModelPlaceholder}
              required={false}
              width={0.9}
              type={''}
            />
            <Input
              placeholder={carNumberPlaceholder}
              required={true}
              width={0.9}
              type={'number'}
            />

            <View style={styles.DecorativeLine} />

            <Title title={insurenceTitle} />
            <Input
              placeholder={insurenceCompanyPlaceholder}
              required={false}
              width={0.9}
              type={''}
            />
            <Input
              placeholder={policyNumberPlaceholder}
              required={true}
              width={0.9}
              type={'number'}
            />

            <View style={styles.DecorativeLine} />
            <Title title={documentTitle} />
            <View style={styles.fileInputContainer}>
                <FileInput text={"צילום רשיון נהיגה"} onFileSelect={handleSetFiles}/>
                <FileInput text={"צילום ספח ביטוח"} onFileSelect={handleSetFiles}/>
                <FileInput text={"צילום ספח ביטוח"} onFileSelect={handleSetFiles}/>
            </View>

          </BodyBaseView>
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default I5;

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
  fileInputContainer: {
    gap: 5,
    position: 'relative',
    bottom: windowHeight * 0.02
  },
});