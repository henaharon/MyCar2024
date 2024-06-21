import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import Divider from "./Divider";
import CustomButton from "./customButton";
import documentIcon from "../assets/icons/documenticon.png";
import licenseStatusIcon from "../assets/icons/checkmarkicon.png";

const ProfileForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseExpiry, setLicenseExpiry] = useState('');
    const [licenseType, setLicenseType] = useState('');

    const saveProfile = () => {
        // add save logic
    };

    var bottomButtonText = 'עודכן 20.06.2020';
    return (
        <View style={styles.formContainer}>
            <Text style={styles.subHeader}>פרטים כלליים</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>שם פרטי</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="שלמה"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>שם משפחה</Text>
                <TextInput
                    style={styles.input}
                    value={surname}
                    onChangeText={setSurname}
                    placeholder="ארצי"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>מספר עובד</Text>
                <TextInput
                    style={styles.input}
                    value={idNumber}
                    onChangeText={setIdNumber}
                    placeholder="123456"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>תאריך לידה</Text>
                <TextInput
                    style={styles.input}
                    value={dob}
                    onChangeText={setDob}
                    placeholder="1.1.1990"
                />
            </View>
            <Divider />
            <Text style={styles.subHeader}>פרטי התקשורת</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>כתובת מייל</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@gmail.com"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>טלפון</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="0547883116"
                />
            </View>
            <Divider />
            <Text style={styles.subHeader}>פרטי רישיון נהיגה</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>מספר רישיון נהיגה</Text>
                <TextInput
                    style={styles.input}
                    value={licenseNumber}
                    onChangeText={setLicenseNumber}
                    placeholder="8427081"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>תוקף רישיון נהיגה</Text>
                <TextInput
                    style={styles.input}
                    value={licenseExpiry}
                    onChangeText={setLicenseExpiry}
                    placeholder="23.5.2025"
                />
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>סוג רישיון נהיגה</Text>
                <TextInput
                    style={styles.input}
                    value={licenseType}
                    onChangeText={setLicenseType}
                    placeholder=""
                />
            </View>
            <Divider />
            <Text style={styles.subHeader}>מסמכים</Text>
            <View style={styles.buttonContainer}>
                <CustomButton
                    onPress={() => { }}
                    buttonStyle={styles.customButton}
                    textStyle={styles.customButtonText}
                >
                    <Image source={documentIcon} style={styles.rightIcon} />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonTextTop}>צילום העתק רישיון נהיגה</Text>
                        <Text style={styles.buttonTextBottom}>{bottomButtonText}</Text>
                    </View>
                    <Image source={licenseStatusIcon} style={styles.leftIcon} />
                </CustomButton>
            </View>
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    subHeader: {
        fontSize: 20,
        marginBottom: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        textAlign: 'right',
        height: 56,
        marginBottom: 24,
        border: 'none',
        width: '100%',
        paddingHorizontal: 8,
        color: 'black',
    },
    fieldSet: {
        height: 56,
        marginBottom: 24,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: 'lightgray',
    },
    legend: {
        position: 'absolute',
        top: -10,
        right: 10,
        backgroundColor: '#FFFFFF',
        color: 'black',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 24,
    },
    customButton: {
        flexDirection: 'row-reverse',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    customButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextTop: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonTextBottom: {
        fontSize: 12,
        color: 'green',
    },
    rightIcon: {
        width: 32,
        height: 32,
        marginLeft: 25,
    },
    leftIcon: {
        width: 12,
        height: 12,
    },
});

export default ProfileForm;