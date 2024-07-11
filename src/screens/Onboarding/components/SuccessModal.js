import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GradiantButton from './GradiantButton';

const SuccessModal = ({ visible, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <Image source={require('../../../assets/a1ab-onboarding-login-assets/carLogo.png')} style={styles.logo} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.modalTitle}>החוויה שלך{'\n'}מתחילה כאן!</Text>
                        <Text style={styles.modalText}>הגדרת החשבון הושלמה בהצלחה והאפליקציה מוכנה לשימוש. אנחנו מאחלים לך נסיעה טובה וחווית שירות מעולה.</Text>
                        <View style={styles.Button}>
                            <GradiantButton text='מעבר למסך הבית' onPress={onClose} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: "80%",
        borderRadius: 50,
        alignItems: 'center',
        overflow: 'hidden',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F6E9E8',
        paddingVertical: 20,
    },
    body: {
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    logo: {
        width: 175,
        height: 150,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    Button: {
        width: '100%',
        alignItems: 'center',
        marginTop: '2%',
    }
});

export default SuccessModal;
