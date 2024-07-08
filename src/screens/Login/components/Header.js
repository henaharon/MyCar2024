import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ image, text, size = 16, bold = false }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={[styles.text, { fontSize: size, fontWeight: bold ? 'bold' : 'normal' }]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    image: {
        height: 200,
        margin: '1%',
        resizeMode: 'contain',
    },
    text: {
        width: '80%',
        color: 'black',
        textAlign: 'center',
    },
});

export default Header;
