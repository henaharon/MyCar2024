import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const loadingGif = require('../../assets/icons/E1/loading.gif');

const ConnectToChat = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('RoadsideAssistance');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="rgb(223, 102, 102)" style={styles.loader} />
                </View>
                <Text style={styles.title}>מתחבר לצ'אט...</Text>
                <Text style={styles.description}>
                    מיד תחוברו לשיחת צ'אט עם נציג שירות.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('HardwareIntro');
                    }}
                >
                    <Text style={styles.buttonText}>ביטול</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        top: 50,
    },
    loaderContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(243, 231, 232)',
        borderRadius: 15,
        transform: [{ rotate: '45deg' }],
        marginBottom: 20,
    },
    loader: {
        transform: [{ rotate: '90deg' }],
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: 'black',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
        color: 'black',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        backgroundColor: 'rgb(211, 45, 31)',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default ConnectToChat;
