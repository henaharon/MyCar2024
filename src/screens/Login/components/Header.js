import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({image,text}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        margin: '1%',
        resizeMode: 'contain',
    },
    text: {
        width: '80%',
        fontSize: 16,
        color: 'black',
    },
    container: {
        width: '100%',
        alignItems: 'center',
    },
});

export default Header;