// CustomAlert.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomAlert = ({ isVisible, title, message, onClose, onBackdropPress }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#DE136C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomAlert;
