import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LoginInput = ({ onlyNumbers = false, text, val, setVal }) => {
    return (
        <View style={styles.textContainer}>
            <TextInput
                placeholder={text}
                value={val}
                onChangeText={setVal}
                style={styles.textInput}
                keyboardType={onlyNumbers ? 'numeric' : 'default'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E1E1E3',
        margin: '3%',
        flexDirection: 'row-reverse', // Change the direction of the row if needed
        alignItems: 'center',
    },
    inputImage: {
        height: 30,
        width: 30,
        margin: 8,
    },
    textInput: {
        flex: 1,
        height: 40,
        margin: 8,
        textAlign: 'right',
    },
});

export default LoginInput;
