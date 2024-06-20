import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const Button = ({title,onPress}) => {
    const [bgColor, setBgColor] = useState('transparent'); 
    const [txtColor, setTxtColor] = useState('black');
    const [brdrColor, setBorderColor] = useState('#e6e6e9');

    return (
        <Pressable style={[styles.buttonContainer, {backgroundColor: bgColor, borderColor:brdrColor}]} onPress={onPress}
            onPressIn={()=> {
                setBgColor('#F05C62')
                setTxtColor('white')
                setBorderColor('#F05C62')
            }}
            onPressOut={()=> {
                setBgColor('transparent')
                setTxtColor('black')
                setBorderColor('#e6e6e9')
            }}>
            {/* <LinearGradient
            colors={['#E50075', '#F05C62']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonContainer}
        > */}
            <View style={styles.buttonTextContainer}>
            <Text style={[styles.buttonContainerText, {color:txtColor}]}>{title}</Text>
            </View>
        {/* </LinearGradient> */}
        </Pressable>
    );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '95%',
        height: windowHeight * 0.09,
        borderColor: '#e6e6e9',
        borderWidth: 3,
        borderRadius: 50,
        backgroundColor: 'transparent',
    },
    buttonTextContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '900',
    },
});
