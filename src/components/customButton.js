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
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
});

export default CustomButton;
