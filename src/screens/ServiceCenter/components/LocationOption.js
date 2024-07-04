import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Image, Dimensions, StyleSheet, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LocationOption = ({ locationName, isSelected, onPress }) => {
    const [scaleValue] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[styles.locationOption, isSelected && styles.locationOptionPressed, { transform: [{ scale: scaleValue }] }]}>
            <TouchableOpacity
                style={styles.innerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
            >
                <View style={[styles.locationImg, isSelected && styles.locationImgSelected]}>
                    <Image source={require('../D1-2-assets/icons/location.png')} style={styles.locationIcon} />
                </View>
                <Text style={styles.locationText}>{locationName}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>בחירה</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    locationOption: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: windowWidth * 0.04,
        marginVertical: windowHeight * 0.01,
        borderRadius: windowWidth * 0.05,
        width: '100%',
        backgroundColor: '#EEEEEE',
    },
    locationOptionPressed: {
        backgroundColor: '#DDDCE1',
    },
    locationText: {
        fontSize: windowWidth * 0.04,
        color: '#000',
    },

    locationIcon: {
        width: windowWidth * 0.06,
        height: windowWidth * 0.06,
    },
    locationImg: {
        backgroundColor: '#D7D7D9',
        borderRadius: windowWidth * 0.5,
        padding: windowHeight * 0.02,
    },
    locationImgSelected: {
        backgroundColor: '#CBCAD0',
    },
    innerButton: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#E8585E',
        paddingVertical: windowWidth * 0.02,
        paddingHorizontal: windowWidth * 0.04,
        borderRadius: windowWidth * 0.05,
        marginTop: windowWidth * 0.02,
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.04,

    },
});

export default LocationOption;
