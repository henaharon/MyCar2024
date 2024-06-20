import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import PropTypes from 'prop-types';
import fileImage from '../../../assets/file.png';
import plusImage from '../../../assets/plus.png';

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

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: '12%',
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
    },
    fileName: {
        fontSize: 10,
        color: '#000',
    },
    textContainer: {
        alignItems: 'flex-start',
    },
    image: {
        height: 20,
        width: 20,
    },
    imageFile: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
});

export default FileInput;
