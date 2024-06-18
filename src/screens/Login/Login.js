import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import phoneImage from '../../assets/phone.png';
import mailImage from '../../assets/mail.png';
import carLogo from '../../assets/carLogo.png';
import LoginInput from './components/LoginInput';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomAlert from './components/CustomAlert'; // Ensure you have the correct path

const Login = () => {
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSetPhone = useCallback((newValue) => {
        setPhone(newValue);
    }, []);

    const handleSetMail = useCallback((newValue) => {
        setMail(newValue);
    }, []);

    const validatePhone = (phone) => {
        const phoneRegex = /^05\d{8}$/;
        return phoneRegex.test(phone);
    };

    const validateMail = (mail) => {
        const mailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return mailRegex.test(mail);
    };

    const handleLogin = useCallback(() => {
        if (!validatePhone(phone)) {
            setAlertTitle('Invalid phone number');
            setAlertMessage('Please enter a valid phone number');
            setAlertVisible(true);
            return;
        }

        if (!validateMail(mail)) {
            setAlertTitle('Invalid email');
            setAlertMessage('Please enter a valid Gmail address');
            setAlertVisible(true);
            return;
        }

        console.log('Phone:', phone, 'Mail:', mail);
    }, [phone, mail]);

    const handleAlertClose = useCallback(() => {
        setAlertVisible(false);
    }, []);

    return (
        <View style={styles.container}>
            <Header image={carLogo} text="להיתחברות לאפליקציות אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם" />
            <LoginInput onlyNumbers={true} text="מספר טלפון" image={phoneImage} val={phone} setVal={handleSetPhone} />
            <LoginInput onlyNumbers={false} text="כתובת מייל" image={mailImage} val={mail} setVal={handleSetMail} />
            <Footer handlePress={handleLogin} />
            
            <CustomAlert
                isVisible={alertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
                onBackdropPress={handleAlertClose} // Close on backdrop press
            />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: '20%',
        alignItems: 'center',
    },
});
