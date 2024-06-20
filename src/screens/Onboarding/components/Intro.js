import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import imageProfile from '../../../assets/profile.png';
import Button from './Button';

const Intro = ({ setProgress }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageProfile} />
            <Text style={styles.title}>נעים להכיר</Text>
            <Text style={styles.text}>אפליקציית MyCar מאפשרת לך להינות מחווית משתמש דיגיטליים מתקדמים המותאמים במיוחד עבורך.</Text>
            <Text style={styles.text}>נשמח להכיר אותך טוב יותר כך שנוכל להעניק לך את החוויה המותאמת והטובה ביותר בישבילך.</Text>
            <View style={styles.Button}>
                <Button text='הגדרת חשבון חדש' onPress={setProgress} />
            </View>
        </View>
    );
};

export default Intro;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20%',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '10%',
        color: 'white',
    },
    text: {
        fontSize: 16,
        color: 'white',
        width: '80%',
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '10%',
    },
    Button: {
        width: '100%',
        alignItems: 'center',
        marginTop: '13%',
    }
});
