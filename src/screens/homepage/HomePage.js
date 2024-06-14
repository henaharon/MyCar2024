import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
const backgroundShape = require('../../assets/images/backgorund3.png');
const backgroundShape1 = require('../../assets/images/backgroundShape1.png');
const carImage = require('../../assets/images/Car.png');
const sunImage = require('../../assets/images/sun.png');
const first = require('../../assets/images/f.png');
const second = require('../../assets/images/s.png');
const third = require('../../assets/images/t.png');
const forth = require('../../assets/images/forth.png');
const fith = require('../../assets/images/fith.png');
const six = require('../../assets/images/six.png');
const seven = require('../../assets/images/seven.png');
const Rental = require('../../assets/images/Rental.png');
const DashedLine = () => {
    return (
        <View style={styles.dashedLineContainer}>
            <View style={styles.dashedLine} />
        </View>
    );
};

const ListComponent = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.horizontalScrollViewContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >   
             <View style={styles.box}>
                <Image source={seven} style={styles.Listlogo} />
                <Text style={styles.name}>שטיפת רכב</Text>
            </View>
             <View style={styles.box}>
                <Image source={six} style={styles.Listlogo} />
                <Text style={styles.name}> רכב חשמלי</Text>
            </View>
            <View style={styles.box}>
                <Image source={fith} style={styles.Listlogo} />
                <Text style={styles.name}>צמיגים ופנצריות</Text>
            </View>
            <View style={styles.box}>
                <Image source={forth} style={styles.Listlogo} />
                <Text style={styles.name}> אביזרים</Text>
            </View>
            <View style={styles.box}>
                <Image source={third} style={styles.Listlogo} />
                <Text style={styles.name}> זמן שירותי מוסך</Text>
            </View>
            {/* Add more list items as needed */}
            <View style={styles.box}>
                <Image source={second} style={styles.Listlogo} />
                <Text style={styles.name}> תקלות בדרך</Text>
            </View>
            <View style={styles.box}>
                <Image source={first} style={styles.Listlogo} />
                <Text style={styles.name}>צאט עם נציג</Text>
            </View>
        </ScrollView>
    );
};

const SecondListComponent = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.horizontalScrollViewContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
               
            </View>
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
                
            </View>
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
                
            </View>
            {/* Add more list items as needed */}
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
                
            </View>
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
                
            </View>
            <View style={styles.Sbox}>
            <Text style={styles.Secondname}>כותרת הודעה / קמפיין</Text>
                <Image source={Rental} style={styles.SecondListlogo} />
                
            </View>
        </ScrollView>
    );
};

const HomePage = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground source={backgroundShape} style={styles.backgroundImage}>
                    <View style={styles.sideMenuButton}>
                        <Image source={require('../../assets/images/menu.png')} style={{ width: 24, height: 24 }} />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text1}>קבלת שירות</Text>
                            <Text style={styles.text2}>בחרו שירות לרכב שלכם</Text>
                        </View>
                        <Image source={carImage} style={styles.carImage} />
                        <ImageBackground source={backgroundShape1} style={styles.backgroundShape1} />
                        <ListComponent />
                        <DashedLine />
                        <View style={styles.bottomContainer}>
                            <Text style={styles.bottomText}>עדכונים וחדשות</Text>
                        </View>
                        <SecondListComponent />
                        <DashedLine />
                        <View style={styles.SbottomContainer}>
                            <Text style={styles.SbottomText}> השאלת רכבים</Text>
                            <Image source={carImage} style={styles.carImage} />
                        </View>
                        <DashedLine />
                        <View style={styles.SbottomContainer}>
                            <Text style={styles.SbottomText}>  תאונות וחירום</Text>
                            <Image source={carImage} style={styles.carImage} />
                        </View>
                        <Image source={sunImage} style={styles.sun} />
                    </View>
                </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    horizontalScrollViewContent: {
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    wrapper: {
        width: '100%',
        height:'100%',
        alignItems: 'center',
        
    },
    sideMenuButton: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    textContainer: {
        width: '100%',
        top: 370,
        right: 20,     
    },
    text1: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    backgroundShape1: {
        width: '70%',
        aspectRatio: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 290,

    },
    carImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    SboxContainer: {
        flexDirection: 'row',
        paddingLeft: 20,

        
    },
    boxContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        // height:100, 
       
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 190,
        height: 190,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
    },
    Sbox: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 350,
        height: 350,
        marginRight: 10,
        
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    Listlogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    SecondListlogo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    name: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color:'black',
    },
    Secondname: {
        marginTop: 5,
        fontSize: 16,
        width:'100%',
        fontWeight: 'bold',
        color:'black',
       

    },
    dashedLineContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    dashedLine: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'dashed',
    },
    bottomContainer: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        marginVertical: 20,
    },
    bottomText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    SbottomContainer: {
        width: '95%',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 20,
        height: 200,
        borderRadius: 10,
        zIndex:1,
        
    },
    SbottomText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    sun: {
        width: 245,
        height: 245,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});

export default HomePage;
