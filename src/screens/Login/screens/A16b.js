import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import exitImage from '../../../assets/exit.png';
import carLogo from '../../../assets/carLogo.png';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import Button from '../components/Button';

const A16bScreen = ({ setProgress }) => {
    const [isSecondOptionSelected, setIsSecondOptionSelected] = useState(false);

    const handleEnter = () => {
        // Check if only the second option is selected
        if (isSecondOptionSelected) {
            console.log('Only the second option is checked');
            setProgress(3);
        }
        
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.imageButton} onPress={() => setProgress(0)}>
                <Image style={styles.image} source={exitImage} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Header image={carLogo} text='תנאי שימוש' size={24} bold={true} />
            </View>
            <View style={styles.line}/>
            <Text style={styles.text}>לפני שנתחיל אנא קראו את תנאי השימוש באפליקציה</Text>
            <Inputs onCheckSecondOption={(isSelected) => setIsSecondOptionSelected(isSelected)} />
            <View style={styles.Button}>
                <Button text='אישור והמשך' onPress={() => handleEnter()} />
            </View>
        </View>
    );
};

export default A16bScreen;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: '20%',
    },
    imageButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 0,
        left: 0,
        margin: '5%',
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '80%',
        marginTop: '5%',
    },
    text: {
        fontSize: 14,
        width: '80%',
        marginTop: '5%',
        textAlign: 'center',
    },
    Button: {
        width: '100%',
        alignItems: 'center',
        marginTop: '20%',
    }
});
