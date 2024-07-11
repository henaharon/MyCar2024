import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

const closeIcon = require('../../assets/icons/E1/X.png');
const userIcon = require('../../assets/icons/E1/user.png');
const assistanceIcon = require('../../assets/icons/E1/assistance.png');
const imageIcon = require('../../assets/icons/E1/image.png');
const sendIcon = require('../../assets/icons/E1/send.png');

const RoadsideAssistance = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black'}}>
            <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 30 , color: 'white'}}>
                צ'אט
            </Text>
            <TouchableOpacity
                style={{ position: 'absolute', top: 30, right: 20 }}
                onPress={() => {
                    navigation.navigate('HomePage');
                }}
            >
                <Image source={closeIcon} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}>
                    <Text style={{ fontSize: 16, color: 'grey' }}>
                        חמישי 21 אוקטובר
                    </Text>
                </View>
                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 16, alignSelf: 'flex-end' }}>
                        <View style={{ maxWidth: '70%' }}>
                            <View style={{ backgroundColor: 'rgb(223, 101, 102)', borderRadius: 15, padding: 10 }}>
                                <Text style={{ color: 'white' }}>
                                    היי, שמי דן רונן ואני צריך שירות עבור הרכב שלי. אני ברחוב הראשי 123, תל אביב, 92109. אני זמין ב052-4341191
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12, color: 'grey', marginTop: 4, textAlign: 'right' }}>
                                10:01
                            </Text>
                        </View>
                        <Image source={userIcon} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 8 }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                        <Image source={assistanceIcon} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
                        <View style={{ maxWidth: '70%' }}>
                            <View style={{ backgroundColor: 'rgb(243, 231, 232)', borderRadius: 15, padding: 10 }}>
                                <Text style={{ color: 'black' }}>
                                    היי דן,
                                    אין בעיה בטיפול.
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12, color: 'grey', marginTop: 4 }}>
                                10:22
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 16, alignSelf: 'flex-end' }}>
                        <View style={{ maxWidth: '70%' }}>
                            <View style={{ backgroundColor: 'rgb(223, 101, 102)', borderRadius: 15, padding: 10 }}>
                                <Text style={{ color: 'white' }}>
                                    תודה רבה!
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12, color: 'grey', marginTop: 4, textAlign: 'right' }}>
                                10:22
                            </Text>
                        </View>
                        <Image source={userIcon} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 8 }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                        <Image source={assistanceIcon} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
                        <View style={{ maxWidth: '70%' }}>
                            <View style={{ backgroundColor: 'rgb(243, 231, 232)', borderRadius: 15, padding: 10 }}>
                                <Text style={{ color: 'black' }}>
                                    היי דן זה תזכורת אוטומטית עבור הפגישה הקרובה שלך. מתי: יום שלישי 5 במאי 16:30. טק: ג'ו אם יש לך עדכונים אנא פנה אלינו ב 800-555-5555 או השב להודעה זו
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12, color: 'grey', marginTop: 4 }}>
                                11:30
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderColor: 'lightgrey' }}>
                    <TouchableOpacity>
                        <Image source={sendIcon} style={{ width: 30, height: 30, marginRight: 8 ,borderRadius: 20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', left: 65 }}>
                        <Image source={imageIcon} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <TextInput
                        style={{ flex: 1, height: 40, borderColor: 'grey', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 }}
                        placeholder="הקלד הודעה..."
                    />
                </View>
            </View>
        </View>
    );
};

export default RoadsideAssistance;
