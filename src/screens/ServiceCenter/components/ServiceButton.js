import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceButton = ({ icon, text, onPress, style }) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(true);
        onPress();
        setTimeout(() => {
            setIsActive(false);
        }, 200);
    };

    return (
        <TouchableOpacity
            style={[styles.button, isActive && styles.buttonPressed, style]}
            onPress={handlePress}
        >
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.text, isActive && styles.textPressed]}>{text}</Text>
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
        padding: windowWidth * 0.02,
        margin: windowWidth * 0.01,
        borderRadius: 10,
        minWidth: windowWidth * 0.2,
        height: windowHeight * 0.2,
        borderWidth: 1,
        borderColor: '#E0E0E2',
    },
    buttonPressed: {
        backgroundColor: '#E8585E',
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: windowWidth * 0.02,
    },
    text: {
        color: '#000',
        fontSize: windowWidth * 0.04,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textPressed: {
        color: '#FFF',
    },
});
