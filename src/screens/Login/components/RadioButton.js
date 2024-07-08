import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TermsLink from './TermsLink';

const RadioButton = ({ selected, onPress, label,modalTitle }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
            <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
                {selected && <View style={styles.radioButtonInner} />}
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <TermsLink
                    modalTitle={modalTitle}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        borderColor: '#2196F3',
    },
    radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
    },
    labelContainer: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        flexWrap: 'wrap',  // Allow wrapping if needed
    },
    radioButtonLabel: {
        marginRight: 5,
        flexShrink: 1, // Allow the label to shrink if needed
    },
});

export default RadioButton;
