import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const Title = ({ title }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    titleContainer: {
        width: windowWidth * 0.9,
        marginBottom: windowHeight * 0.02,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default Title;
