import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import PropTypes from 'prop-types';

const DateInput = ({ text, val, setVal }) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date(val || Date.now()));

    const handleConfirm = (selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
        setVal(selectedDate.toISOString().split('T')[0]);
    };

    return (
        <View style={styles.textContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <Text style={styles.dateText}>{val}</Text>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={handleConfirm}
                onCancel={() => setOpen(false)}
                mode="date"
            />
        </View>
    );
};

DateInput.propTypes = {
    text: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired,
    setVal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    textContainer: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E1E1E3',
        margin: '3%',
        padding: 10,
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
        fontSize: 16,
    },
    dateText: {
        fontSize: 16,
        color: '#000',
    },
});

export default DateInput;