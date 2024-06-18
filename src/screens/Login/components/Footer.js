import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import arrow from '../../../assets/arrow.png';

const Footer = ({ handlePress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.helpContainer}>
                <Text style={styles.helpText}>צריך עזרה?</Text>
                <Text style={styles.supportText}>יצירת קשר עם תמיכה</Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
                <Image style={styles.arrow} source={arrow} />
            </TouchableOpacity>
        </View>
    );
};

Footer.propTypes = {
    handlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    arrow: {
        height: 80,
        width: 80,
        margin: '1%',
    },
    helpContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    helpText: {
        fontSize: 16,
        color: 'black',
        width: '100%',
    },
    supportText: {
        fontSize: 16,
        color: 'blue',
    },
});

export default Footer;
