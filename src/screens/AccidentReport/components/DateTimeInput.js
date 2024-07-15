import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import DatePicker from 'react-native-date-picker';
import PropTypes from 'prop-types';

const DateTimeInput = ({ text, width, type, required }) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [value, setValue] = useState('');

    const handleConfirm = (selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
        if(type === 'time') {
            setValue(selectedDate.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: false }));
        } else {
            const day = selectedDate.getDate().toString().padStart(2, '0');
            const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
            const year = selectedDate.getFullYear();
            setValue(`${day}/${month}/${year}`);
        // setValue(selectedDate.toISOString().split('T')[0]);
        }
    };

    const inputWidth = width * Dimensions.get('window').width;

    return (
        <View style={[styles.textContainer, {width:inputWidth}]}>
            <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <Text style={styles.dateText}>{value}</Text>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={handleConfirm}
                onCancel={() => setOpen(false)}
                mode={type}
            />
             {required && !value && (
                <Text style={styles.asterisk}>*</Text>
            )}
        </View>
    );
};

DateTimeInput.propTypes = {
    text: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
    textContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E1E1E3',
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#E75060',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    dateText: {
        fontSize: 18,
        color: '#000',
    },
    asterisk: {
        position: 'absolute',
        color: 'red',
        right: 15,
        fontSize: 18,
    },
});

export default DateTimeInput;