import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import MultiSelectInput from './MultiSelectInput';
import DateInput from './DateInput';
import GradiantButton from '../../Login/components/GradiantButton';
import FileInput from './FileInput';
import AlertModal from '../../Login/components/AlertModal';
import SuccessModal from './SuccessModal'; 

const Form = ({navigation, setIsLoggedIn }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [drivingLicense, setDrivingLicense] = useState('');
    const [drivingLicenseDate, setDrivingLicenseDate] = useState('');
    const [drivingLicenseType, setDrivingLicenseType] = useState([]);
    const [files, setFiles] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false); 

    const handleSetFirstName = useCallback((newValue) => {
        setFirstName(newValue);
    }, []);

    const handleSetLastName = useCallback((newValue) => {
        setLastName(newValue);
    }, []);

    const handleSetEmployeeId = useCallback((newValue) => {
        setEmployeeId(newValue);
    }, []);

    const handleSetBirthDate = useCallback((newValue) => {
        setBirthDate(newValue);
    }, []);

    const handleSetEmail = useCallback((newValue) => {
        setEmail(newValue);
    }, []);

    const handleSetPhone = useCallback((newValue) => {
        setPhone(newValue);
    }, []);

    const handleSetDrivingLicense = useCallback((newValue) => {
        setDrivingLicense(newValue);
    }, []);

    const handleSetDrivingLicenseDate = useCallback((newValue) => {
        setDrivingLicenseDate(newValue);
    }, []);

    const handleSetDrivingLicenseType = useCallback((newSelectedOptions) => {
        setDrivingLicenseType(newSelectedOptions);
    }, []);

    const handleSetFiles = useCallback((newFiles) => {
        setFiles(newFiles);
    }, []);

    const handleAlertClose = useCallback(() => {
        setAlertVisible(false);
    }, []);

    const onSubmit = useCallback(() => {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Employee ID:', employeeId);
        console.log('Birth Date:', birthDate);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Driving License:', drivingLicense);
        console.log('Driving License Date:', drivingLicenseDate);
        console.log('Driving License Type:', drivingLicenseType);
        console.log('Files:', files);
        if(firstName === '' || lastName === '' || employeeId === '' || email === '' ) {
            setAlertTitle('שדות חובה ריקים');
            setAlertMessage('אנא מלא את כל השדות המסומנים בכוכבית');
            setAlertVisible(true);
            return;
        }
        setSuccessModalVisible(true);
    }, [firstName, lastName, employeeId, birthDate, email, phone, drivingLicense, drivingLicenseDate, drivingLicenseType, files]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>פרטים כלליים</Text>
            <FormInput text="שם פרטי *" val={firstName} setVal={handleSetFirstName} />
            <FormInput text="שם משפחה *" val={lastName} setVal={handleSetLastName} />
            <FormInput onlyNumbers={true} text="מספר עובד *" val={employeeId} setVal={handleSetEmployeeId} />
            <View style={styles.line} />
            <Text style={styles.title}>פרטי התקשורת</Text>
            <DateInput text="תאריך לידה" val={birthDate} setVal={handleSetBirthDate} />
            <FormInput text="כתובת מייל *" val={email} setVal={handleSetEmail} />
            <FormInput text="טלפון" val={phone} setVal={handleSetPhone} />
            <View style={styles.line} />
            <Text style={styles.title}>פרטי רישיון נהיגה</Text>
            <FormInput text="מספר רישיון נהיגה" val={drivingLicense} setVal={handleSetDrivingLicense} />
            <DateInput text="תקוף רישיון נהיגה" val={drivingLicenseDate} setVal={handleSetDrivingLicenseDate} />
            <MultiSelectInput
                text="סוג רישיון נהיגה"
                selectedOptions={drivingLicenseType}
                setSelectedOptions={handleSetDrivingLicenseType}
                options={['A2', 'B', 'C1', 'D3']}
            />
            <View style={styles.line} />
            <Text style={styles.title}>מסמכים</Text>
            <FileInput text={'צילום העתק רישיון נהיגה'} onFileSelect={handleSetFiles} />
            <GradiantButton text="שמירה והמשך" onPress={onSubmit} />
            <AlertModal
                isVisible={alertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={() => setAlertVisible(false)}
                onBackdropPress={() => setAlertVisible(false)}
            />
            <SuccessModal
                visible={successModalVisible}
                onClose={() => {
                    setSuccessModalVisible(false);
                    setIsLoggedIn(true);  
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100vh',
        padding: '5%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '80%',
        marginTop: '5%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '5%',
        alignItems: 'flex-start',
        width: '80%',
    },
});

export default Form;
