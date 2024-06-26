import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LicenseTypeButton = ({ text, onPress, isSelected }) => {

    const handlePress = () => {
        onPress(text, !isSelected);
    };

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: isSelected ? 'blue' : 'transparent' }, { borderColor: isSelected ? 'transparent' : 'lightgray' }]}
            onPress={handlePress}
        >
            <Text style={[styles.text , { color: isSelected ? 'white' : 'black' }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LicenseTypeButton;