import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const closeIcon = require('../../assets/icons/E1/X.png');
const addIcon = require('../../assets/icons/E1/chat.png');
const backgroundImage = require('../../assets/images/E1_bg.jpg');

const HardwareIntro = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
                <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 30 , color: 'white'}}>
                    אביזרים
                </Text>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 30, right: 20 }}
                    onPress={() => {
                        navigation.navigate('HomePage');
                    }}
                >
                    <Image source={closeIcon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={{ flex: 1, top: -15, backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ alignItems: 'flex-end', width: '90%', top: 15 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: 'black' }}>
                        זקוקים לשירות?
                    </Text>
                    <Text style={{ fontSize: 16, marginBottom: 16, color: 'black' }}>
                        הסבר / נוהל טיפול באביזרי מולטימדיה, חיישנים ומצלמות. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף.
                    </Text>
                    <View style={{ width: '90%', height: 1, backgroundColor: 'rgba(169, 169, 169, 0.6)', top: 30 }} />
                </View>
            </View>

            <TouchableOpacity
                style={{ 
                    backgroundColor: 'rgb(243, 231, 232)', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 16, 
                    borderRadius: 10,
                    position: 'absolute',
                    bottom: 40,
                    alignSelf: 'center'
                }}
                onPress={() => {
                    navigation.navigate('ConnectToChat');
                }}
            >
                <Image source={addIcon} style={{ width: 70, height: 70, marginBottom: 8 }} />
                <Text style={{ color: 'black', fontSize: 18, fontWeight:'bold', textAlign: 'center' , width: '70%'}}>
                    הזמנת טיפול באמצעות צ'אט עם נציג
                </Text>
            </TouchableOpacity>


        </View>
    );
};

export default HardwareIntro;
