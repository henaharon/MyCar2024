import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const GradientButton = ({ onPress, text }) => {
    return (
        <LinearGradient
            colors={['#DD0370', '#E22D66', '#E7525F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
        >
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        borderRadius: 25,
        marginBottom: '5%',
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.04,
        textAlign: 'center',
    },
});

export default GradientButton;