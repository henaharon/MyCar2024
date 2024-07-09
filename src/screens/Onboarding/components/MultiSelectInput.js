import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const MultiSelectInput = ({ text, options, selectedOptions, setSelectedOptions }) => {
    const handleOptionToggle = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{text}</Text>
            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.option,
                            selectedOptions.includes(option) && styles.optionSelected
                        ]}
                        onPress={() => handleOptionToggle(option)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedOptions.includes(option) && styles.optionTextSelected
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E1E1E3',
        margin: '3%',
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    optionsContainer: {
        maxHeight: 150,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E1E1E3',
        backgroundColor: '#FFFFFF',
    },
    optionSelected: {
        backgroundColor: '#E75060',
        borderColor: '#E75060',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    optionTextSelected: {
        color: '#FFFFFF',
    },
});

export default MultiSelectInput;
