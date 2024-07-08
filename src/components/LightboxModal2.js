import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LightboxModal2 = ({ visible, onClose, title, buttons }) => {
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
                            {buttons.map((button, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={button.onPress}
                                    style={[styles.modalButton, index === buttons.length - 1 && styles.modalButtonLast]}
                                >
                                    <View style={styles.buttonContent}>
                                        <Icon name={button.icon} size={18} color={index === buttons.length - 1 ? button.textColor : "#000"} style={styles.icon} />
                                        <Text style={[styles.modalButtonText, index === buttons.length - 1 && { color: button.textColor }]}>{button.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal >
    );
}

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
        borderRadius: 10,
        maxWidth: 350,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#e3e3e3',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalButton: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
    },
    modalButtonLast: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 30,
    },
    modalButtonText: {
        textAlign: 'right',
        fontWeight: 'bold',
        marginRight: 10,
    },
    buttonContent: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        height: 20,
        width: 20,
    },
});

export default LightboxModal2;