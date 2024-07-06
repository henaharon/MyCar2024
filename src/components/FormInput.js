import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeholder, error, formIsValid }) => {
    return (
        <View style={[styles.fieldSet, error ? {marginBottom:48} : {}]}>
            <Text style={styles.legend}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
            {error && <Text style={styles.errorsText}>{error}</Text>}
            {formIsValid ? (
                <View style={styles.validationLabel}>
                    <Text style={styles.validationText}>פרטים נשמרו בהצלחה</Text>
                </View>
            ) : null}
        </View>
        
    );
};

const styles = StyleSheet.create({
    input: {
        textAlign: 'right',
        height: 56,
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
        borderColor: 'lightgray',
    },
    legend: {
        position: 'absolute',
        top: -10,
        right: 10,
        backgroundColor: '#FFFFFF',
        color: 'black',
    },
    errorsText: {
        color: 'red',
        fontSize: 12,
        textAlign: 'right',
        marginBottom:36,
    },
    validationLabel: {
        backgroundColor: '#c7edca',
        marginTop: -16,
        marginBottom:24,
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 50,
        alignSelf: 'center',
    },
    validationText: {
        color: 'green',
        fontWeight: 'bold',
    },
});

export default CustomTextInput;
