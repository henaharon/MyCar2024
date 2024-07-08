import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TermsModal from './TermsModal';

const TermsLink = ({ modalTitle }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handlePress = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.link}>{modalTitle}</Text>
            </TouchableOpacity>
            <TermsModal
                isVisible={isVisible}
                title={modalTitle}
                onClose={handleClose}
                onBackdropPress={handleClose}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        
    },
    container: {


    },
});

export default TermsLink;
