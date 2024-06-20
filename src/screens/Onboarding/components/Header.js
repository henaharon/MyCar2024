import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import imageProfileDefault from '../../../assets/profile-modified.png';
import galleryImage from '../../../assets/gallery.png';
import { launchImageLibrary } from 'react-native-image-picker';

const Header = () => {
    const [imageProfile, setImageProfile] = useState(imageProfileDefault);

    const handleImagePicker = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    Alert.alert('ImagePicker Error: ', response.error);
                } else if (response.assets && response.assets.length > 0) {
                    const source = { uri: response.assets[0].uri };
                    setImageProfile(source);
                }
            }
        );
    };

    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageProfile} />
            <TouchableOpacity style={styles.galleryContainer} onPress={handleImagePicker}>
                <Image style={styles.imageGallery} source={galleryImage} />
            </TouchableOpacity>
            <Text style={styles.title}>נעים להכיר</Text>
            <Text style={styles.text}>כמה פרטים קטנים וממשיכים...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%',
        position: 'relative',
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 90,
    },
    imageGallery: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    galleryContainer: {
        position: 'absolute',
        top: 0,
        right: '28%',
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
});

export default Header;
