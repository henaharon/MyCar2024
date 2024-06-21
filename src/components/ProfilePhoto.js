import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import defaultAvatar from '../assets/icons/defaultavatar.png';
import LightboxModal2 from "./LightboxModal2";

const ProfilePhoto = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(defaultAvatar);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const choosePhoto = () => {
        const options = {
            noData: true,
        };
        launchImageLibrary(options, response => {
            if (response.uri) {
                setProfilePhoto({ uri: response.uri });
                toggleModal();
            }
        });
    };

    const takePhoto = () => {
        const options = {
            noData: true,
        };
        launchCamera(options, response => {
            if (response.assets && response.assets.length > 0) {
                setProfilePhoto({ uri: response.assets[0].uri });
                toggleModal();
            }
        });
    };
    const removePhoto = () => {
        setProfilePhoto(defaultAvatar);
        toggleModal();
    };

    const handleModalClose = () => {
        toggleModal();
    };

    const handleTakePhoto = () => {
        takePhoto();
    };

    const handleChoosePhoto = () => {
        choosePhoto();
    };

    const handleRemovePhoto = () => {
        removePhoto();
    };

    const modalButtons = [
        {
            text: 'צלם תמונה',
            icon: 'camera',
            onPress: handleTakePhoto,
        },
        {
            text: 'בחר מגלריית תמונות',
            icon: 'photo',
            onPress: handleChoosePhoto,
        },
        {
            text: 'מחק תמונה',
            icon: 'trash',
            textColor: 'red',
            onPress: handleRemovePhoto,
        },
    ];

    return (
        <View style={styles.photoContainer}>
            <TouchableOpacity onPress={toggleModal}>
                <Image source={defaultAvatar} style={styles.profilePhoto} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={toggleModal}>
                <Icon name="photo" size={18} color="#fff" />
            </TouchableOpacity>

            <LightboxModal2
                visible={isModalVisible}
                onClose={handleModalClose}
                title="תמונת פרופיל"
                buttons={modalButtons}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    photoContainer: {
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 20,
        position: 'relative',
        padding: 16,
    },
    profilePhoto: {
        width: 170,
        height: 170,
        borderRadius: 60,
    },
    cameraButton: {
        position: 'absolute',
        left: '33%',
        backgroundColor: 'blue',
        borderRadius: 8,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
});

export default ProfilePhoto;