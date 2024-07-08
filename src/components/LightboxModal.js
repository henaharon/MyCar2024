import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

const LightboxModal = ({ visible, onClose, title, text, buttons }) => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalOverlay}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{title}</Text>
                            <Text style={styles.modalText}>{text}</Text>
                            <View style={styles.buttonContainer}>
                                {buttons.map((button, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={button.onPress}
                                        style={[styles.button, (button.gradient || button.backgroundColor) && styles.gradientButton]}
                                    >
                                        {index === 0 && button.gradient ? (
                                            <LinearGradient
                                                colors={['#e40c78', '#f05464']}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }}
                                                style={styles.buttonGradient}
                                            >
                                                <Text style={styles.gradientButtonText}>{button.name}</Text>
                                            </LinearGradient>
                                        ) : index === 0 && button.backgroundColor ? (
                                            <View style={[styles.buttonGradient, { backgroundColor: button.backgroundColor }]}>
                                                <Text style={styles.gradientButtonText}>{button.name}</Text>
                                            </View>
                                        ) : (
                                            <Text style={styles.buttonText}>{button.name}</Text>
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 40,
        maxWidth: 350,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    buttonContainer: {
        width: '100%',
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'transparent',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    gradientButton: {
        backgroundColor: 'transparent',
    },
    buttonGradient: {
        borderRadius: 50,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'blue',
        fontWeight: 'normal',
        fontSize: 18,
    },
    gradientButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default LightboxModal;