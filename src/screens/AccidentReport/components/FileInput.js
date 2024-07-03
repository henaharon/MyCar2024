import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import PropTypes from 'prop-types';
import fileImage from '../../../assets/icons/file.png';
import plusImage from '../../../assets/icons/plus.png';

const FileInput = ({ text, onFileSelect }) => {
    const [fileName, setFileName] = useState('');

    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFileName(res[0].name);
            onFileSelect(res[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                throw err;
            }
        }
    };

    return (
            <View style={styles.container}>
                <Image source={fileImage} style={styles.imageFile} />
                <View style={styles.textContainer}>
                    <Text style={styles.buttonText}>{text}</Text>
                    {fileName ? <Text style={styles.fileName}>{fileName}</Text> : <Text style={styles.fileName}>הוסף צילום</Text>}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleFilePick}>
                    <Image source={plusImage} style={styles.image} />
                </TouchableOpacity>
            </View>


    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: windowWidth,
    },
    button: {
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#ECDFDF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    fileName: {
        fontSize: 10,
        color: '#000',
    },
    textContainer: {
        position: 'relative',
        right: windowWidth * 0.1,
    },
    image: {
        height: 20,
        width: 20,
    },
    imageFile: {
        height: 57,
        width: 57,
        resizeMode: 'contain',
    },
});

export default FileInput;