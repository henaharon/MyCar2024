import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradiantButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>

            <LinearGradient
                colors={['#DD0370', '#E22D66', '#E7525F']}
                style={styles.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default GradiantButton;