import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from './RadioButton'; // Adjust the import path as necessary

const Inputs = ({ onCheckSecondOption }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectOption = (option) => {
        // Check if the option is already selected
        const isSelected = selectedOptions.includes(option);

        if (isSelected) {
            // Deselect the option
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            // Select the option
            setSelectedOptions([...selectedOptions, option]);
        }

        // Notify parent component if second option is selected
        if (option === '* אישור') {
            onCheckSecondOption(!isSelected);
        }
    };

    return (
        <View style={styles.container}>
            <RadioButton
                selected={selectedOptions.includes('אני מעוניין לקבל דיוור על מבצעים השקעות, אירועים מיוחדים וכו\'')}
                onPress={() => handleSelectOption('אני מעוניין לקבל דיוור על מבצעים השקעות, אירועים מיוחדים וכו\'')}
                label={'אני מעוניין לקבל דיוור על מבצעים השקעות, אירועים מיוחדים וכו\''}
                modalTitle={"תנאי דיוור"}
            />
            <RadioButton
                selected={selectedOptions.includes('* אישור')}
                onPress={() => handleSelectOption('* אישור')}
                label={'* אישור'}
                modalTitle={"תנאי שימוש באפליקציה"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});

export default Inputs;
