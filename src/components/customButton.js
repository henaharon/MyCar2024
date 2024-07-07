import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

const CustomButton = ({ onPress, children, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',

    },
});

export default CustomButton;
