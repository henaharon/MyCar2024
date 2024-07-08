import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export const TitleHeader = ({ title }) => {
    return (
        <View style={styles.headerTextContainer}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>

    );
};


const styles = StyleSheet.create({
    headerTextContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16,
    },
});

