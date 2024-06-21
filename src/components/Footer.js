import React from "react";
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import CustomButton from "./customButton";

const Footer = () => {
    const uploadDocument = () => {
        // add upload logic
    };

    const disconnect = () => {
        // add disconnect logic
    };

    return (
        <View style={styles.footerContainer}>
            <CustomButton 
                onPress={uploadDocument}
                title='העלה מסמך'
                buttonStyle={styles.uploadButton}
                textStyle={styles.buttonText}/>
            <CustomButton 
                onPress={disconnect}
                title='התנתק'
                buttonStyle={styles.disconnectButton}
                textStyle={styles.buttonText}/>
        </View>
        );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
    },
    uploadButton: {
        backgroundColor: '#2ecc71',
    },
    disconnectButton: {
        backgroundColor: '#e74c3c',
    },
    buttonText: {
        color: '#fff',
    },
});

export default Footer;