import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ServiceButton = ({ icon, text, onPress, style }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={[styles.button, isPressed && styles.buttonPressed, style]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.text, isPressed && styles.textPressed]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ServiceButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        minWidth: 150,
        height: 150,
        borderWidth: 1,
        borderColor: '#E0E0E2',
    },
    buttonPressed: {
        backgroundColor: '#E8585E',
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 20,
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textPressed: {
        color: '#FFF',
    },
});

