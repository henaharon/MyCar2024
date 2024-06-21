import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";

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

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                value={surname}
                onChangeText={setSurname}
                placeholder="Surname"
            />
            <TextInput
                style={styles.input}
                value={idNumber}
                onChangeText={setIdNumber}
                placeholder="ID Number"
            />
            <TextInput
                style={styles.input}
                value={dob}
                onChangeText={setDob}
                placeholder="Date of Birth"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
            />
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                value={licenseNumber}
                onChangeText={setLicenseNumber}
                placeholder="License Number"
            />
            <TextInput
                style={styles.input}
                value={licenseExpiry}
                onChangeText={setLicenseExpiry}
                placeholder="License Expiry Data"
            />
            <TextInput
                style={styles.input}
                value={licenseType}
                onChangeText={setLicenseType}
                placeholder="License Type"
            />
            <Button title="Save" onPress={saveProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 16,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
});

export default ProfileForm;