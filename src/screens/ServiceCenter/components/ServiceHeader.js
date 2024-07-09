import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ServiceHeader = ({ step, handleBack, handleNext, handleClose, title }) => (
    <View style={styles.serviceHeader}>
        <TouchableOpacity onPress={handleBack}>
            <Image source={require('../D1-2-assets/icons/Back.png')} style={styles.navButtonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {step < 5 && (
            <TouchableOpacity onPress={handleNext}>
                <Image source={require('../D1-2-assets/icons/Next.png')} style={styles.navButtonImage} />
            </TouchableOpacity>
        )}
        {step === 5 && (
            <TouchableOpacity onPress={handleClose}>
                <Image source={require('../D1-2-assets/icons/Close.png')} style={styles.navButtonImage} />
            </TouchableOpacity>
        )}
    </View>
);

const styles = StyleSheet.create({
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: windowWidth * 0.05,
    },
    title: {
        color: '#fff',
        fontSize: windowWidth * 0.05,
        textAlign: 'center',
    },
    navButtonImage: {
        width: windowWidth * 0.08,
        height: windowWidth * 0.08,
    },
});

export default ServiceHeader;
