import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './GradientButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceCenterModal = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation();

    const handleGoHome = () => {
        setModalVisible(false);
        navigation.navigate('HomeStack', { screen: 'HomePage' });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>תודה</Text>
                    <Text style={styles.modalMessage}>קריאה נשלחה בהצלחה!</Text>
                    <GradientButton onPress={handleGoHome} text="צפיה בסטטוס הקריאה" />
                    <TouchableOpacity style={styles.modalLink} onPress={handleGoHome}>
                        <Text style={styles.modalLinkText}>אישור</Text>
                    </TouchableOpacity>
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
        width: '70%',
        padding: '5%',
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
    },
    modalTitle: {
        color: '#000',
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
        marginBottom: '2%',
    },
    modalMessage: {
        color: '#000',
        fontSize: windowWidth * 0.04,
        textAlign: 'center',
        marginBottom: '10%',
    },
    modalLink: {
        marginVertical: '5%',
    },
    modalLinkText: {
        color: '#0000FF',
        fontSize: windowWidth * 0.04,
        textAlign: 'center',
    },
});

export default ServiceCenterModal;
