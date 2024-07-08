import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, } from 'react-native';

export const Requirement = ({ icon, paragraph }) => {
    return (
        <View style={styles.requirementsContainer}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={icon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{paragraph}</Text>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    requirementsContainer: {
        width: windowWidth * 0.9,
        gap: windowWidth * 0.03,
        flexDirection: 'row-reverse',
        marginBottom: windowHeight * 0.015,
    },
    iconContainer: {
        width: windowWidth * 0.1,
        height: windowHeight * 0.05,
        borderRadius: 50,
        backgroundColor: '#e7e6ec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: windowWidth * 0.06,
        height: windowHeight * 0.03,
    },
    textContainer: {
        width: windowWidth * 0.7,
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
    }
});

export default Requirement;
