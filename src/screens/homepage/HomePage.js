import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const backgroundShape = require('../../assets/images/backgorund3.png');
const backgroundShape1 = require('../../assets/images/backgroundShape1.png');
const carImage = require('../../assets/images/Car.png');

const DashedLine = () => {
    return (
        <View style={styles.dashedLineContainer}>
            <View style={styles.dashedLine} />
        </View>
    );
};

const ListComponent = () => {
    const scrollViewRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(200);

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        setScrollOffset(offsetX);
    };

    const scrollToOffset = (offset) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: offset, y: 0, animated: true });
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollViewContent}
            horizontal={true}
            onScroll={handleScroll}
            scrollEventThrottle={16} // Adjust the throttle value as needed
        >
            <View style={styles.boxContainer}>
                {/* Your list items */}
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                {/* Add more list items */}
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
                <View style={styles.box}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>שטיפת רכב</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const SecondListComponent = () => {
    const scrollViewRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(200);

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        setScrollOffset(offsetX);
    };

    const scrollToOffset = (offset) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: offset, y: 0, animated: true });
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollViewContent}
            horizontal={true}
            onScroll={handleScroll}
            scrollEventThrottle={16} // Adjust the throttle value as needed
        >
            <View style={styles.SboxContainer}>
                {/* Your list items */}
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
                {/* Add more list items */}
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}> כותרת הודעה / קמפיין</Text>
                </View>
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
                <View style={styles.Sbox}>
                    {/* Logo */}
                    <Image source={carImage} style={styles.logo} />
                    {/* Name */}
                    <Text style={styles.name}>כותרת הודעה / קמפיין</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const HomePage = () => {
    return (
       
        <ImageBackground source={backgroundShape} style={styles.backgroundImage}>
            <View style={styles.container}>
                {/* Side Menu Button */}
                <View style={styles.sideMenuButton}>
                    <Image source={require('../../assets/images/menu.png')} style={{ width: 24, height: 24 }} />
                </View>
                {/* Wrapper */}
                <View style={styles.wrapper}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>קבלת שירות</Text>
                        <Text style={styles.text2}>בחרו שירות לרכב שלכם</Text>
                    </View>
                    {/* ImageBackground */}
                    <Image source={carImage} style={styles.carImage} />
                    <ImageBackground
                        source={backgroundShape1}
                        style={[styles.backgroundShape1]}
                    />
                    {/* Render the list component */}
                    <ListComponent />
                    {/* Render the dashed line */}
                    <DashedLine />
                    {/* Add container with text */}
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomText}>עדכונים וחדשות</Text>
                    </View>
                    <SecondListComponent />
                    <DashedLine />
                    
                </View>
            </View>
        </ImageBackground>
       
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'fixed', // Set the position to fixed
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '100%',
        alignItems: 'center',
    },
    sideMenuButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
    },
    textContainer: {
        position: 'absolute',
        top: '40%', // Move the text container closer to the top
        right: 10,
        alignItems: 'flex-end',
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 26,
    },
    text2: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    backgroundShape1: {
        position: 'absolute', // Move the background image to the top
        width: '70%', // Reduce the width of the background image
        aspectRatio: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 330,
        right: 150,
    },
    carImage: {
        width: '25%', // Adjust the width of the car image
        height: '25%', // Adjust the height of the car image
        resizeMode: 'contain',
        alignSelf: 'center', // Center the image horizontally
        marginTop: -40, // Move the image 20 units upward (adjust as needed)

    },
    SboxContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end', // Change justifyContent to 'flex-start'
        marginTop: 0, // Adjust the marginTop to move the list down
        paddingLeft: 20, // Adjust the paddingLeft to move the list to the left
        width: '100%', // Adjust the width of the container if needed
        
        
    },
    boxContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end', // Change justifyContent to 'flex-start'
        marginTop: 200, // Adjust the marginTop to move the list down
        paddingLeft: 20, // Adjust the paddingLeft to move the list to the left
        width: '100%', // Adjust the width of the container if needed
        
        
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 100, // Adjust the width of the box
        height: 100, // Adjust the height of the box
        marginRight: 50, // Adjust this value to create space between boxes
    },
    Sbox: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 200, // Adjust the width of the box
        height: 100, // Adjust the height of the box
        marginRight: 50, // Adjust this value to create space between boxes
    },
    logo: {
        width: 50, // Adjust the width of the logo
        height: 50, // Adjust the height of the logo
        resizeMode: 'contain',
    },
    name: {
        marginTop: 5,
        fontSize: 16,
    },
    dashedLineContainer: {
        width: '100%', // Adjust the width to match the width of the list
        alignItems: 'center',
        bottom: 15, // Adjust the marginTop to move the dashed line closer to the list
    },
    dashedLine: {
        width: '100%', // Set the width to 100% to match the container width
        borderBottomWidth: 1,
        borderBottomColor: '#dashedLineColor', // Adjust color as needed
        borderStyle: 'dashed',
    },
    bottomContainer: {
        flexDirection: 'row', // Align items in a row
        justifyContent: 'flex-end', // Align items to the end of the row
        width: '95%',
        height: 50, // Adjust the height as needed
        alignItems: 'center',
        bottom: 10, // Adjust the marginTop as needed
        backgroundColor: 'gray', // Adjust the background color as needed
        borderRadius: 10, // Adjust the border radius as needed
    },
    bottomText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Adjust the color as needed
        marginRight: 10, // Add right margin to the text to create space between the text and container edge
    },
});

export default HomePage;
