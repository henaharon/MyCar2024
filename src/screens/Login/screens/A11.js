import React,{useState,useCallback} from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';
import backImage from '../../../assets/back.png';
import lockImage from '../../../assets/lock.png';
import LoginInput from '../components/LoginInput';
import Footer from '../components/Footer';
import CustomAlert from '../components/CustomAlert';

const A11Screen = ({ setProgress }) => {
    const [code, setCode] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleAlertClose = useCallback(() => {
        setAlertVisible(false);
    }, []);

    const handleSetCode = useCallback((newValue) => {
        setCode(newValue);
    }, []);

    const handleLogin = useCallback(() => {
        if (code !== '11111') {
            setAlertTitle('קוד אימות שגוי');
            setAlertMessage('אנא הזן קוד אימות תקין');
            setAlertVisible(true);
            return;
        }

        console.log('Code:', code);
        setProgress(1);
    }, [code]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageButton} onPress={() => setProgress(0)}>
                <Image style={styles.image} source={backImage} />
            </TouchableOpacity>
            <Text style={styles.text}>קוד היתחברות בן 5 ספרות שנשלח אלייך ל 555-947 201</Text>
            <View style={styles.LoginInput}>
                <LoginInput onlyNumbers={true} text='קוד אימות' image={lockImage} val={code} setVal={handleSetCode} />
            </View>
            <Footer handlePress={handleLogin} />

            <CustomAlert
                isVisible={alertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
                onBackdropPress={handleAlertClose}
            />
        </View>
    );
};

export default A11Screen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    imageButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 0,
        left: 0,
        margin: '5%',
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain',

    },
    LoginInput: {
        marginBottom: '35%',
    },
    text: {
        fontSize: 16,
        color: 'black',
        width: '80%',
        marginTop: '35%',

        },
});
