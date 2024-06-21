import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfilePhoto = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);

    const choosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                setProfilePhoto(response);
            }
        });
    };

    return (
        <TouchableOpacity onPress={choosePhoto} style={styles.photoContainer}>
            {profilePhoto ? (
                <Image source={{ uri: profilePhoto.uri }} style={styles.profilePhoto}  />
            ) : (
                <View stlye={styles.photoPlaceholder}>
                    <Text>Add Photo</Text>
                </View>
            )}
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    photoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    photoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        
    },
});

export default ProfilePhoto;