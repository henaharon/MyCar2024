import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageInput = () => {
    const ImagePicker = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
    };

    let options = {
        storageOptions: {
            path: 'image',
        },
    };

    launchImageLibrary(options, (response) => {
        console.log(response);
    });

  return (
    <View style={styles.photoInputContainer}>
        <Image style={styles.photoContainer} source={require('../../../assets/i1-assets/car3.png')} />
        <Image style={styles.photoContainer} source={require('../../../assets/i1-assets/car2.jpg')} />
        <Button title="הוספת תמונה" onPress={ImagePicker()} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    photoInputContainer:{
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer:{
        width: windowWidth * 0.32,
        height: windowHeight * 0.23,
        borderRadius: 10,
    }
});

export default ImageInput;
