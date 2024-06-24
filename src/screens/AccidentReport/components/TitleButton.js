import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export const TitleButton = ({ image, container }) => {
    return (

        <Pressable style={container}>
            <Image
                style={styles.icon}
                source={require(image)}
            />
        </Pressable>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    icon: {
        width: windowWidth * 0.08,
        height: windowWidth * 0.08,
    },
});

