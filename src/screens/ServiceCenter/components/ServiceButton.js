import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceButton = ({ icon, text, onPress, style }) => {
    const [scaleValue] = useState(new Animated.Value(1));
    const [isActive, setIsActive] = useState(false);

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
        setIsActive(true);
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
        setIsActive(false);
    };

    const handlePress = () => {
        onPress();
    };

    return (
        <Animated.View style={[styles.button, isActive && styles.buttonPressed, style, { transform: [{ scale: scaleValue }] }]}>
            <TouchableOpacity
                style={styles.innerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={handlePress}
            >
                <Image source={icon} style={styles.icon} />
                <Text style={[styles.text, isActive && styles.textPressed]}>{text}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default ServiceButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    innerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
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
